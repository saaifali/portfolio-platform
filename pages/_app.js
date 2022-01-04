import 'tailwindcss/tailwind.css'
import Navigation from "../components/Navigation";
import { ThemeProvider } from 'next-themes'
import Footer from '../Components/Footer';

function MyApp({ Component, pageProps }) {
  return <>
    <ThemeProvider attribute="class" enableSystem={false}>
    <Navigation/>
    <Component {...pageProps} />
    <Footer/>
    </ThemeProvider>
    </>
}

export default MyApp