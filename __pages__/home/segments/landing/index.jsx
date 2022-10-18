import Image from 'next/image';

import Hero1 from 'public/images/home/hero1.png';
import Hero2 from 'public/images/home/hero2.png';

import styles from './landing.module.scss';
import RenderStyledImage from 'components/images/renderstyledimage';

export default function Index() {
  return (
    <section className={styles.landing__cover}>
      <div className={styles.landing__content}>
        <h1>
          {' '}
          Real &amp;
          <br /> Natural Results{' '}
        </h1>
        <h4>
          We understand how much your skin and hair matter to you. It does to us
          too. That’s why we’ve put in so much care in making products that give
          you real &amp; natural results.
        </h4>
        <form className={styles.input__group}>
          <button type="submit" className="--filled">
            <span>SHOP NOW</span>
            <div style={{ transition: '300ms' }} className="image">
              <RenderStyledImage className={styles.left__arrow} src="/images/leftarrow.svg" />
            </div>
          </button>
        </form>
      </div>
      <div className={styles.cover__image}>
        <section>
          <div>
            <Image layout="responsive" alt="nice cream" src={Hero2} />
          </div>
          <div>
            <Image layout="responsive" alt="nice cream" src={Hero1} />
          </div>
        </section>
      </div>
    </section>
  );
}
