import React from 'react';
import Image from 'next/image';
import styles from './contact.module.scss';
import RenderStyledImage from 'components/images/renderstyledimage';

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
            <span>GET IN TOUCH</span>
            <RenderStyledImage
              className={styles.goto_blog}
              src="/icons/blog/rightarrow.svg"
            />
          </button>
        </div>
      </section>
    </div>
  );
}
