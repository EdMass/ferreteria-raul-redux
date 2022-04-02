import React from "react";
import fireApp from "../firebase/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth(fireApp);

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [error, setError] = React.useState(null);
  const [isRegistro, setIsRegistro] = React.useState(true)

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
    }

  };

  const registrar = React.useCallback(
    async() => {
      try {
        await createUserWithEmailAndPassword(auth ,email, password)
      } catch (error) {
        console.log(error);
        setError(error.message)
      }
    },
    [email, password],
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
              onChange={(e) => setpassword(e.target.value)}
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
