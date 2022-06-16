import React, { Dispatch, SetStateAction } from "react";
import { Field, FormikProps } from "formik";
import { MyFormValues } from "./Register";
import styles from "./styles/Register.module.css";

interface SecondpageProps {
  setfirst: Dispatch<SetStateAction<string>>;
  first: string;
  formikProps: FormikProps<MyFormValues>;
}
export default function Secondpage(props: SecondpageProps) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.childcontainer}>
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
          <button
            className={styles.btn}
            onClick={() => {
              props.setfirst("thirdpage");
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
