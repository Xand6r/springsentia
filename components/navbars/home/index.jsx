import { useState, useRef } from "react";

import Image from "next/image";
import Logo from "public/images/logo.svg";

import { UserIcon, SearchIcon, LikeIcon, CartIcon } from "../icons";

import SmallLogo from "public/images/smalllogo.svg";
import styles from "./navbar.module.scss";

// import the required dropdowns
import WomenDropdown from "../dropdowns/women";
import MenDropdown from "../dropdowns/men";
import KidsDropdown from "../dropdowns/kids";
import CompanyDropdown from "../dropdowns/company";
import CurrencyDropdown from "../dropdowns/currency";
import AccountDropdown from "../dropdowns/account";

import { useClickAway } from "react-use";

export default function Index() {
  const navRef = useRef("");
  const [activeDropdown, setActiveDropdown] = useState("");
  const isTabActive = (tab) => activeDropdown === tab;

  const setActiveTab = (newTab) => {
    const value = newTab === activeDropdown ? "" : newTab;
    setActiveDropdown(value);
  };

  useClickAway(navRef, () => {
    setActiveTab("");
  });
  console.log({ activeDropdown });

  return (
    <nav ref={navRef} className={styles.header}>
      <div className={styles.left__section}>
        <p className={isTabActive("women") ? styles.item__active : ""}>
          <span onClick={() => setActiveTab("women")}>Women</span>
          <WomenDropdown
            open={isTabActive("women")}
            onClose={() => setActiveTab("")}
          />
        </p>
        <p className={isTabActive("men") ? styles.item__active : ""}>
          <span onClick={() => setActiveTab("men")}>Men</span>
          <MenDropdown
            open={isTabActive("men")}
            onClose={() => setActiveTab("")}
          />
        </p>
        <p className={isTabActive("kids") ? styles.item__active : ""}>
          <span onClick={() => setActiveTab("kids")}>Kids</span>
          <KidsDropdown
            open={isTabActive("kids")}
            onClose={() => setActiveTab("")}
          />
        </p>
        <p className={isTabActive("company") ? styles.item__active : ""}>
          <span onClick={() => setActiveTab("company")}>Company</span>
          <CompanyDropdown
            open={isTabActive("company")}
            onClose={() => setActiveTab("")}
          />
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
        <p className={isTabActive("currency") ? styles.item__active : ""}>
          <span onClick={() => setActiveTab("currency")}>NGN</span>
          <CurrencyDropdown
            open={isTabActive("currency")}
            onClose={() => setActiveTab("")}
          />
        </p>
        <p>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => setActiveTab("account")}
          >
            <UserIcon active={isTabActive("account")} />
          </div>
          <AccountDropdown
            open={isTabActive("account")}
            onClose={() => setActiveTab("")}
          />
        </p>
        <p>
          <SearchIcon />
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
