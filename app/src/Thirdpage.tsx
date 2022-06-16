import { Field } from "formik";
import { MyFormValues } from "./Register";
import styles from "./styles/Register.module.css";
import { Link } from "react-router-dom";
interface ThirdpageProps {
  values: MyFormValues;
}

export default function Thirdpage(props: ThirdpageProps) {
  return (
    <div className={styles.container}>
      <div className={styles.childcontainer}>
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
        <Link to="/login">
          <button type="submit" className={styles.btn}>
            Submit
          </button>
        </Link>
      </div>
    </div>
  );
}
