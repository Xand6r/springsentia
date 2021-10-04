import Image from 'next/image';

import Logo from 'public/images/logo.svg';
import SmallLogo from 'public/images/smalllogo.svg';
import styles from './navbar.module.scss';

export default function Index() {
    return (
        <nav className={styles.header}>
            {/* logo on big screens */}
            <div className={styles.header__logo__big}>
                <Image alt="logo" src={Logo}/>
            </div>
            {/* logo on small screens */}
            <div className={styles.header__logo__small}>
                <Image alt="logo" src={Logo}/>
            </div>
        </nav>
    )
}
