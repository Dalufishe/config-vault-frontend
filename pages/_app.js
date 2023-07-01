import Head from "next/head";
import "../global/global.scss";
import Navbar from "../components/_global/layouts/Navbar";
import { cx } from "@emotion/css";

function MyApp({ Component, pageProps }) {
  return (
    <div className={cx("text-white bg-black")}>
      <Head>
        <title>Config Vault - 技術配置文件線上資料庫</title>
        <meta
          name="description"
          content="技術配置文件線上資料庫，方便開發者複製貼上技術配置檔，tailwindcss，redux等，簡化開發流程，增加開發樂趣。"
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
