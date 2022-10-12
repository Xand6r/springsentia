import styles from "./blog.module.scss";
import { Holistic } from "./assets";

import BlogPost from "components/blogpost";

const fauxBlogPosts = [
  {
    image: "/images/blog/one.png",
    title: "How to Take Care of Your Long and Natural Hair",
    subTitle:
      "Perhaps, the flakes that you spotted on your scalp may not have been caused by dandruff like you earlier thought, it may actually have been...",
  },
  {
    image: "/images/blog/two.png",
    title: "How to Take Care of Your Long and Natural Hair",
    subTitle:
      "Perhaps, the flakes that you spotted on your scalp may not have been caused by dandruff like you earlier thought, it may actually have been product buildup.",
  },
  {
    image: "/images/blog/three.png",
    title: "How to Take Care of Your Long and Natural Hair",
    subTitle:
      "Perhaps, the flakes that you spotted on your scalp may not have been caused by dandruff like you earlier thought, it may actually have been product buildup.",
  },
];

export default function Index() {
  return (
    <section className={styles.holistic__container}>
      {/* section for the text content */}
      <div className={styles.header}>
        <Holistic />
        <h2>A holistic experience</h2>
        <h5>
          Beyond products that deliver results, we are passionate about giving
          you a complete experience because great hair and skin also depends on
          healthy lifestyles. We have a number of tips we’re sure you would
          love. Dip into our blog and have fun!
        </h5>
      </div>
      {/* section for the text content */}

      {/* section for the blog cards */}
      <div className={styles.content}>
        {fauxBlogPosts.map((obp, i) => (
          <BlogPost key={i} post={obp} small />
        ))}
      </div>
      {/* section for the blog cards */}
      <div className={styles.cta}>
        <button className="--lined">
          <span>GO TO BLOG</span>
          <Arrow />
        </button>
      </div>
    </section>
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
