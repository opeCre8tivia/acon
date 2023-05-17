import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  style: "normal",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        id="gi-script"
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-145ERMPY4W"
      />
      <Script id="go-script" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config','G-145ERMPY4W',{page_path:window.location.pathname});
        `}
      </Script>

      <main className={lato.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
