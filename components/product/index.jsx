import Image from 'next/image';
import styles from './product.module.scss';

import RenderStyledImage from 'components/images/renderstyledimage';

export default function Product({ product }) {
  return (
    <div className={styles.product_container}>
      <div className={styles.product_image_wrapper}>
        <div className={styles.product_image}>
          <Image layout="fill" src={product.image} alt="" />
        </div>
        <div className={styles.add_to_cart}>
          <RenderStyledImage
            className={styles.star__image}
            src="/icons/product/plus.svg"
          />
          <span> Add to cart </span>
        </div>
        <div className={styles.like}>
          <RenderStyledImage
            className={styles.like_icon}
            src="/icons/product/like.svg"
          />
        </div>
      </div>
      <div className={styles.product_content_wrapper}>
        <h5>{product.title}</h5>
        <div className={styles.product__meta}>
          <p>{product.category}</p>
          <p>{product.subCategory}</p>
          <p>
            <RenderStyledImage
              className={styles.star__image}
              src="/icons/landing/star.svg"
            />
            {product.rating}
          </p>
        </div>
        <div className={styles.product__prices}>
          <p>{product.currentPrice.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}
