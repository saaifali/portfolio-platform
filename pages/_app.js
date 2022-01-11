import React from 'react';
import Navigation from "../components/Navigation";
import Footer from '../Components/Footer';
import '../styles/globals.scss';
import Head from "./index";
import Styles from "./index.module.scss";

function MyApp({ Component, pageProps }) {

  return (
        <>
          <Navigation/>
          <main className={Styles.mainClass}>
            <Component {...pageProps} />
          </main>
          <Footer/>
        </>
  );
}

export default MyApp