import React from 'react';
import styles from './bestseller.module.scss';

export default function Index() {
    return (
        <section className={styles.bestseller}>
            <div className={styles.bestseller__header}>
                <p>BESTSELLERS</p>
                <h2>
                    If it’s featured, it’s amazing!
                </h2>
            </div>
        </section>
    )
}
