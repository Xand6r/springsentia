import React from "react";
import Image from "next/image";
import styles from "./contact.module.scss";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <div>
        <Image
          alt="girl in flower"
          src="/images/contact/placeholder.png"
          layout="fill"
        />
      </div>
      <section>
        <div className={styles.text__content}>
          <span>CONTACT US</span>
          <h4>An inspiring journey, together!</h4>
          <p>
            We would love to go with you through your hair and skin care
            journey, inspiring each other along the way. We’re always here;
            reach out whenever you need us.
          </p>
          <button className="--lined">
            <span>GO TO BLOG</span>
            <Arrow />
          </button>
        </div>
      </section>
    </div>
  );
}

const Arrow = () => (
  <svg
    style={{ marginTop: "-2px" }}
    width="13"
    height="12"
    viewBox="0 0 13 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.64936 6.99369L0.767155 6.99369L0.767155 5.53448L9.64885 5.53396L5.73508 1.6202L6.76706 0.588225L12.4429 6.26409L6.76706 11.9399L5.73508 10.908L9.64936 6.99369Z"
      fill="#014C37"
    />
  </svg>
);
