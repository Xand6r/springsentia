import Image from 'next/image';
import logo from 'public/images/logowhite.svg';
import circularlogo from 'public/images/circularLogo.svg';

import {
    Facebook, Instagram, Twitter
} from './assets'
import styles from './footer.module.scss';

export default function Index() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__top}>
                <section className={styles.first__section}>
                    <Image src={logo} alt=""/>
                    <div className={styles.first__section__content}>
                        <p>About Us</p>
                        <p>Become a Partner</p>
                        <p>Terms &#38; Conditions</p>
                        <p>Privacy Policy</p>
                    </div>
                </section>

                <section className={styles.second__section}>
                    <div>
                        <h4>Help</h4>
                        <div>
                            <p>FAQs</p>
                            <p>Blog</p>
                            <p>Delivery &#38; Returns</p>
                            <p>Contact Us</p>
                        </div>
                    </div>

                    <div>
                        <h4>Products</h4>
                        <div>
                            <p>Women</p>
                            <p>Men</p>
                            <p>Kids</p>
                            <p>Hair</p>
                            <p>Skin</p>
                            <p>Collections</p>
                        </div>
                    </div>

                </section>

                <section className={styles.third__section}>
                    <h3>
                        Get updates on our new products, promotions and more
                    </h3>
                    <div className={styles.input__wrapper}>
                        <input type="text" placeholder='Enter email' />
                        <p>
                            SUBSCRIBE
                        </p>
                    </div>
                </section>
            </div>

            <div className={styles.footer__bottom}>
                <div className={styles.footer__logo}>
                    <Image alt="logo" src={circularlogo}/>
                    <h6>
                        © Springsentia 2021. All rights reserved.
                    </h6>
                </div>

                <div className={styles.medialogo}>
                    <Instagram />
                    <Facebook />
                    <Twitter />
                </div>

            </div>
        </footer>
    )
}
