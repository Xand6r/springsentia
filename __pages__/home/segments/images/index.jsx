import React from "react";
import Image from "next/image";
import styles from "./images.module.scss";

export default function Images() {
  const images = [
    "/images/random/one.png",
    "/images/random/two.png",
    "/images/random/three.png",
  ];
  return (
    <section className={styles.images}>
      {images.map((image) => (
        <div key={image}>
          <Image alt="image" src={image} layout="fill" />
        </div>
      ))}
    </section>
  );
}
