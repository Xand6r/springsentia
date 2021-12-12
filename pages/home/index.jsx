import Head from "next/head";

import NavBar from 'components/navbars/home';
import Footer from 'components/footer';

import Landing from './components/landing';
import Process from './components/process';
import Values from './components/values';
import BestSeller from './components/bestseller';
import Blog from './components/blog';
import Partner from './components/partner';
import ContactUs from './components/contact'

export default function Home() {
  return (
    <div>
        {/* clearly define the title */}
        <Head>
          <title>Springsentia</title>
        </Head>
        {/* clearly define the title */}
        
        {/* the navbar */}
        <NavBar />
        {/* the navbar */}

        {/* the landing page */}
        <Landing />
        {/* the landing page */}

        {/* best sellers page */}
        <BestSeller />
        {/* best sellers page */}

        {/* the process page */}
        <Process />
        {/* the process page */}

        {/* the values page */}
        <Values />
        {/* the values page */}

        {/* the blog section */}
        <Blog />
        {/* the blog section */}

        {/* the partner section */}
        {/* <Partner /> */}
        {/* the partner section */}

        {/* the contact us section */}
        {/* <ContactUs /> */}
        {/* the contact us section */}

        {/* the footer page */}
        {/* <Footer /> */}
        {/* the footer page */}
    </div>
  )
}