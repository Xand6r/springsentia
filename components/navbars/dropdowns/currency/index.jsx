import { GreenTick } from "./assets";

import generalStyles from "../dropdown.module.scss";
import styles from "./currency.module.scss";

export default function Index({ open }) {
  if (!open) {
    return "";
  }


  return (
    <div
      className={`${generalStyles.nav_dropdown} ${styles.women_dropdown}`}
    >
      <section
        className={`${generalStyles.section} ${generalStyles.first__section}`}
      >
        <p>CURRENCY</p>
        <div className={generalStyles.section__divider} />
        <div className={styles.content__wrapper}>
          <h6><GreenTick />NGN (Naira)</h6>
          <h6>USD (Dollar)</h6>
        </div>
      </section>
    </div>
  );
}
