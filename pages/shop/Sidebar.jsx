import ReactSlider from "react-slider";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.sidebar_container}>
      <p className={styles.sidebar_headings}>Shop easy!</p>
      <p className={styles.sidebar_price}>PRICE (₦)</p>
      <div className={styles.sidebar_bar}>
        <ReactSlider
          className={styles.horizontal_slider}
          thumbClassName={styles.example_thumb}
          trackClassName={styles.example_track}
          renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        />
      </div>

      <div className={styles.boxes}>
        <div className={styles.box}>0</div>
        <div className={styles.sidebar_minus}></div>
        <div className={styles.box}>6000</div>
      </div>

      <div className={styles.sidebar_btn}>APPLY NOW</div>

      <div className={styles.sidebar_categories}>
        <div className={styles.sidebar_subheadings}>WOMEN</div>
        <hr className={styles.sidebar_hr}></hr>
        <p>See all</p>
        <p>Hair care</p>
        <p>Skin care</p>
        <p>Collections</p>
      </div>

      <div className={styles.sidebar_categories_two}>
        <div className={styles.sidebar_subheadings}>MEN</div>
        <hr className={styles.sidebar_hr}></hr>
        <p>See all</p>
        <p>Hair care</p>
        <p>Skin care</p>
        <p>Collections</p>
      </div>

      <div className={styles.sidebar_categories_two}>
        <div className={styles.sidebar_subheadings}>KIDS</div>
        <hr className={styles.sidebar_hr}></hr>
        <p>See all</p>
        <p>Hair care</p>
        <p>Skin care</p>
        <p>Collections</p>
      </div>
    </div>
  );
};

export default Sidebar;
