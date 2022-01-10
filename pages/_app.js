import React from 'react';
import Navigation from "../components/Navigation";
import Footer from '../Components/Footer';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {

  return (
        <>
          <Navigation/>
          <Component {...pageProps} />
          <Footer/>
        </>
  );
}

export default MyApp