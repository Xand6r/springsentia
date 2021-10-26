import { useState } from "react";

import Image from "next/image";
import Logo from "public/images/logo.svg";

import { UserIcon, SearchIcon, LikeIcon, CartIcon } from "../icons";

import SmallLogo from "public/images/smalllogo.svg";
import styles from "./navbar.module.scss";

export default function Index() {
  const [activeDropdown, setActiveDropdown] = useState("");
  const isTabActive = (tab) => activeDropdown === tab;

  const setActiveTab = (newTab) => {
    setActiveDropdown((add) => (add === newTab ? "" : newTab));
  };

  return (
    <nav className={styles.header}>
      <div className={styles.left__section}>
        <p
          className={isTabActive("women") ? styles.item__active : ""}
          onClick={() => setActiveTab("women")}
        >
          Women
        </p>
        <p
          className={isTabActive("men") ? styles.item__active : ""}
          onClick={() => setActiveTab("men")}
        >
          Men
        </p>
        <p
          className={isTabActive("kids") ? styles.item__active : ""}
          onClick={() => setActiveTab("kids")}
        >
          Kids
        </p>
        <p
          className={isTabActive("company") ? styles.item__active : ""}
          onClick={() => setActiveTab("company")}
        >
          Company
        </p>
      </div>

      <div>
        {/* logo on big screens */}
        <div className={styles.header__logo__big}>
          <Image alt="logo" src={Logo} />
        </div>
        {/* logo on small screens */}
        <div className={styles.header__logo__small}>
          <Image alt="logo" src={Logo} />
        </div>
      </div>

      <div className={styles.right__section}>
        <p
          className={isTabActive("currency") ? styles.item__active : ""}
          onClick={() => setActiveTab("currency")}
        >
          NGN
        </p>
        <p>
            <SearchIcon />
        </p>
        <p>
          <UserIcon />
        </p>
        <p>
          <LikeIcon />
        </p>
        <p>
          <CartIcon />
        </p>
      </div>
    </nav>
  );
}
