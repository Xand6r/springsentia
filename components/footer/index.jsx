import Image from 'next/image';
import logo from 'public/images/logowhite.svg';
import styles from './footer.module.scss';

export default function Index() {
    return (
        <footer className={styles.footer}>
            <Image src={logo}/>
            <h6>
                2021 Springsentia. All rights reserved.
            </h6>
        </footer>
    )
}
