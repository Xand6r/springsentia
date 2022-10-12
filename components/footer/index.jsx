import Image from "next/image";
import logo from "public/images/logowhite.svg";
import circularlogo from "public/images/circularLogo.svg";

import { Facebook, Instagram, Twitter } from "./assets";
import styles from "./footer.module.scss";
const COMPANY_ITEMS = [
  "About Us",
  "Become a Partner",
  "Terms & Conditions",
  "Privacy Policy",
  "Distribution Policy",
  "Delivery & Returns",
];

const SHOP_ITEMS = ["Women", "Men", "Kids", "Hair", "Skin", "Collections"];

const HELP_ITEMS = ["FAQs", "Blogs", "Contact Us"];

const FOOTER_DATA = {
  company: COMPANY_ITEMS,
  shop: SHOP_ITEMS,
  help: HELP_ITEMS,
};

export default function Index() {
  return (
    <footer className={styles.footer}>
      <div>
        <section className={styles.left}>
          <h2>Get updates on our new products, promotions and more</h2>
          <div className={styles.input__group}>
            <input placeholder="Enter Email" type="text" />
            <span>SUBSCRIBE</span>
          </div>
          <div className={styles.social__media}>
            <Instagram />
            <Twitter />
            <Facebook />
          </div>
          <div className={styles.meta__data}>
            © Springsentia 2022. All rights reserved.
          </div>
        </section>

        <section className={styles.right}>
          {Object.keys(FOOTER_DATA).map((header, index) => (
            <div key={index} className={styles.company}>
              <h4>{header}</h4>
              <section>
                {FOOTER_DATA[header].map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </section>
            </div>
          ))}
        </section>

        <section className={styles.mobile__meta}>
          <div>
            <Instagram />
            <Twitter />
            <Facebook />
          </div>
          <span>© Springsentia 2022. All rights reserved.</span>
        </section>
      </div>
    </footer>
  );
}
