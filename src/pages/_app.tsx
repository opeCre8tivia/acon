import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({
  weight: ["400", "500", "700"],
  style: "normal",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={firaCode.className}>
      <Component {...pageProps} />
    </main>
  );
}
