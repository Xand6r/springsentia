import Product from "components/product";
import ProductProducts from "pages/productPage/ProductProducts";
import TwoProduct from "pages/productPage/TwoProduct";
import Sidebar from "./Sidebar";
import { RightOutlined, UpOutlined, DownOutlined } from "@ant-design/icons";
import styles from "./Sidebar.module.scss";
import { useState } from "react";
import Backdrop from "components/modal/Backdrop";
import Head from "next/head";
import NavBar from "components/navbars/home";
import ContactUs from "../home/components/contact";
import Footer from "components/footer";

const SHOP_DETAILS = [
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
    priceForTwo: 10500,
    category: "women",
    subCategory: "hair",
    rating: "5.0",
  },
];

const index = () => {
  const [show, setShow] = useState(false);

  const clicked = () => {
    setShow(!show);
  };

  // const close = () => {
  //   setShow(false)
  // }
  return (
    <div>
      {/* define extra components we are going to be using for the login page */}
      {/* clearly define the title */}
      <Head>
        <title>Springsentia Shop</title>
      </Head>
      {/* the navbar */}
      <NavBar />
      <div className={styles.shop_container}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>

        <div className={styles.shop_body}>
          <div className={styles.shop_dropdown}>
            <div className={styles.pp_select}>
              <small>Shop</small>
              <div className={styles.pp_icon}>
                <RightOutlined />
              </div>
              <small>Women</small>
              <div className={styles.pp_icon}>
                <RightOutlined />
              </div>
              <small>See all</small>
            </div>

            <div className={styles.dropdown_dependent}>
              <div className={styles.sort_dropdown}>
                <p style={{ cursor: "pointer" }}>SORT BY</p>
                <div className={styles.shop_popularity} onClick={clicked}>
                  <p>Popularity</p>
                  <div>{show ? <UpOutlined /> : <DownOutlined />}</div>
                </div>
              </div>

              {show ? (
                <div className={styles.dropdown_content}>
                  <div className={styles.dropdown_content_display}>
                    <p>Popularity</p>
                    <div className={styles.dropdown_icons}>
                      <DownOutlined />
                    </div>
                  </div>

                  <div className={styles.dropdown_content_display}>
                    <p>New Arrival</p>
                    <div className={styles.dropdown_icons}>
                      <DownOutlined />
                    </div>
                  </div>

                  <div className={styles.dropdown_content_display}>
                    <p>Price: Low to High</p>
                    <div className={styles.dropdown_icons}>
                      <DownOutlined />
                    </div>
                  </div>

                  <div className={styles.dropdown_content_display}>
                    <p>Price: High to Low</p>
                    <div className={styles.dropdown_icons}>
                      <DownOutlined />
                    </div>
                  </div>

                  <div className={styles.dropdown_content_display}>
                    <p>Product Rating</p>
                    <div className={styles.dropdown_icons}>
                      <DownOutlined />
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          <div className={styles.shop_display}>
            <div>
              {SHOP_DETAILS.map((oneProduct) => (
                <ProductProducts
                  key={oneProduct.image}
                  productInfo={oneProduct}
                />
              ))}
            </div>
            <div className={styles.shopbody_product}>
              {SHOP_DETAILS.map((oneProduct) => (
                <ProductProducts
                  key={oneProduct.image}
                  productInfo={oneProduct}
                />
              ))}
            </div>
            <div>
              {SHOP_DETAILS.map((oneProduct) => (
                <ProductProducts
                  key={oneProduct.image}
                  productInfo={oneProduct}
                />
              ))}
            </div>
          </div>

          <div className={styles.shop_twoProduct}>
            {SHOP_DETAILS.map((oneProduct) => (
              <TwoProduct key={oneProduct.image} productInfo={oneProduct} />
            ))}
          </div>
        </div>
        {show ? <Backdrop /> : null}
      </div>
      <ContactUs />
      {/* the contact us section */}

      {/* the footer page */}
      <Footer />
    </div>
  );
};

export default index;
