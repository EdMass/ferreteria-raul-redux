import React from "react";
import fireApp from "../firebase/firebase";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const auth = getAuth(fireApp);

const Redireccion = () => {
  const navigate = useNavigate();
  const red = React.useEffect(() => {
    if (!auth.currentUser) {
      console.log("existe el usuario");
    } else {
      console.log("no existe el usuario");
      navigate("/login");
    }
  }, [navigate]);

  return <div>{red}</div>;
};

export default Redireccion;
