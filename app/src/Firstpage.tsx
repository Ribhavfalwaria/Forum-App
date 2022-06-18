import React, { Dispatch, SetStateAction } from "react";
import { Field } from "formik";
import { MyFormValues } from "./Register";
import styles from "./styles/Register.module.css";

interface SecondpageProps {
  setfirst: Dispatch<SetStateAction<string>>;
  first: string;
}
export default function Firstpage(props: SecondpageProps) {
  return (
    <>
      {/* <h2>{props.values.firstName}</h2>
      <h2>{props.values.lastName}</h2> */}
      <div className={styles.container}>
        <div className={styles.childcontainer}>
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

          <button
            className={styles.btn}
            onClick={() => {
              props.setfirst("secondpage");
              console.log(props.first);
              // console.log(props.values.firstName);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
