import React from "react";
import Head from "next/head";
import { Envelope } from "./assets";
import NavBar from "components/navbars/home";
import styles from "./confirm.module.scss";

export default function index() {
  const name =  "chidonmerole@gmail.com";
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
      <div className={styles.loginpage}>
        <div className={styles.confirm__tab}>
          <Envelope />
          <div className={styles.tab__title}>CONFIRM YOUR EMAIL</div>
          <p className={styles.tab__text}>
            A confirmation mail has been sent to <b>{name}</b>. To
            complete your registration, kindly check your inbox to confirm your
            email
          </p>
          <div className={styles.tab__footer}>
            <section>
                <p>Incorrect email?</p>
                <p>Edit email</p>
            </section>

            <section>
                <p>No email recieved</p>
                <p>Resend Mail</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
