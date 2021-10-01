import Image from "next/image";

import LeftArrow from "/public/images/leftarrow.svg";
import styles from "./landing.module.scss";
import { useForm } from "@formspree/react";

export default function Index() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_REGISTERATION);
  const submittedStyle = state.succeeded ? { visibility: 'hidden' } : {};
  const submittedText = state.succeeded ? "Thank you! we will be in touch" : "Get notified when we launch";
  return (
    <section className={styles.landing__cover}>
      <div className={styles.landing__content}>
        <h1>Real &amp; Natural Results</h1>
        <h4>
          We understand how much your skin and hair matter to you. It does to us
          too. That’s why we’ve put in so much care in making products that give
          you real &amp; natural results.
        </h4>
        <h3>{submittedText}</h3>
        <form
          style={submittedStyle}
          onSubmit={handleSubmit}
          className={styles.input__group}
        >
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter email"
          />
          <button
            type="submit"
            disabled={state.submitting}
            className="--filled"
          >
            {
              !state.submitting ? (
                <>
                  <span>GET NOTIFIED</span>
                  <Image alt="left arrow" src={LeftArrow} />
                </>
              ) : (
                <span>SAVING ...</span>
              )
            }
          </button>
        </form>
      </div>
    </section>
  );
}
