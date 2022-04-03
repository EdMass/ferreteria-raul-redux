import React, { useState } from "react";
import fireApp from "../firebase/firebase";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const auth = getAuth(fireApp);

const Admin = () => {
    const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const red = React.useEffect(() => {
    if (auth.currentUser) {
      console.log("existe el usuario");
      setUser(auth.currentUser)
    } else {
      console.log("no existe el usuario");
      navigate("/login");
    }
  }, []);

  return <div>{red}</div>;
};

export default Admin;
