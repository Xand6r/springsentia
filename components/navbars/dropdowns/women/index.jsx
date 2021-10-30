import generalStyles from '../dropdown.module.scss';
import styles from './women.module.scss';
import Image from 'next/image';

const IMAGE_LINK = "https://res.cloudinary.com/xand6r/image/upload/v1635192068/77_copy_2_tbsgqx.png";
export default function index() {
    return (
        <div className={`${generalStyles.nav_dropdown} ${styles.women_dropdown}`}>
            <section className={`${generalStyles.section} ${generalStyles.first__section}`}>
                <p>women</p>
                <div className={generalStyles.section__divider} />
                <div>
                    <h6>see all</h6>
                    <h6>hair</h6>
                    <h6>skin</h6>
                    <h6>collections</h6>
                </div>
            </section>

            <section className={`${generalStyles.section} ${generalStyles.second__section}`}>
                <p>hair</p>
                <div className={generalStyles.section__divider} />
                <div>
                    <h6>Mist3 Hair Butter</h6>
                    <h6>Mist3 Hair Conditioner</h6>
                    <h6>Mist3 Hair Shampoo</h6>
                </div>
            </section>

            <section className={generalStyles.image__section}>
                <div className={generalStyles.image__wrapper}>
                    <Image
                        alt=""
                        layout='fill'
                        src={IMAGE_LINK}
                    />
                </div>
            </section>
        </div>
    )
}
