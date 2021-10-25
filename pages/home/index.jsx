import Head from "next/head"

import NavBar from 'components/navbars/home';
import Footer from 'components/footer';

import Landing from './components/landing';
import Process from './components/process';
import Values from './components/values';
import BestSeller from './components/bestseller';

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

        {/* the footer page */}
        <Footer />
        {/* the footer page */}
    </div>
  )
}