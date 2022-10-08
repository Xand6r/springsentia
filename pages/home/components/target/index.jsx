import Image from "next/image";
import { TARGET_DATA } from "data/targets";
import styles from "./target.module.scss";
import { LeftArrow } from "./assets";
import { useRouter } from "next/router";

export default function Target() {
  const router = useRouter();

  return (
    <div className={styles.target}>
      <div className={styles.image__container}>
        {TARGET_DATA.map(({ text, link, image }) => {
          return (
            <section
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => router.push(link)}
              className={styles.image__item}
              key={image}
            >
              <div className={styles.image__footer}>
                <span>{text}</span>
                <LeftArrow />
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
