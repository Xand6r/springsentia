import { TARGET_DATA } from 'data/targets';
import styles from './target.module.scss';
import { useRouter } from 'next/router';
import RenderStyledImage from 'components/images/renderstyledimage';

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
                <RenderStyledImage
                  className={styles.left_arrow}
                  src="/icons/product/leftarrow.svg"
                />
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
