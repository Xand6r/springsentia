import React from "react";
import Slider from "react-slick";
import ReviewCard from "components/reviewcard";
import styles from "./review.module.scss";

const reviews = [
  {
    text: "We're happy when your hair and skin are happy. This happiness comes from confidence in our promise of real and natural results for you. Our coco-pure values ensure we always keep it. Coco-pure! Completeness, Confidence, and Purity. ",
    name: "chioma",
    image: "/images/reviews/chioma.png",
    stars: "5",
  },
  {
    text: "We're happy when your hair and skin are happy. This happiness comes from confidence in our promise of real and natural results for you. Our coco-pure values ensure we always keep it. Coco-pure! Completeness, Confidence, and Purity. ",
    name: "chioma",
    image: "/images/reviews/chioma.png",
    stars: "5",
  },
  {
    text: "We're happy when your hair and skin are happy. This happiness comes from confidence in our promise of real and natural results for you. Our coco-pure values ensure we always keep it. Coco-pure! Completeness, Confidence, and Purity. ",
    name: "chioma",
    image: "/images/reviews/chioma.png",
    stars: "5",
  },
  {
    text: "We're happy when your hair and skin are happy. This happiness comes from confidence in our promise of real and natural results for you. Our coco-pure values ensure we always keep it. Coco-pure! Completeness, Confidence, and Purity. ",
    name: "chioma",
    image: "/images/reviews/chioma.png",
    stars: "5",
  },
];

export default function Review() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };
  return (
    <div className={styles.review + " reviews"}>
      <section>
        <h2>What people are saying about our products</h2>
        <div className={styles.cards__container}>
          <Slider {...settings}>
            {reviews.map((oneReview) => (
              <ReviewCard key={oneReview.name} review={oneReview} />
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
}
