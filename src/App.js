

import React, { useState, useEffect } from "react";
import LogoA from "./Assets/logo/logoC.png"
import "./App.css";
import { db, auth } from "./firebase/FirebaseInit";
import { makeStyles } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
// import Test from "./Testabc";
import Navbar from "./Component/Navbar";
import NavbarRoutes from './Routes/NavbarRoutes';
function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const useStyles = makeStyles(() => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: "rgba(255,255,255,1)",
    boxShadow: 24,
    padding: "30px 60px",
    borderRadius: "12px",
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const [openSignup, setOpenSignup] = useState(false);

  const [openLogin, setOpenLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, [user, username]);


  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username,
        });
      })
      .catch((err) => alert(err.message));
    setOpenSignup(false);
    setUsername("");
    setEmail("");
    setPassword("");
  };
  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((err) => alert(err.message));
    setOpenLogin(false);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="app">
      <Modal open={openSignup} onClose={() => setOpenSignup(false)}>
        <div style={modalStyle} className={classes.paper}>
          <center>
            <img
              src={LogoA}
              alt=" original logo"
            />
          </center>
          <form className="app__signUp">
            <input
              placeholder="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              placeholder="Email address"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="primary__button" type="submit" onClick={signUp}>
              Sign up
            </button>
          </form>
          <center className="authFooter">
            {/* <small>
              &copy; 2021 Instagram Tribute by{" "}
              <a href="mailto:bkrofegha@gmail.com"> Blessing Krofegha</a>
            </small> */}
          </center>
        </div>
      </Modal>
      <Modal open={openLogin} onClose={() => setOpenLogin(false)}>
        <div style={modalStyle} className={classes.paper}>
          <center>
            <img
              src={LogoA}
              alt="original "
            />
          </center>
          <form className="app__signUp">
            <input
              placeholder="Email address"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="primary__button" type="submit" onClick={login}>
              Log in
            </button>
          </form>
          <center className="authFooter">
            <small>
              &copy; Abhishek.dev{" "}
              <p >Email:abhishek@demo.com  /  Pass:Demo@123</p>
              <p></p>
            </small>
          </center>
        </div>
      </Modal>
      <div className="app__header">
        <div className="app__headerWrapper">
          <img
            src={LogoA}
            alt=" original logo"
          />
          {user ? (
            <button className="text__button" onClick={() => auth.signOut()}>
              Logout
            </button>
          ) : (
            <div className="app__headerButtons">
              <button
                className="primary__button"
                onClick={() => setOpenLogin(true) || setOpenSignup(false)}
              >
                Log in
              </button>
              <button
                className="text__button"
                onClick={() => setOpenSignup(true) || setOpenLogin(false)}
              >
                Sign up
              </button>
            </div>
          )}
        </div>
      </div>
     
      {user && <NavbarRoutes user={user}/>  }
      
    </div>
  );
}

export default App;
