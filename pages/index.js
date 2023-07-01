import { cx } from "@emotion/css";
import Block from "../components/_global/ui/Block";
import ConfigCard from "../components/Homepage/ConfigCard";

// import fs from "fs";
// import path from "path";

export default function index(props) {
  return (
    <div className={cx("w-screen", "flex flex-col items-center")}>
      <Block value={43} />
      {/* Heading */}
      <div className={cx("text-6xl font-bold")}>
        《 技術配置文件線上資料庫平台 》
      </div>
      <Block value={18} />
      {/* Description */}
      <div className={cx("text-c2 font-bold", "w-[1100px]", "text-center")}>
        Config Vault 是一款 Dalufishe
        開發的配置文件線上資料庫，提供了大量預構建的技術配置文件，如{" "}
        <span className="font-mono">`tailwind.config.js`</span> 和{" "}
        <span className="font-mono">`package.json`</span>{" "}
        基礎配置，也支持用戶上傳及存儲自定義文件。Config Vault
        旨在簡化開發流程，提高開發樂趣，並在自由度和易用性之間取得平衡。
      </div>
      <Block value={18} />
      {/* Your Config */}
      <div className={cx("w-[1100px]", "flex flex-col")}>
        <h5 className={cx("text-2xl font-bold")}>您的 Config 合集</h5>
        <Block value={6} />
        {}
        <ConfigCard type="none" />
      </div>
      <Block value={15} />
      {/* Online Database */}
      <div className="w-[1100px]">
        <h5 className={cx("text-2xl font-bold")}>線上資料庫</h5>
        <Block value={6} />
        {props.onlineConfig.map((card) => (
          <ConfigCard key={card.name} {...card} />
        ))}
      </div>
      <Block value={43} />
    </div>
  );
}

export async function getStaticProps() {
  //
  // const onlineConfig = JSON.parse(
  //   fs.readFileSync(
  //     path.join(process.cwd(), "dummy-data", "onlineConfig.json"),
  //     "utf-8"
  //   )
  // );
  const onlineConfig = await (
    await fetch(
      "https://config-vault-firebase-default-rtdb.asia-southeast1.firebasedatabase.app/onlineConfig.json"
    )
  ).json();

  return {
    props: {
      userConfig: [],
      onlineConfig,
    },
    revalidate: 10,
  };
}
