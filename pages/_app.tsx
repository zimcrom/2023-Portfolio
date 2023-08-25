import type { AppProps } from "next/app";
import "../src/app/globals.css"
import Layout from "../components/Layout/Layout";
import "../styles/main.scss"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-black">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
