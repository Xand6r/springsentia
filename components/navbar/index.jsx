import Image from 'next/image';

import Logo from 'public/images/logo.svg';
import styles from './navbar.module.scss';

export default function Index() {
    return (
        <nav className={styles.header}>
            <div className={styles.header__logo}>
                <Image src={Logo}/>
            </div>
        </nav>
    )
}
