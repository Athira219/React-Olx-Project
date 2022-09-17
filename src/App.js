import React, { useEffect, useContext } from "react";

import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Create from "./Pages/Create";
import View from "./Pages/ViewPost";

import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Post from "./store/PostContext";

/**
 * ?  =====Import Components=====
 */
import Home from "./Pages/Home";
import { AuthContext, firebaseContext } from "./store/Context";

function App() {
  const { setUser } = useContext(AuthContext);
  const { firebase } = useContext(firebaseContext);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <div>
      <Post>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/create" element={<Create />}></Route>
            <Route path="/view" element={<View />}></Route>
          </Routes>
        </BrowserRouter>
      </Post>
    </div>
  );
}

export default App;
