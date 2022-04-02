import React from "react";
import fireApp, {db} from "../firebase/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword 
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import {useNavigate} from 'react-router-dom'


const auth = getAuth(fireApp);

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);
  const [isRegistro, setIsRegistro] = React.useState(true)

  const navigate = useNavigate()

  const recibirDatos = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError("Ingrese Email");
      return;
    }

    if (!password.trim()) {
      setError("Ingrese Password");
      return;
    }

    if (password.length < 6) {
      setError("El password debe ser mayor a 5 caracteres");
      return;
    }

    setError(null)

    if(isRegistro){
      registrar()
    }else{
      login()
    }

  };

  const login = React.useCallback(
    async() => {
      try {
        const res = await signInWithEmailAndPassword(auth, email, password)
        console.log(res)
        setEmail('')
        setPassword('')
        setError(null)
        navigate('/admin')
      } catch (error) {
        console.log(error);
        if(error.message === 'Firebase: Error (auth/user-not-found).'){
          setError('El email es incorrecto o no está registrado')
        }
        if(error.message === 'Firebase: Error (auth/wrong-password).'){
          setError('El password es incorrecto o el email no está registrado')
        }
      }
    },
    [email, password, navigate],
  )

  const registrar = React.useCallback(
    async() => {
      try {
        const res = await createUserWithEmailAndPassword(auth ,email, password)
        await addDoc(collection(db, "usuarios"), {
          email: res.user.email,
          uid: res.user.uid
        });
        setEmail('')
        setPassword('')
        setError(null)
        navigate('/admin')
        console.log(res);
      } catch (error) {
        console.log(error);
        if(error.message === 'Firebase: Error (auth/invalid-email).'){
          setError('El email no es válido')
        }
        if(error.message === 'Firebase: Error (auth/email-already-in-use).'){
          setError('El email ya está registrado')
        }
      }
    },
    [email, password, navigate],
  )
  

  return (
    <div className="mt-6">
      <h3 className="text-center">
        {
          isRegistro ? 'Registro de usuarios' : "Login de acceso"
        }
      </h3>
      <hr />
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4 ">
          <form onSubmit={recibirDatos}>
            {error && <div className="alert alert-danger">{error}</div>}
            <input
              type="email"
              className="form-control mb-2"
              placeholder="Ingrese un email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              className="form-control mb-2"
              placeholder="Ingrese un password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <div className="pagination gap-2 d-md-flex justify-content-center">
              <button className="btn btn-dark btn-lg" type='submit'>
                {
                  isRegistro ? 'Registrarse' : 'Acceder'
                }
              </button>
              <button 
                className="btn btn-primary btn-lg" 
                onClick={() => setIsRegistro(!isRegistro)}
                type='button'
              >
                {
                  isRegistro ? '¿Estas registrado?' : '¿No tienes cuenta?'
                }
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
