import React from "react";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setpassword] = React.useState("");

  const recibirDatos = (e) => {
    e.preventDefault();
    if(!email.trim()){
        console.log("Ingrese Email")
        return
    }

    if(!password.trim()){
        console.log("Ingrese Password")
        return
    }

    if(password.length < 6){
        console.log("Password debe ser mayor a 6")
        return
    }
  };

  return (
    <div className="mt-6">
      <h3 className="text-center">Acceso o Registro</h3>
      <hr />
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
          <form onSubmit={recibirDatos}>
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

            <button className="btn btn-dark btn-lg">Registrarse</button>
            <button className="btn btn-primary btn-lg ">Crear cuenta</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
