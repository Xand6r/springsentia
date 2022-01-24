import Image from "next/image";
import LandingCream from "public/images/landingcream.png";
import styles from "components/modal/cart/Cart.module.scss";

const index = () => {
  return (
    <div>
      <div className={styles.cartInfo_container}>
        <div className={styles.cart_cream_twoImage}>
          <Image src={LandingCream} width={51} height={56} alt="" />
          <div className={styles.creamImg_two}>
            <Image src={LandingCream} width={51} height={56} alt="" />
          </div>
        </div>
        <div className={styles.cartInfo_details_two}>
          <p className={styles.cartInfo_heading}>Mist3 Hair Butter</p>
          <p className={styles.cartInfo_text}>
            Hair butter with pure shea butter
          </p>
          <div className={styles.cart_info_minusPlus}>
        </div>
        </div>

        <div className={styles.cartInfo_price}>
          <p className={styles.cartInfo_amount}>10,500</p>
          <p className={styles.cartInfo_remove}>REMOVE</p>
        </div>
      </div>
    </div>
  );
};

export default index;
