import { Minus, Plus } from "components/modal/cart/assets";
import styles from "components/modal/cart/Cart.module.scss";

const index = () => {
  return (
    <div>
      <div className={styles.cartInfo_add}>
        <div className={styles.cartInfo_minus}>
          <Minus />
        </div>
        <p>1</p>
        <div className={styles.cartInfo_plus}>
          <Plus />
        </div>
      </div>
    </div>
  );
};

export default index;
