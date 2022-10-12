import Head from "next/head";
import HomeView from "__pages__/home";


export default function Home() {
  return (
    <div>
        {/* clearly define the title */}
        <Head>
          <title>Springsentia</title>
        </Head>
        {/* clearly define the title */}
        
        <HomeView />

    </div>
  )
}