import RenderStyledImage from 'components/images/renderstyledimage';
import { useState } from 'react';
import { Envelope } from '__pages__/auth/assets';
import styles from './login.module.scss';

const DEFAULT_STATE = {
  email: '',
  password: '',
};
const name = 'chidonmerole@gmail.com';

export default function Index({ confirmationMode }) {
  const [state, setState] = useState(DEFAULT_STATE);
  const [inputType, setInputType] = useState('text');
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
  console.log({ confirmationMode });

  const login = () => {
    console.log(state);
  };

  return (
    <div className={styles.logincomponent}>
      {confirmationMode && (
        <div className={styles.confirmationModeContent}>
          <RenderStyledImage
            className={styles.envelope__icon}
            src="/icons/auth/envelopeconfirmed.svg"
          />
          <div className={styles.mode__title}>EMAIL CONFIRMED</div>
          <p>
            Your email <b>{name}</b> has been confirmed. Log in below to begin
            your skincare and haircare journey with us
          </p>
          <h5>LOG IN</h5>
        </div>
      )}
      <form className={confirmationMode ? styles.confirm__mode : ''}>
        <h5>Log in with email</h5>
        <div className={styles.input_wrapper}>
          <input
            onChange={changeState}
            name="email"
            type="text"
            placeholder="Enter email"
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

        <button onClick={login} className="--filled">
          LOG IN
        </button>

        <p>Forgot Password?</p>
      </form>

      <div className={styles.auxillarycontent}>
        <h5>OR LOG IN with</h5>
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
      </div>

    </div>
  );
}
