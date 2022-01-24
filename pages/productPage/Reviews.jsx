import Image from "next/image";
import { Star, Plus, Like } from "../../components/product/assets";
import Purchase from "../../public/images/purchase.png";
import styles from "./Review.module.scss";

function Reviews({ productInfo }) {
  return (
    <div className={styles.reviews_display}>
      <div className={styles.name_ratings}>
        <p className={styles.reviews_name}>Mandy Onyenaturuchi</p>

        <div className={styles.ratings_stars}>
          <p className={styles.star_number}>{productInfo.ratings}</p>
          <div className={styles.reviews_stars}>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>

        <div className={styles.purchase}>
          <Image src={Purchase} width={15} height={18} alt="" />
          <p className={styles.purchase_text}>Confirmed purchase</p>
        </div>
      </div>

      <p className={styles.review_subheadings}>
        Amazing product that works within weeks!
      </p>

      <p className={styles.review_texts}>
        Rub a pea sized amount between your palms in order to warm it up. Apply
        to
        <br />
        moisturized hair and work towards the roots. Rub a pea sized amount
        between your
        <br />
        palms in order to warm it up. Apply to moisturised hair and work towards
        the roots.
      </p>
      <hr className={styles.review_hr}></hr>
    </div>
  );
}

export default Reviews;
