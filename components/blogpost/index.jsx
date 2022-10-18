import RenderStyledImage from 'components/images/renderstyledimage';
import Image from 'next/image';

import styles from './blogpost.module.scss';

export default function Index({ post, small }) {
  return (
    <div className={`${styles.container} ${styles.__small}`}>
      <div className={styles.container__image}>
        <Image src={post.image} layout="fill" alt="" />
      </div>

      <div className={styles.container__content}>
        <div className={styles.text__section}>
          <h4>{post.title}</h4>
          <h6>{post.subTitle}</h6>
        </div>

        <div className={styles.aux__section}>
          <span>KEEP READING</span>
          <RenderStyledImage
            className={styles.goto_blog}
            src="/icons/blog/rightarrow.svg"
          />
        </div>
      </div>
    </div>
  );
}

const Arrow = () => (
  <svg
    style={{ marginTop: '-3px' }}
    width="11"
    height="10"
    viewBox="0 0 11 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.65396 5.76339L0.0780726 5.76339L0.0780724 4.51879L7.65352 4.51835L4.31536 1.18019L5.19556 0.299989L10.0367 5.14109L5.19556 9.98219L4.31536 9.10199L7.65396 5.76339Z"
      fill="#014C37"
    />
  </svg>
);
