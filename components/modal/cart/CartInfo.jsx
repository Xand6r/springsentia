import Image from "next/image";
import LandingCream from "../../../public/images/landingcream.png";
import styles from "./Cart.module.scss";

const CartInfo = () => {
  return (
    <div>
      <div className={styles.cartInfo_container}>
        <div className={styles.cartInfo_cream_image}>
          <Image src={LandingCream} width={88} height={97} alt="" />
        </div>
        <div className={styles.cartInfo_details}>
          <p className={styles.cartInfo_heading}>Mist3 Hair Butter</p>
          <p className={styles.cartInfo_text}>
            Hair butter with pure shea butter
          </p>
        </div>

        <div className={styles.cartInfo_price}>
          <p className={styles.cartInfo_amount}>3,500</p>
          <p className={styles.cartInfo_remove}>REMOVE</p>
        </div>
      </div>
    </div>
  );
};

// const Plus = () => (
//     <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path fill-rule="evenodd" clip-rule="evenodd" d="M7.875 0H6.125V6.125H0V7.875H6.125V14H7.875V7.875H14V6.125H7.875V0Z" fill="#707070"/>
//     </svg>
// )

export default CartInfo;
