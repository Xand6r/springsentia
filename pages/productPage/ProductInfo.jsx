import { Star } from "components/product/assets";
import Image from "next/image";
import styles from "./dummy.module.scss";
import Love from "public/images/green_love.png";
import Minus from "public/images/minus.png";
import GrayPlus from "public/images/greyPlus.png";
import Btn from "components/addToCartBtn";

function ProductInfo({ productInfo }) {
  return (
    <div className={styles.productInfo_container}>
      <div className={styles.women_haircare}>
        Women
        <div className={styles.dot}></div>
        Haircare
      </div>
      <p className={styles.pp_title}>{productInfo.title}</p>

      <div className={styles.rating_display}>
        {productInfo.rating}
        <div className={styles.pp_stars}>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
        <p className={styles.review}>(15 reviews)</p>
        <p className={styles.pp_reviews}>WRITE A REVIEW</p>
      </div>
      <div className={styles.pp_prices_love}>
        <div className={styles.pp_prices}>
          <p className={styles.current_price}>{productInfo.currentPrice}</p>
          <p className={styles.old_price}>{productInfo.oldPrice}</p>
        </div>
        <div className={styles.pp_love}><Image src={Love} alt="" width={19} height={17} /></div>
      </div>
      <hr className={styles.hr}></hr>

      <div className={styles.pp_uses}>{productInfo.description}</div>

      <div className={styles.pp_quantity_size}>
        <div className={styles.pp_quantity}>
          <small>Quantity</small>
          <div className={styles.ppQuality_box}>
            <Image src={Minus} width={14} height={1.75} />
            <p className={styles.one}>1</p>
            <Image src={GrayPlus} width={14} height={14} />
          </div>
        </div>
        <div className={styles.pp_size}>
          <small>Size</small>
          <div className={styles.ppSize_box}>250ml</div>
        </div>
      </div>

      <div className={styles.ppSize_btn}>
        <Btn />
      </div>

      <div className={styles.collection}>
        See full collections
        <div className={styles.pp_arrow}>
          <FilledArrow />
        </div>
      </div>
    </div>
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

export default ProductInfo;
