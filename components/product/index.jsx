import Image from "next/image";
import styles from './product.module.scss';

import { Star, Plus, Like } from './assets';

export default function Index({ product }) {

    return (
        <div className={styles.product_container}>
            <div className={styles.product_image_wrapper}>
                <Image height='225px' width='205px' src={product.image}/>
                <div className={styles.add_to_cart}>
                    <Plus /> <span> Add to cart </span>
                </div>
                <div className={styles.like}>
                    <Like active />
                </div>
            </div>
            <div className={styles.product_content_wrapper}>
                <h5>{product.title}</h5>
                <p>{product.description}</p>
                <div className={styles.product__meta}>
                    <p>{product.category}</p>
                    <p>{product.subCategory}</p>
                    <p>
                        <Star/> {product.rating}
                    </p>
                </div>
                <div className={styles.product__prices}>
                    <p>{product.currentPrice.toLocaleString()}</p>
                    <span>
                        {product.oldPrice.toLocaleString()}
                    </span>
                </div>
            </div>
        </div>
    )
};
