import React from "react";
import { range } from "utilities";
import Image from "next/image";
import styles from "./reviewcard.module.scss";

export default function ReviewCard({ review }) {
  const { text, name, image, stars } = review;
  return (
    <div className={styles.review_card}>
      <p>{text}</p>

      <section>
        <div className={styles.biodata}>
            <span>
                <Image alt="profile image" layout="fill" src={image}/>
            </span>
            <b>{name}</b>
        </div>
        <div className={styles.arrows}>
          {range(+stars).map((i) => (
            <span key={i}>
              <Star />
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}

const Star = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.44523 0.196289L7.91952 4.73368H12.6904L8.83068 7.53794L10.305 12.0753L6.44523 9.27106L2.5855 12.0753L4.05978 7.53794L0.200053 4.73368H4.97094L6.44523 0.196289Z"
      fill="#8FB685"
    />
  </svg>
);
