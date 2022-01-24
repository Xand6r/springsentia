import Image from "next/image";
import { Star, Plus, Like } from "../../components/product/assets";
import styles from "./Review.module.scss";

const TwoProduct = ({ productInfo }) => {
  return (
    <div className={styles.productProducts_container}>
      <div className={styles.shop_product_image_wrapper}>
        <div className={styles.two_products}>
          <Image height="225px" width="205px" src={productInfo.image} alt="" />
          <div className={styles.image_two}>
            <Image
              height="225px"
              width="205px"
              src={productInfo.image}
              alt=""
            />
          </div>
        </div>
        <div className={styles.add_to_cart}>
          <Plus /> <span> Add to cart </span>
        </div>
        <div className={styles.like}>
          <Like active />
        </div>
      </div>
      <div className={styles.product_content_wrapper}>
        <h5>{productInfo.title}</h5>
        <p>{productInfo.description}</p>
        <div className={styles.product__meta}>
          <p>{productInfo.category}</p>
          <p>{productInfo.subCategory}</p>
          <p>
            <Star /> {productInfo.rating}
          </p>
        </div>
        <div className={styles.product__prices}>
          <p>{productInfo.priceForTwo.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default TwoProduct;
