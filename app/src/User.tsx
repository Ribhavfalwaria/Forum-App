import React, { useState } from "react";
// import { useFormik,Formik,Form } from "formik";
import { Formik, Form, FormikProps } from "formik";
import Secondpage from "./Secondpage";
import Firstpage from "./Firstpage";
import Thirdpage from "./Thirdpage";
import styles from "./styles/Register.module.css";

export interface MyFormValues {
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

// interface jkl<T> {
//   sayo: T;
// }

// type myType=jkl<number>
// type myType2=jkl<string>
// const obj:myType={
//   sayo:54
// }
// const obj2:myType2={
//   sayo:'dasdfsa'
// }

export default function User() {
  const [first, setfirst] = useState<string>("");

  function registerform(first: string, formikProps: FormikProps<MyFormValues>) {
    if (first === "secondpage") {
      return (
        <Secondpage
          setfirst={setfirst}
          first={first}
          formikProps={formikProps}
        />
      );
    } else if (first === "thirdpage") {
      return <Thirdpage values={initialValues} />;
    } else {
      return <Firstpage setfirst={setfirst} first={first} />;
    }
  }

  return (
    <div className={styles.container} style={{ height: "100vh" }}>
      <h1>User Registeration Form</h1>
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
          setfirst("");
        }}
      >
        {(formikProps) => <Form>{registerform(first, formikProps)}</Form>}
      </Formik>
    </div>
  );
}
