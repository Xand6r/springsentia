import generalStyles from "../dropdown.module.scss";
import styles from "./company.module.scss";

export default function Index({ open }) {
  if (!open) {
    return "";
  }
  return (
    <div
      className={`${generalStyles.nav_dropdown} ${styles.company_dropdown}`}
    >
      <section
        className={`${generalStyles.section} ${generalStyles.first__section}`}
      >
        <p>BECOME A PARTNER</p>
        <div className={generalStyles.section__divider} />
        <div className={styles.partner__div}>
          <h6>
            Everyone deserves great skin and hair. Help us reach more people.
          </h6>
          <button className="--hollow">LEARN MORE</button>
        </div>
      </section>

      <section className={`${generalStyles.section} ${styles.first__section}`}>
        <p>SPRINGSENTIA</p>
        <div className={`${generalStyles.section__divider}  ${styles.section__divider}`} />
        <div>
          <h6>About us</h6>
          <h6>Terms &amp; Conditions</h6>
          <h6>Privacy Policy</h6>
          <h6>Delivery &amp; Returns</h6>
        </div>
      </section>

      <section className={`${generalStyles.section} ${styles.second__section}`}>
        <p>HELP</p>
        <div className={`${generalStyles.section__divider}  ${styles.section__divider}`}/>
        <div>
          <h6>FAQs</h6>
          <h6>Blog</h6>
          <h6>Contact Us</h6>
        </div>
      </section>
    </div>
  );
}
