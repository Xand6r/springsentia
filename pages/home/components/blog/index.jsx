import styles from "./blog.module.scss";
import { Holistic } from "./assets";

import BlogPost from 'components/blogpost';

const fauxBlogPosts = [
    {
        image: "https://res.cloudinary.com/xand6r/image/upload/v1635240952/springsentia/Blog_Image_dhfyvy.png",
        category: "haircare",
        dateCreated: "04 september 2021",
        title: "Product Buildup: Myth C",
        subTittle: "Perhaps, the flakes that you spotted on your scalp may not have been caused by dandruff like you earlier thought, it may actually have been product buildup."
    },
    {
        image: "https://res.cloudinary.com/xand6r/image/upload/v1635240950/springsentia/pexels-august-de-richelieu-4261253_7_vddcb5.png",
        category: "lifestyle",
        dateCreated: "15 march 2021",
        title: "How to Take Care of Your Long and Natural Hair",
        subTittle: "Perhaps, the flakes that you spotted on your scalp may not have been caused by dandruff like you earlier thought, it may actually have been product buildup."
    },
    {
      image: "https://res.cloudinary.com/xand6r/image/upload/v1635240931/springsentia/pexels-august-de-richelieu-4261253_11_zlousl.png",
      category: "lifestyle",
      dateCreated: "15 march 2021",
      title: "How to Take Care of Your Long and Natural Hair",
      subTittle: "Perhaps, the flakes that you spotted on your scalp may not have been caused by dandruff like you earlier thought, it may actually have been product buildup."
  },
  {
    image: "https://res.cloudinary.com/xand6r/image/upload/v1635240946/springsentia/unsplash_6W4F62sN_yI_vhy6uc.png",
    category: "haircare",
    dateCreated: "04 september 2021",
    title: "Product Buildup: Myth C",
    subTittle: "Perhaps, the flakes that you spotted on your scalp may not have been caused by dandruff like you earlier thought, it may actually have been product buildup."
},

]

export default function Index() {
  return (
    <section className={styles.holistic__container}>
      {/* section for the text content */}
      <div className={styles.header}>
        <Holistic />
        <h2>A holistic experience</h2>
        <h5>
          Beyond products that deliver results, we are passionate about giving
          you a complete experience because great hair and skin also depends on
          healthy lifestyles. We have a number of tips we’re sure you would
          love. Dip into our blog and have fun!
        </h5>
      </div>
      {/* section for the text content */}

      {/* section for the blog cards */}
    <div className={styles.content}>
        {
           fauxBlogPosts.map((obp, i) => (
              <BlogPost post={obp} small={i==1 || i==2}/>
           ))
        }
    </div>
      {/* section for the blog cards */}
      <div className={styles.cta}>
        <button className="--lined">
          <span>
            GO TO BLOG
          </span>
          <Arrow />
        </button>
      </div>
    </section>
  );
}


const Arrow = () => (
  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.1719 9.49998L-0.000281411 9.49998L-0.000281748 7.50028L12.1711 7.49957L6.80774 2.13617L8.22196 0.721956L16.0001 8.50013L8.22196 16.2783L6.80774 14.8641L12.1719 9.49998Z" fill="#014C37"/>
  </svg>
)