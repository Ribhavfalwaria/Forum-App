import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Login.module.css";
interface objj {
  firstname: string;
  lastname: string;
  email: string;
  mobile: string;
  password: string;
}

interface LoginProps {
  setfirstname: Dispatch<SetStateAction<string>>;
  setlastname: Dispatch<SetStateAction<string>>;
}

export default function Login(props: LoginProps) {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("second");
  const [apidata, setapidata] = useState([]);
  const [user, setuser] = useState(false);
  useEffect(() => {
    fetch("http://localhost:9000/registers")
      .then((response) => response.json())
      .then((data) => {
        setapidata(data);
        console.log(data);
      });
  }, []);

  function checklogin() {
    apidata.find((item: objj) => {
      if (item.firstname === username && item.password === password) {
        props.setfirstname(item.firstname);
        props.setlastname(item.lastname);
        setTimeout(() => {
          setuser(true);
        }, 200);
      }
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
            id="firstname"
            name="firstname"
            // placeholder="First Name"
            onChange={(e) => setpassword(e.target.value)}
            style={{ marginLeft: "7px" }}
          />
        </div>
        {user ? (
          <Link to="/forum">
            <button className={styles.btn} onClick={checklogin}>
              LOGIN
            </button>
          </Link>
        ) : (
          <button className={styles.btn} onClick={checklogin}>
            LOGIN
          </button>
        )}
      </div>
    </div>
  );
}
