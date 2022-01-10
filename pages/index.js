import Head from 'next/head'
import About from "../components/About";
import Styles from "./index.module.scss";

export default function Home() {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Portfolio - Saif Ali</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={Styles.mainClass}>
        <About/>
      </main>
    </div>
  )
}