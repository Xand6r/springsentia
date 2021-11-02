import styles from "./register.module.scss";
import {
  FacebookLogo,
  GoogleLogo,
  EyeOpen,
  EyeClosed,
} from "components/authentication/assets";
import { useState } from "react/cjs/react.development";

const DEFAULT_STATE = {
  firstName: "",
  lastName: "",
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
  return (
    <div className={styles.logincomponent}>
      <h5>register with</h5>

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

      <h6 className={styles.top_one}>
        Be rest assured we don’t share any of your data or post anything on your
        behalf
      </h6>

      <h5 className={styles.alternative}>Or register with email</h5>

      {/* form section */}
      <form className={styles.form}>
        <div className={styles.input_wrapper}>
          <label htmlFor="firstName">First Name</label>
          <input
            onChange={changeState}
            name="firstName"
            type="text"
            placeholder="Enter first name"
          />
        </div>

        <div className={styles.input_wrapper}>
          <label htmlFor="lastName">Last Name</label>
          <input
            onChange={changeState}
            name="lastName"
            type="text"
            placeholder="Enter last name"
          />
        </div>

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
        </div>
      </form>
      {/* form section */}

      {/* footer section */}
      <h6 className={styles.bottom_one}>
        By creating your account, you agree to our <span>Terms and Conditions &amp;
        Privacy Policy</span>
      </h6>
      {/* footer section */}

      <button className="--filled">
            REGISTER
      </button>
    </div>
  );
}
