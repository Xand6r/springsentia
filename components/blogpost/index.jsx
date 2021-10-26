import Image from "next/image";

import styles from "./blogpost.module.scss";

export default function Index({ post, small }) {
  return (
    <div className={`${styles.container} ${small ? styles.__small : ""}`}>
      <div className={styles.container__image}>
        <Image src={post.image} layout="fill" alt="" />
      </div>

      <div className={styles.container__content}>
        <div className={styles.top__section}>
          <span>{post.category}</span>
          <span>{post.dateCreated}</span>
        </div>

        <div className={styles.text__section}>
          <h4>Product Buildup: Myth C</h4>
          <h6>
            Perhaps, the flakes that you spotted on your scalp may not have been
            caused by dandruff like you earlier thought, it may actually have
            been product buildup.
          </h6>
        </div>

        <div className={styles.aux__section}>
          <span>
              READ MORE
          </span>
        <Arrow />
        </div>
      </div>
    </div>
  );
}

const Arrow = () => (
  <svg
    width="15"
    height="14"
    viewBox="0 0 15 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.2348 8.1028L0.852799 8.1028L0.852799 6.3972L11.2342 6.3966L6.65955 1.822L7.86578 0.615777L14.5 7.25L7.86578 13.8842L6.65955 12.678L11.2348 8.1028Z"
      fill="#014C37"
    />
  </svg>
);
