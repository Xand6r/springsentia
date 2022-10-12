import Image from "next/image";

import Hero1 from "public/images/home/hero1.png";
import Hero2 from "public/images/home/hero2.png";

import LeftArrow from "/public/images/leftarrow.svg";
import styles from "./landing.module.scss";

export default function Index() {
  return (
    <section className={styles.landing__cover}>
      <div className={styles.landing__content}>
        <h1>
          {" "}
          Real &amp;
          <br /> Natural Results{" "}
        </h1>
        <h4>
          We understand how much your skin and hair matter to you. It does to us
          too. That’s why we’ve put in so much care in making products that give
          you real &amp; natural results.
        </h4>
        <form className={styles.input__group}>
          <button type="submit" className="--filled">
            <span>SHOP NOW</span>
            <div style={{ transition: "300ms" }} className="image">
              <Image alt="left arrow" src={LeftArrow} />
            </div>

          </button>
        </form>
      </div>
      <div className={styles.cover__image}>
        <section>
          <div>
            <Image layout="responsive" alt="nice cream" src={Hero2} />
          </div>
          <div>
            <Image layout="responsive" alt="nice cream" src={Hero1} />
          </div>
        </section>
      </div>
    </section>
  );
}
