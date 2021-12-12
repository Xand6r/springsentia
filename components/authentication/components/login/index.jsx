import { useState } from "react";
import {
  FacebookLogo,
  GoogleLogo,
  EyeOpen,
  EyeClosed,
  Envelope,
} from "components/authentication/assets";
import styles from "./login.module.scss";

const DEFAULT_STATE = {
  email: "",
  password: "",
};
const name = "chidonmerole@gmail.com";

export default function Index({ confirmationMode }) {
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
  console.log({confirmationMode});

  const login = () => {
    console.log(state);
  };

  return (
    <div className={styles.logincomponent}>
      {confirmationMode && (
        <div className={styles.confirmationModeContent}>
          <Envelope />
          <div className={styles.mode__title}>EMAIL CONFIRMED</div>
          <p>
            Your email <b>{name}</b> has been confirmed. Log in below to begin
            your skincare and haircare journey with us
          </p>
          <h5>LOG IN</h5>
        </div>
      )}
      <form
        className={confirmationMode ? styles.confirm__mode : ""}
      >
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

        <button onClick={login} className="--filled">
          LOG IN
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
