import React from "react";

import NavBar from 'components/navbars/home';
import Footer from 'components/footer';

import Landing from "./segments/landing";
import Process from "./segments/process";
import Values from "./segments/values";
import BestSeller from "./segments/bestseller";
import Blog from "./segments/blog";
import Target from "./segments/target";
import Review from "./segments/reviews";
import Images from "./segments/images";
import Partner from "./segments/partner";
import Contact from "./segments/contact";
import ExtraFooter from "./segments/extrafooter";


export default function HomeView() {
  return (
    <>
      {/* the navbar */}
      <NavBar />
      {/* the navbar */}

      {/* the landing page */}
      <Landing />
      {/* the landing page */}

      {/* best sellers page */}
      <BestSeller />
      {/* best sellers page */}

      {/* shop targets */}
      <Target />
      {/* shop targets */}

      {/* the process page */}
      <Process />
      {/* the process page */}

      {/* the values page */}
      <Values />
      {/* the values page */}

      {/* the blog section */}
      <Blog />
      {/* the blog section */}

      {/* the review section */}
      <Review />
      {/* the review section */}

      {/* the images section */}
      <Images />
      {/* the images section */}

      {/* the partner section */}
      <Partner />
      {/* the partner section */}

      {/* the contact us section */}
      {/* <ContactUs /> */}
      <Contact />
      {/* the contact us section */}

      {/* the footer page */}
      <Footer />
      {/* the footer page */}

      {/* extra payment footer */}
      <ExtraFooter />
      {/* extra payment footer */}
    </>
  );
}
