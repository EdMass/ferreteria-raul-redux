import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./components/Admin";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import fireApp from "./firebase/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(fireApp);

function App() {

  const [firebaseUser, setFirebaseUser] = React.useState(false)

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user)
      if(user){
        setFirebaseUser(user)
      }else{
        setFirebaseUser(null)
      }
    })
  }, [])

  return firebaseUser !== false ? (
    <Router>
      <div className="container">
        <Navbar firebaseUser={firebaseUser} />
        <Admin />
        <Routes>
          <Route path="/" element={<div>Inicio... </div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<div>Admin... </div>} />
          <Route path="*" element={<h1>404 NotFoundPage</h1>} />
        </Routes>
      </div>
    </Router>
  ) : <h2>Cargandoles...</h2>
}

export default App;
