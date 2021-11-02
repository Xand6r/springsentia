import { useState } from "react";
import {
  FacebookLogo,
  GoogleLogo,
  EyeOpen,
  EyeClosed,
} from "components/authentication/assets";
import styles from "./login.module.scss";

const DEFAULT_STATE = {
  email: "",
  password: "",
};

export default function Index() {
  const [state, setState] = useState(DEFAULT_STATE);
  const [inputType, setInputType] = useState("text");
  const toggleInputType = () => {
    const newType = inputType === "text" ? "password" : "text";
    setInputType(newType);
  };
  const changeState = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const register = () => {
    console.log(state);
  };

  return (
    <div className={styles.logincomponent}>
      <form className={styles.form}>
        <div className={styles.input_wrapper}>
          <label htmlFor="email">Email</label>
          <input
            onChange={changeState}
            name="email"
            type="text"
            placeholder="Enter email"
          />
        </div>

        <div className={styles.input_wrapper}>
          <label htmlFor="password">Password</label>
          <section>
            <input
              data-type="password"
              onChange={changeState}
              name="password"
              type={inputType}
              placeholder="Enter password"
            />
            <i onClick={toggleInputType}>
              {inputType !== "text" ? <EyeOpen /> : <EyeClosed />}
            </i>
          </section>
          <b>Forgot Password?</b>
        </div>

        <button onClick={register} className="--filled">
          REGISTER
        </button>
      </form>

      <div className={styles.auxillarycontent}>
        <h5>OR LOG IN with</h5>
        <section className={styles.options}>
          <div>
            <GoogleLogo />
            <h6>GOOGLE</h6>
          </div>
          <div>
            <FacebookLogo />
            <h6>FACEBOOK</h6>
          </div>
        </section>
      </div>
    </div>
  );
}
