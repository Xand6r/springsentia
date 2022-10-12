import React from "react";
import styles from "./partner.module.scss";
import { LightBulb, EventIcon, SamplesIcon, DiscountIcon } from "./assets";

const ITEMS = [
  {
    renderIcon: () => <DiscountIcon />,
    text: "Access to discounts",
  },
  {
    renderIcon: () => <SamplesIcon />,
    text: "Access to product samples",
  },
  {
    renderIcon: () => <EventIcon />,
    text: "Access to live events",
  },
  {
    renderIcon: () => <LightBulb />,
    text: "Beauty trainings & consultations",
  },
];

export default function Partner() {
  return (
    <section className={styles.partner__wrapper}>
      <div className={styles.partner}>
        <div className={styles.title}>
          <p>BECOME A SPRINGSENTIA PARTNER</p>
          <h4>
            Everyone deserves great skin and hair. Help us reach more people.
          </h4>
          <span>
            Become a Springsentia Partner and enjoy these benefits:
          </span>
        </div>

        <div className={styles.icon__wrapper}>
          {ITEMS.map(({ renderIcon, text }) => (
            <div className={styles.icon} key={text}>
                {renderIcon()}
                <span>{text}</span>
            </div>
          ))}
        </div>

        <button className="--lined">LEARN MORE</button>
      </div>
    </section>
  );
}
