import PPCream from "../../public/images/landingcream.png";
import Image from "next/image";
import styles from "./dummy.module.scss";

function Ingredients() {
  return (
    <div>
      <div className={styles.ingredients_container}>
        <p className={styles.pp_headings}>Product details</p>

        <div className={styles.ingredients_subheadings}>
          <div>
            <p className={styles.pp_subheadings}>How to use</p>
            <p className={styles.pp_texts}>
              Rub a pea sized amount between your palms to warm it <br />
              up. Apply to moisturized hair and work towards the root.
            </p>
            <hr className={styles.ingredients_hr}></hr>
          </div>

          <div>
            <div className={styles.pp_subheadings}>Ingredients</div>
            <p className={styles.pp_texts}>
              Butyrospermum Parkii(Shea)Butter, Cocos Nucifera (Coconut)
              <br />
              Oil, Olea Europaea (Olive) Fruit Oil, Elaeis Guineensis (Palm)
              Kernel
              <br />
              Oil, Lavandula Angustifolia (Lavender) Oil, Mentha Piperita
              <br />
              (Peppermint) Oil And Tocopheryl acetate (Vitamin E) Oil
            </p>
            <hr className={styles.ingredients_hr}></hr>
          </div>

        </div>
      </div>

      <div className={styles.relish_bg}>
        <div className={styles.relish_image}>
          <Image src={PPCream} width={385} height={422} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Ingredients;
