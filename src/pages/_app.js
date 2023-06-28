import "src/styles/globals.css";
import Navbar from "src/components/navbar";
import Footer from "src/components/footer";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

import { SessionProvider } from "next-auth/react";
export default function App({ Component, pageProps, session }) {
  return (
    <SessionProvider>
      <Head>
        <title>Teen Psychology Blog</title>
        <meta
          name="description"
          content="Viziteaza blog-ul dedicat tuturor adolescentilor!"
        />
        <link rel="apple-touch-icon" href="/Logo.svg" />
      </Head>
      <Navbar />
      <Analytics />
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  );
}
