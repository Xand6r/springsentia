import styles from './Btn.module.scss';
import { Plus } from 'components/product/assets';

const index = () => {
  return(
      <div className={styles.pp_btn}>
        <Plus />
        ADD TO CART
      </div>
  )
};

export default index;
