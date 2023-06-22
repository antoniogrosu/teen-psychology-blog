import "src/styles/globals.css";
import Navbar from "src/components/navbar";
import Footer from "src/components/footer";
import { SessionProvider } from "next-auth/react";
export default function App({ Component, pageProps, session }) {
  return (
    <SessionProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  );
}
