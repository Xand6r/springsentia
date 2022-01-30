import Image from "next/image";
import Head from "next/head";
import {
  AboutLogo,
  CompletenessIcon,
  ConfidenceIcon,
  PurityIcon,
} from "./assets";
import Girl from "public/images/fineGirl.png";
import PartnersImage from "public/images/partner.png";
import NavBar from "components/navbars/home";
import ContactUs from "pages/home/components/contact";
import Footer from "components/footer";
import styles from "./About.module.scss";

const index = () => {
  return (
    <>
      <Head>
        <title>Springsentia AboutUs</title>
      </Head>
      {/* the navbar */}
      <NavBar />
      <div className={styles.about_container}>
        <div className={styles.about_logo}>
          <AboutLogo />
        </div>
        <p className={styles.about_heading}>The Brand</p>
        <p className={styles.about_text}>
          Sprinsentia is a beauty brand that specializes in haircare and
          skincare
          <br />
          products made from natural ingredients. Every product is vegan and
          cruelty
          <br />
          free. They aren't just made wit natural ingredients, they are made
          with love,
          <br />
          intent and care. Our goal is to create products that are true to
          nature,
          <br />
          embody purity, and enhance your beauty.
        </p>

        <div className={styles.theStory_with_image}>
          <div className={styles.theStory}>
            <div className={styles.theStory_heading}>The Story</div>
            <p className={styles.theStory_texts}>
              Our story - and products - is inspired by a true story
              <br />
              that taught true lessons. This is why we have promised to
              <br />
              make products that deliver true results.
              <br />
            </p>
            <p className={styles.theStory_texts_two}>
              Be it a healthy natural hair or skin ambition, we want you
              <br />
              to get results - amazing results! In getting these results
              <br />
              we also look beyond the typical trend of quick fixes. We
              <br />
              take a holistic approach so that when results arrive, they
              <br />
              are here for good; here for you! Results taste sweeter,
              <br />
              last longer, and are more valued when they are natural
              <br />
              and true.
              <br />
            </p>
            <p className={styles.theStory_texts_two}>
              Also, beyond the products, there are healthy lifestyle
              <br />
              practices that must complement. These are often
              <br />
              disregarded or people aren't just aware of them. We are
              <br />
              changing this narrative - naturally - so people can begin
              <br />
              to enjoy true results.
            </p>
          </div>
          <div className={styles.theStory_image}>
            <Image src={Girl} width={567} height={612} alt="" />
          </div>
        </div>

        <div className={styles.cocoPure}>
          <div className={styles.cocoPure_image}>
            <Image src={Girl} width={567} height={842} alt="" />
          </div>
          <div className={styles.cocoPure_image_odd}>
            <div className={styles.cocoPure_texts}>
              <p className={styles.cocoPure_heading}>Coco-pure</p>
              <p className={styles.cocoPure_heading_text}>
                We are happy when your hair and skin are happy. This happiness
                <br />
                comes from confidence in our promise of real and natural results
                <br />
                for you. Our coco-pure values ensure we always keep it. coco-
                <br />
                pure! Completeness, Confidence, and Purity.
              </p>

              <div className={styles.cocoPure_completeness}>
                <div className={styles.cocoPure_subheadings_display}>
                  <div className={styles.cocoPure_subheadings_image}>
                    <CompletenessIcon />
                  </div>
                  <p className={styles.cocoPure_subheadings}>Completeness</p>
                </div>
                <p className={styles.coco_align_texts}>
                  Giving Customers real value is priority for us and we
                  <br />
                  ensure that this value is truly complete (holistic) and
                  <br />
                  not merely a fling or half-hearted effort.
                </p>
              </div>

              <div className={styles.cocoPure_confidence}>
                <div className={styles.cocoPure_subheadings_display}>
                  <div className={styles.cocoPure_subheadings_image}>
                    <ConfidenceIcon />
                  </div>
                  <p className={styles.cocoPure_subheadings}>Confidence</p>
                </div>
                <p className={styles.coco_align_texts}>
                  We believe confidence in a cosmetic brand is key for
                  <br />
                  winning the patronage, trust, and loyalty of customers.
                  <br />
                  We want Springsentia to radiate that at all times and
                  <br />
                  register in the minds of our customers as well.
                </p>
              </div>

              <div className={styles.cocoPure_purity}>
                <div className={styles.cocoPure_subheadings_display}>
                  <div className={styles.cocoPure_subheadings_image}>
                    <PurityIcon />
                  </div>
                  <p className={styles.cocoPure_subheadings}>Purity</p>
                </div>
                <p className={styles.coco_align_texts}>
                  This is the purity of nature and the beauty it gives. The
                  <br />
                  purity in the ingredients used to make each product. And
                  <br />
                  the purity in our intent in making each product to deliver
                  <br />
                  great value and results to our customers.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.partner}>
          <div className={styles.partner_image}>
            <Image src={PartnersImage} width={421} height={634} alt="" />
            {/* <Image src={Cream} width={300} height={300} alt="" /> */}
          </div>
          <div className={styles.partner_texts}>
            <p className={styles.partner_greenText}>BECOME A PARTNER</p>
            <p className={styles.partner_bigText}>
              Everyone deserves a great
              <br />
              skin and hair. Help us reach
              <br />
              more people.
            </p>
            <small>
              Become a springsentia partner and enjoy these benefits
            </small>
            <p className={styles.partner_unknown}>Something will be here</p>
            <div className={styles.partner_learn}>
              <button className="--hollow">LEARN MORE</button>
            </div>
          </div>
        </div>
      </div>
      <ContactUs />
      <Footer />
    </>
  );
};

export default index;
