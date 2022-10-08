import React from "react";
import Image from "next/image";

import styles from "./bestseller.module.scss";

// import required components
import Product from "components/product";
import LeftArrow from "/public/images/leftarrow.svg";

const DEFAULT_PRODUCTS = [
  {
    image:
      "https://res.cloudinary.com/xand6r/image/upload/v1635192068/77_copy_2_tbsgqx.png",
    title: "Mist3 Hair Butter",
    description: "Hair butter with pure shea butter",
    ratings: 5,
    currentPrice: 4500,
    oldPrice: 5500,
    category: "women",
    subCategory: "hair",
    rating: "5.0",
  },
  {
    image:
      "https://res.cloudinary.com/xand6r/image/upload/v1635192068/77_copy_2_tbsgqx.png",
    title: "Mist3 Hair Butter",
    description: "Hair butter with pure shea butter",
    ratings: 5,
    currentPrice: 4500,
    oldPrice: 5500,
    category: "women",
    subCategory: "hair",
    rating: "5.0",
  },
  {
    image: "/images/orange.png",
    title: "Mist3 Hair Butter",
    description: "Hair butter with pure shea butter",
    ratings: 5,
    currentPrice: 4500,
    oldPrice: 5500,
    category: "women",
    subCategory: "hair",
    rating: "5.0",
  },
  {
    image: "/images/orange.png",
    title: "Mist3 Hair Butter",
    description: "Hair butter with pure shea butter",
    ratings: 5,
    currentPrice: 4500,
    oldPrice: 5500,
    category: "women",
    subCategory: "hair",
    rating: "5.0",
  },
];

export default function Index() {
  return (
    <section className={styles.bestseller}>
      <div className={styles.bestseller__header}>
        <h2>Shop our bestsellers</h2>
      </div>
      <div className={styles.bestseller_container}>
        {DEFAULT_PRODUCTS.map((oneProduct) => (
          <Product key={oneProduct.image} product={oneProduct} />
        ))}
      </div>
      <div className={styles.bestseller__addmore}>
        <button type="submit" className="--lined">
          <span>SEE MORE</span>
          <FilledArrow />
        </button>
      </div>
    </section>
  );
}

const FilledArrow = () => (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.6836 9.01023L0.511437 9.01023L0.511437 7.01054L12.6829 7.00983L7.31946 1.64642L8.73368 0.23221L16.5118 8.01038L8.73367 15.7886L7.31946 14.3743L12.6836 9.01023Z"
      fill="#014C37"
    />
  </svg>
);
