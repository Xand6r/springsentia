import React from 'react';
import Image from 'next/image';

import styles from './bestseller.module.scss';

// import required components
import Product from 'components/product';
import LeftArrow from '/public/images/leftarrow.svg';
import RenderStyledImage from 'components/images/renderstyledimage';

const DEFAULT_PRODUCTS = [
  {
    image:
      'https://res.cloudinary.com/xand6r/image/upload/v1635192068/77_copy_2_tbsgqx.png',
    title: 'Mist3 Hair Butter',
    description: 'Hair butter with pure shea butter',
    ratings: 5,
    currentPrice: 4500,
    oldPrice: 5500,
    category: 'women',
    subCategory: 'hair',
    rating: '5.0',
  },
  {
    image:
      'https://res.cloudinary.com/xand6r/image/upload/v1635192068/77_copy_2_tbsgqx.png',
    title: 'Mist3 Hair Butter',
    description: 'Hair butter with pure shea butter',
    ratings: 5,
    currentPrice: 4500,
    oldPrice: 5500,
    category: 'women',
    subCategory: 'hair',
    rating: '5.0',
  },
  {
    image: '/images/samples/shampoo.png',
    title: 'Mist3 Hair Butter',
    description: 'Hair butter with pure shea butter',
    ratings: 5,
    currentPrice: 4500,
    oldPrice: 5500,
    category: 'women',
    subCategory: 'hair',
    rating: '5.0',
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
          <RenderStyledImage
            className={styles.filled_arrow}
            src="/icons/landing/filledArrow.svg"
          />
        </button>
      </div>
    </section>
  );
}
