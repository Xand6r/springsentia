import PPCream from "../../public/images/landingcream.png";
import { Star } from "components/product/assets";
import { RightOutlined } from "@ant-design/icons";
import Image from "next/image";
import Head from "next/head";
import ProductInfo from "./ProductInfo";
import Ingredients from "./Ingredients";
import NavBar from 'components/navbars/home';
import Reviews from "./Reviews";
import ProductProducts from "./ProductProducts";
import ContactUs from '../home/components/contact'
import Footer from 'components/footer';
import styles from "./dummy.module.scss";

const PRODUCTS_DETAILS = [
  {
    image:
      "https://res.cloudinary.com/xand6r/image/upload/v1635192068/77_copy_2_tbsgqx.png",
    title: "Mist3 Hair Butter",
    description: "Hair butter with pure shea butter and",
    // description: "with a soft sheen",
    // description: "with a soft sheen",
    ratings: 5.0,
    currentPrice: 4500,
    oldPrice: 5500,
    category: "women",
    subCategory: "hair",
    rating: "5.0",
  },
];

function index() {
  return (
    <div>
      {/* define extra components we are going to be using for the login page */}
      {/* clearly define the title */}
      <Head>
        <title>Springsentia Product</title>
      </Head>
      {/* the navbar */}
      <NavBar />
      <div className={styles.productPage_container}>
        <div className={styles.left_page}>
          <div className={styles.pp_select}>
            <small>Shop</small>
            <div className={styles.pp_icon}>
              <RightOutlined />
            </div>
            <small>Women</small>
            <div className={styles.pp_icon}>
              <RightOutlined />
            </div>
            <small>Haircare</small>
            <div className={styles.pp_icon}>
              <RightOutlined />
            </div>
            <p>Mist3 Hair Butter</p>
          </div>
          <div className={styles.left_page_image}>
            <div className={styles.PPCream}>
              <Image src={PPCream} alt="" width={385} height={422} />
            </div>
          </div>
        </div>

        <div className={styles.right_page}>
          {PRODUCTS_DETAILS.map((oneProduct) => (
            <ProductInfo key={oneProduct.image} productInfo={oneProduct} />
          ))}
        </div>
      </div>
      <Ingredients />

      <div className={styles.review_container}>
        <div className={styles.customer_reviews}>
          <p className={styles.reviews_heading}>Customer reviews</p>
          <p className={styles.reviews_rating}>
            {PRODUCTS_DETAILS.map((oneProduct) => (
              <p>{oneProduct.ratings}</p>
            ))}
          </p>
          <div className={styles.reviews_stars}>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <div>
            <p className={styles.review_rating_count}>(15 reviews)</p>
            <div className={styles.write_review}>WRITE A REVIEW</div>
          </div>
        </div>

        <div className={styles.customers}>
          <div className={styles.review_ratings}>
            {PRODUCTS_DETAILS.map((oneProduct) => (
              <Reviews key={oneProduct.image} productInfo={oneProduct} />
            ))}
          </div>
          <div className={styles.review_ratings}>
            {PRODUCTS_DETAILS.map((oneProduct) => (
              <Reviews key={oneProduct.image} productInfo={oneProduct} />
            ))}
          </div>
          <div className={styles.review_ratings}>
            {PRODUCTS_DETAILS.map((oneProduct) => (
              <Reviews key={oneProduct.image} productInfo={oneProduct} />
            ))}
          </div>

          <div className={styles.seeReviews}>
            <p>SEE ALL REVIEWS</p>
            <small>1 to 3 of 5</small>
          </div>
        </div>
      </div>
      <div className={styles.productProducts_display}>
        <p className={styles.productProducts_heading}>Compliment with</p>
        <div className={styles.productProducts}>
          <div>
            {PRODUCTS_DETAILS.map((oneProduct) => (
              <ProductProducts
                key={oneProduct.image}
                productInfo={oneProduct}
              />
            ))}
          </div>

          <div className={styles.products_map}>
            {PRODUCTS_DETAILS.map((oneProduct) => (
              <ProductProducts
                key={oneProduct.image}
                productInfo={oneProduct}
              />
            ))}
          </div>
        </div>
      </div>
      <ContactUs />
        {/* the contact us section */}

        {/* the footer page */}
        <Footer />
    </div>
  );
}

export default index;
