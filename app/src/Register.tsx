import React from "react";
import styles from "./styles/Register.module.css";
import { Field, Formik, Form } from "formik";
import { Link } from "react-router-dom";

interface MyFormValues {
  firstname: string;
  lastname: string;
  email: string;
  mobile: string;
  password: string;
}
const initialValues: MyFormValues = {
  firstname: "",
  lastname: "",
  email: "",
  mobile: "",
  password: "",
};

export default function Register() {
  return (
    <div className={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log(typeof values);
          // alert(JSON.stringify(values, null, 2));
          const requestOptions = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          };
          fetch("http://localhost:9000/registers", requestOptions)
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              alert("User Saved successfully...");
            });
        }}
      >
        <div className={styles.childcontainer}>
          <h1>Registeration Form</h1>
          <Form style={{ margin: "20px" }}>
            <div>
              <label htmlFor="firstname" style={{ marginRight: "5px" }}>
                First Name
              </label>
              <Field id="firstname" name="firstname" placeholder="First Name" />
            </div>

            <br />
            <div>
              <label htmlFor="lastname">Last Name</label>
              <Field
                id="lastname"
                style={{ marginLeft: "5px" }}
                name="lastname"
                placeholder="First Name"
              />
            </div>

            <br />
            <div>
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                style={{ marginLeft: "37px" }}
                placeholder="First Name"
              />
            </div>

            <br />
            <div>
              <label htmlFor="mobile">Mobile</label>
              <Field
                id="mobile"
                name="mobile"
                style={{ marginLeft: "25px" }}
                placeholder="First Name"
              />
            </div>
            <br />
            <div>
              <label htmlFor="password">Password</label>
              <Field
                id="password"
                name="password"
                type="password"
                style={{ marginLeft: "5px" }}
                placeholder="First Name"
              />
            </div>
            <br />

            <button
              type="submit"
              className={styles.btn}

              // const requestOptions = {
              //   method: "POST",
              //   headers: { "Content-Type": "application/json" },
              //   body: JSON.stringify(values),
              // };
              // fetch("http://localhost:9000/registers", requestOptions)
              //   .then((response) => response.json())
              //   .then((data) => {
              //     console.log(data);
              //     alert("User Saved successfully...");
              //   });
            >
              Submit
            </button>

            <Link to="/forum">
              <button className={styles.btn}>BACK</button>
            </Link>
          </Form>
        </div>
      </Formik>
      {/* <div className={styles.childcontainer}>
        <div className={styles.formcontainer}>
          <h1>hello</h1>
          
        </div> */}
      {/* <h1>Welcome to the forum</h1>
        <label htmlFor="">Firstame</label>
        <input type="text" name="" id="" />
        <label htmlFor="">Last Name</label>
        <input type="text" name="" id="" />
        <label htmlFor="">Email</label>
        <input type="text" name="" id="" />
        <label htmlFor="">Pasword</label>
        <input type="text" name="" id="" />
        <label htmlFor="">Mobileno</label>
        <input type="text" name="" id="" />
        <button className={styles.btn}>LOGIN</button>
        <br></br>
        <button className={styles.btn}>REGISTER</button> */}
      {/* </div> */}
    </div>
  );
}
