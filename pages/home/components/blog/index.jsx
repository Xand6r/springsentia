import styles from "./blog.module.scss";

import { Holistic } from "./assets";

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
      {/* section for the blog cards */}
    </section>
  );
}
