import React from "react";
import styles from "./styles/First.module.css";
import { Link } from "react-router-dom";
export default function First() {
  return (
    <div className={styles.container}>
      <div className={styles.childcontainer}>
        <h1>Welcome to the xiaomi forum</h1>
        <Link to="/login">
          <button className={styles.btn}>LOGIN</button>
        </Link>
        <br></br>
        <Link to="/register">
          <button className={styles.btn}>REGISTER</button>
        </Link>
      </div>
    </div>
  );
}
