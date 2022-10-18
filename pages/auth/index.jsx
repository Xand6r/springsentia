import Head from "next/head";
import NavBar from "components/navbars/home";
import AuthView from "__pages__/auth";
import styles from "./auth.module.scss";

export default function Index() {
  return (
    <>
      {/* define extra components we are goign to be using for the login page */}
      {/* clearly define the title */}
      <Head>
        <title>Springsentia Login</title>
      </Head>
      {/* the navbar */}
      <NavBar />
      {/* the navbar */}

      {/* define extra components we are goign to be using for the login page */}
      <div className={styles.loginpage}>
        <AuthView />
      </div>
    </>
  );
}
