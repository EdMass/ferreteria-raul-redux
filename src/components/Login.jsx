import React from "react";
import fireApp, { db } from "../firebase/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const auth = getAuth(fireApp);

const googleAuth = new GoogleAuthProvider();

const githubAuth = new GithubAuthProvider();

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);
  const [isRegistro, setIsRegistro] = React.useState(true);

  const navigate = useNavigate();

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

    setError(null);

    if (isRegistro) {
      registrar();
    } else {
      login();
    }
  };

  const login = React.useCallback(async () => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log(res);
      setEmail("");
      setPassword("");
      setError(null);
      navigate("/admin");
    } catch (error) {
      console.log(error);
      if (error.message === "Firebase: Error (auth/user-not-found).") {
        setError("El email es incorrecto o no está registrado");
      }
      if (error.message === "Firebase: Error (auth/wrong-password).") {
        setError("El password es incorrecto o el email no está registrado");
      }
    }
  }, [email, password, navigate]);

  const registrar = React.useCallback(async () => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await addDoc(collection(db, "usuarios"), {
        email: res.user.email,
        uid: res.user.uid,
      });
      setEmail("");
      setPassword("");
      setError(null);
      navigate("/admin");
      console.log(res);
    } catch (error) {
      console.log(error);
      if (error.message === "Firebase: Error (auth/invalid-email).") {
        setError("El email no es válido");
      }
      if (error.message === "Firebase: Error (auth/email-already-in-use).") {
        setError("El email ya está registrado");
      }
    }
  }, [email, password, navigate]);

  const SignInGoogle = async () => {
    await signInWithPopup(auth, googleAuth)
      .then(async (result) => {
        await setDoc(doc(db, "usuarios", "google"), {
          email: result.user.email,
          uid: result.user.uid,
        });
        navigate("/admin");
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/invalid-email).") {
          setError("El email Ya está autenticado con GitHub");}
        console.log(error.code);
        console.log(error.message);
    });
  };

  const SignInGitHub = async () => {
    await signInWithPopup(auth, githubAuth)
      .then(async (result) => {
        console.log(result);
        await setDoc(doc(db, "usuarios", "github"), {
          email: result.user.email,
          uid: result.user.uid,
        });
        navigate("/admin");
      })
      .catch((error) => {
        error.message === "Firebase: Error (auth/invalid-email)." &&
        setError("El email Ya está autenticado con Google");
        console.log(error.code);
        console.log(error.message);
      });
  };

  return (
    <div className="mt-6">
      <h3 className="text-center">
        {isRegistro ? "Registro de usuarios" : "Login de acceso"}
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
              <button className="btn btn-dark btn-lg" type="submit">
                {isRegistro ? "Registrarse" : "Acceder"}
              </button>
              <button
                className="btn btn-primary btn-lg"
                onClick={() => setIsRegistro(!isRegistro)}
                type="button"
              >
                {isRegistro ? "¿Estas registrado?" : "¿No tienes cuenta?"}
              </button>
            </div>
          </form>
          <hr />
          <div className="row justify-content-center">
            <button
              className="btn btn-dark btn-sm mt-2 mb-2"
              type="button"
              style={{ margin: "0 auto" }}
              onClick={SignInGoogle}
            >
              <i className="fa-brands fa-google me-2 "></i>
              Accede con Google
            </button>

            <button
              className="btn btn-dark btn-sm  "
              type="button"
              style={{ margin: "0 auto" }}
              onClick={SignInGitHub}
            >
              <i className="fa-brands fa-github-alt me-2"></i>
              Accede con GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
