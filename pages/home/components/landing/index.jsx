import Image from "next/image";

import LeftArrow from "/public/images/leftarrow.svg";
import styles from "./landing.module.scss";

export default function Index() {
  return (
    <section className={styles.landing__cover}>
      <div className={styles.landing__content}>
        <h1>Real &amp; Natural Results</h1>
        <h4>
          We understand how much your skin and hair matter to you. It does to us
          too. That’s why we’ve put in so much care in making products that give
          you real &amp; natural results.
        </h4>
        <h3>Get notified when we launch</h3>
        <div className={styles.input__group}>
            <input
                type="text"
                placeholder="Enter email"
            />
            <button className="--filled">
                <span>GET NOTIFIED</span>
                <Image src={LeftArrow}/>
            </button>
        </div>
      </div>
    </section>
  );
}
