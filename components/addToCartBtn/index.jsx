import styles from './Btn.module.scss';
import { Plus } from 'components/product/assets';

const index = () => {
  return(
      <div className={styles.pp_btn}>
        <Plus />
        <p>ADD TO CART</p>
      </div>
  )
};

export default index;
