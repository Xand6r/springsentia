import Image from "next/image";
import { Love } from "../cart/assets";
import { Plus } from "components/product/assets";
import TwoCream from "pages/home/components/cream";
import { Cancel } from "../cart/assets";
import styles from "../cart/Cart.module.scss";
import CartInfo from "../cart/CartInfo";
import Btn from "components/addToCartBtn";

function Index(props) {
  const cancel = () => {
    props.onCancel();
  };

  return (
    <div className={styles.favourite_container}>
      <div className={styles.cart_icon_close}>
        <div className={styles.cart_image}>
          <div className={styles.love}>
            <Love />
          </div>
          <p className={styles.cart_heading}>Your Favourites</p>
        </div>

        <div className={styles.cart_close} onClick={cancel}>
          <Cancel />
        </div>
      </div>

      <div className={styles.cart_info_details}>
        <div className={styles.cart_info_folder}>
          <CartInfo />
        </div>
        <div className={styles.fav_btn}>
          <div className={styles.pp_btn}>
            <Plus />
            <p>ADD TO CART</p>
          </div>
        </div>
        <hr className={styles.fav_hr}></hr>

        <div className={styles.cart_info_foldertwo}>
          <CartInfo />
        </div>
        <div className={styles.fav_btn}>
          <div className={styles.pp_btn}>
            <Plus />
            <p>ADD TO CART</p>
          </div>
        </div>
        <hr className={styles.fav_hr}></hr>

        <div className={styles.cart_info_foldertwo}>
          <TwoCream />
        </div>
        <div className={styles.fav_btn}>
          <div className={styles.pp_btn}>
            <Plus />
            <p>ADD TO CART</p>
          </div>
        </div>
        <hr className={styles.fav_hr}></hr>

        <div className={styles.cart_info_foldertwo}>
          <CartInfo />
        </div>
        <div className={styles.fav_btn}>
          <div className={styles.pp_btn}>
            <Plus />
            <p>ADD TO CART</p>
          </div>
        </div>
        <hr className={styles.fav_hr}></hr>

        <div className={styles.cart_info_foldertwo}>
          <CartInfo />
          <div className={styles.fav_btn}>
            <div className={styles.pp_btn}>
              <Plus />
              <p>ADD TO CART</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
