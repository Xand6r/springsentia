import styles from "./partner.module.scss";
import partnerImage from "public/images/partner.png";
import Image from "next/image";

export default function Index() {
  return (
    <section className={styles.container}>
      <div className={styles.container__image}>
        <Image src={partnerImage} layout="fill" />
      </div>
      <div className={styles.container__text}>
        <div>
          <p>BECOME A PARTNER</p>
          <h2>
            Everyone deserves great skin and hair. Help us reach more people.
          </h2>
          <h5>
            Become a Springsentia Partner and enjoy these benefits:
          </h5>
          <h2 className={styles.benefits__placeholder}>
            Something will be here
          </h2>
          <div className={styles.benefits__cta}>
              <span>
                  LEARN MORE
              </span>
              <RightArrow />
          </div>
        </div>
      </div>
    </section>
  );
}


const RightArrow = () => (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.1719 9.49998L-0.000281411 9.49998L-0.000281748 7.50028L12.1711 7.49957L6.80774 2.13617L8.22196 0.721956L16.0001 8.50013L8.22196 16.2783L6.80774 14.8641L12.1719 9.49998Z" fill="#014C37"/>
    </svg>
)