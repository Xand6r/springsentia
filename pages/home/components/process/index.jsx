import Image from 'next/image';
import {
    Nature
} from './assets';
import styles from './process.module.scss';

export default function Index() {
    return (
        <section className={styles.process}>
            <div className={styles.process__header}>
                <p>OUR PROCESS</p>
                <h2>
                    Inspired by nature, driven by science
                </h2>
            </div>

            <div className={styles.process__tabcontent}>
                <div className={styles.tab__group}>
                    <Tab ImageItem={Nature} heading="Inspired by nature" text="We believe that nature has a lot to offer when it comes to beauty. So through partnerships with local communities across Africa, we are able to utilize natural ingredients to make products that are nourishing." />
                    <div className={styles.vertical__line} />
                    <Tab ImageItem={Nature} heading="Inspired by nature" text="We believe that nature has a lot to offer when it comes to beauty. So through partnerships with local communities across Africa, we are able to utilize natural ingredients to make products that are nourishing." />
                </div>
                <div className={styles.horizontal__line} />
                <div className={styles.tab__group}>
                    <Tab ImageItem={Nature} heading="Inspired by nature" text="We believe that nature has a lot to offer when it comes to beauty. So through partnerships with local communities across Africa, we are able to utilize natural ingredients to make products that are nourishing." />
                    <div className={styles.vertical__line} />
                    <Tab ImageItem={Nature} heading="Inspired by nature" text="We believe that nature has a lot to offer when it comes to beauty. So through partnerships with local communities across Africa, we are able to utilize natural ingredients to make products that are nourishing." />
                </div>
            </div>
        </section>
    )
}


function Tab({heading, text, ImageItem}){
    return (
        <section className={styles.process__tab}>
            <ImageItem/>
            <div className={styles.process__tab__text}>
                <h3>{heading}</h3>
                <p>
                    {text}
                </p>
            </div>
        </section>
    );
}