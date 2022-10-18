import styles from './register.module.scss';
import { EyeOpen, EyeClosed } from '__pages__/auth/assets';
import { useState } from 'react';
import RenderStyledImage from 'components/images/renderstyledimage';

const DEFAULT_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

export default function Index() {
  const [state, setState] = useState(DEFAULT_STATE);
  const [inputType, setInputType] = useState('password');

  const toggleInputType = () => {
    const newType = inputType === 'text' ? 'password' : 'text';
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
    <div className={styles.registercomponent}>
      <h5 className={styles.header}>register with</h5>

      <section className={styles.options}>
        <div>
          <RenderStyledImage
            className={styles.oauth__image}
            src="/icons/login/google.svg"
          />
          <h6>GOOGLE</h6>
        </div>
        <div>
          <RenderStyledImage
            className={styles.oauth__image}
            src="/icons/login/facebook.svg"
          />
          <h6>FACEBOOK</h6>
        </div>
      </section>

      <h6 className={styles.top_one}>
        Be rest assured we don’t share any of your data or post anything on your
        behalf
      </h6>

      <h5 className={styles.alternative}>Or register with email</h5>

      <form className={styles.form}>
        <div className={styles.input_wrapper}>
          <input
            onChange={changeState}
            name="irst and last name*"
            type="text"
            placeholder="First and last name*"
          />
        </div>

        <div className={styles.input_wrapper}>
          <input
            onChange={changeState}
            name="email"
            type="text"
            placeholder="Email*"
          />
        </div>

        <div className={styles.input_wrapper}>
          <section>
            <input
              data-type="password"
              onChange={changeState}
              name="password"
              type={inputType}
              placeholder="Enter password"
            />
            <i onClick={toggleInputType}>
              {inputType == 'text' ? (
                <RenderStyledImage
                  src="/icons/product/eyesopen.svg"
                  className={styles.eyesicon}
                />
              ) : (
                <RenderStyledImage
                  src="/icons/product/eyesclosed.svg"
                  className={styles.eyesicon}
                />
              )}
            </i>
          </section>
        </div>
      </form>

      <h6 className={styles.bottom_one}>
        By creating your account, you agree to our <br />
        <span>Terms and Conditions &amp; Privacy Policy</span>
      </h6>

      <button className="--filled">REGISTER</button>
    </div>
  );
}
