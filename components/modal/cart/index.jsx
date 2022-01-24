import Image from "next/image";
import CartIcon from "../../../public/images/cart.png";
import { Cancel } from "./assets";
import styles from "./Cart.module.scss";
import MinusPlus from "pages/home/components/minusPlus";

import CartInfo from "./CartInfo";
import TwoCream from "pages/home/components/cream";

function Index(props) {
  const cancel = () => {
    props.onCancel();
  };

  return (
    <div className={styles.cart_container}>
      <div className={styles.cart_icon_close}>
        <div className={styles.cart_image}>
          <Image src={CartIcon} width={25} height={25} alt="" />
          <p className={styles.cart_heading}>Your Cart</p>
        </div>

        <div className={styles.cart_close} onClick={cancel}>
          <Cancel />
        </div>
      </div>

      <div className={styles.cart_info_details}>
        <div className={styles.cart_info_folder}>
          <CartInfo />
          <div className={styles.cart_info_minusPlus}>
            <MinusPlus />
          </div>
        </div>
        <hr className={styles.cartInfo_hr}></hr>
        <div className={styles.cart_info_foldertwo}>
          <CartInfo />
          <div className={styles.cart_info_minusPlus}>
            <MinusPlus />
          </div>
        </div>
        <hr className={styles.cartInfo_hr}></hr>

        <div className={styles.cartInfo_twoCream}>
          <TwoCream />
        </div>

        <div className={styles.cart_info_minusPlus}>
          <MinusPlus />
        </div>
      </div>

      <div className={styles.shipping_container}>
        <p>Shipping cost will be calculated at checkpoint</p>
        <hr className={styles.shipping_hr}></hr>

        <div className={styles.shipping_dispay}>
          <h5>Subtotal</h5>
          <div>
            <h6>₦17,500</h6>
            <small>(VAT not inclusive)</small>
          </div>
        </div>
        <div className={styles.shipping_btn}>CHECKOUT</div>
      </div>
    </div>
  );
}

export default Index;
