import Image from "next/image";
import { useState, useRef } from "react";


import {  HamburgerMenu } from "../icons";
import styles from "./navbar.module.scss";

// import the required dropdowns
import WomenDropdown from "../dropdowns/women";
import MenDropdown from "../dropdowns/men";
import KidsDropdown from "../dropdowns/kids";
import CompanyDropdown from "../dropdowns/company";
import AccountDropdown from "../dropdowns/account";

import { useClickAway } from "react-use";
import RenderStyledImage from "components/images/renderstyledimage";

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
        <div className={styles.left__items__section}>
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
            <span onClick={() => setActiveTab("company")}>About Us</span>
            <CompanyDropdown
              open={isTabActive("company")}
              onClose={() => setActiveTab("")}
            />
          </p>
          <div>
            <HamburgerMenu />
          </div>
        </div>

        <div className={styles.left__images__section}>
          {/* logo on big screens */}
          <div className={styles.header__logo__big}>
            <Image alt="logo" layout="fill" src="/images/nav/logo.svg" />
          </div>
        </div>
      </div>

      <div className={styles.right__section}>
        <p id={styles.search__menu}>
          <RenderStyledImage
            className={styles.basic_svg}
            src="/icons/navbar/search.svg"
          />
        </p>

        <p className={styles.account__menu}>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => setActiveTab("account")}
          >
            <RenderStyledImage
              className={styles.basic_svg}
              src="/icons/navbar/user.svg"
            />
          </div>
          <AccountDropdown
            open={isTabActive("account")}
            onClose={() => setActiveTab("")}
          />
        </p>

        <span id={styles.like__menu}>
          <span>
            <RenderStyledImage
              className={styles.basic_svg}
              src="/icons/navbar/like.svg"
            />
          </span>
        </span>
  
        <span key="cart" id={styles.cart__menu}>
          <RenderStyledImage
            className={styles.basic_svg}
            src="/icons/navbar/cart.svg"
          />
        </span>

      </div>
    </nav>
  );
}
