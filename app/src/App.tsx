import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import First from "./First";
import Forum from "./Forum";
import Login from "./Login";
import Register from "./Register";
import { Routes, Route } from "react-router-dom";
// import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Question from "./Question";
import User from "./User";
function App() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [id, setid] = useState("");
  return (
    <div className="App">
      <Routes>
        <Route
          path="/login"
          element={
            <Login
              setfirstname={setfirstname}
              setlastname={setlastname}
              setid={setid}
            />
          }
        />
        <Route path="/register" element={<User />} />
        <Route path="/" element={<First />} />
        <Route
          path="/forum"
          element={
            <Forum firstname={firstname} lastname={lastname} userid={id} />
          }
        />
        <Route
          path="/question"
          element={
            <Question firstname={firstname} lastname={lastname} userid={id} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
