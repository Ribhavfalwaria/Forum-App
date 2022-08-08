import React, { useState, Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./styles/Login.module.css";

interface LoginProps {
  setfirstname: Dispatch<SetStateAction<string>>;
  setlastname: Dispatch<SetStateAction<string>>;
  setid: Dispatch<SetStateAction<string>>;
}

export default function Login(props: LoginProps) {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("second");
  // useEffect(() => {
  //   fetch("http://localhost:9000/registers")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setapidata(data);
  //       console.log(data);
  //     });
  // }, []);

  function checklogin() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: username, password: password }),
    };

    fetch("http://localhost:9000/login", requestOptions)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error(JSON.stringify(response.status));
        }
      })
      .then((data) => {
        alert(data.message);
        props.setfirstname(data.user.firstname);
        props.setlastname(data.user.lastname);
        localStorage.setItem("email", username);
        props.setid(data.user._id);
        navigate("/forum");
      })
      .catch((data) => {
        alert("An Error ocurred with status code " + " " + data.message);
      });
  }
  return (
    <div className={styles.container}>
      <div className={styles.childcontainer}>
        <h1>Login</h1>
        <div>
          <label htmlFor="firstname" style={{ marginRight: "5px" }}>
            UserName
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            // placeholder="First Name"
            onChange={(e) => setusername(e.target.value)}
          />
        </div>
        <br />

        <div>
          <label htmlFor="firstname" style={{ marginRight: "5px" }}>
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            // placeholder="First Name"
            onChange={(e) => setpassword(e.target.value)}
            style={{ marginLeft: "7px" }}
          />
        </div>
        <button className={styles.btn} onClick={checklogin}>
          LOGIN
        </button>
        <Link to="/register">
          <button className={styles.btn} style={{ margin: "30px" }}>
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}
