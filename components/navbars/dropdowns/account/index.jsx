import generalStyles from "../dropdown.module.scss";
import styles from "./account.module.scss";

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
        <p>ACCOUNT</p>
        <div className={generalStyles.section__divider} />
        <div className={styles.content__wrapper}>
          <h6>Log In</h6>
          <h6>Register</h6>
        </div>
      </section>
    </div>
  );
}
