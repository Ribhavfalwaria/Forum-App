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
function App() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  return (
    <div className="App">
      {/* <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
        <hr />
        <Main />
      </div> */}
      <Routes>
        <Route
          path="/login"
          element={
            <Login setfirstname={setfirstname} setlastname={setlastname} />
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<First />} />
        <Route
          path="/forum"
          element={<Forum firstname={firstname} lastname={lastname} />}
        />
        <Route
          path="/question"
          element={<Question firstname={firstname} lastname={lastname} />}
        />
      </Routes>
    </div>
  );
}

export default App;
