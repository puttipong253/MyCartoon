import Banner from "../components/banner";
import Manhwa from "../components/manhwa";
import TopTenManhwa from "../components/topTenManhwa";
import TopTenNovel from "../components/topTenNovel";
import Recommend from "../components/recommend";
import New from "../components/new";
import Novel from "../components/novel";
import { useState } from "react";

export default function Home() {
    const [tab, setTab] = useState("novel");

    const handleTab = (value) => {
        setTab(value);
    };

    return (
        <>
            <Banner />

            <div className="my-2 xl:my-5 p-5 bg-black bg-opacity-40 rounded-2xl">
                <div className="text-white text-3xl">Top 10 MyCartoon</div>
                <div className="flex gap-5 text-xl text-white mt-5">
                    <div
                        className={` cursor-pointer ${
                            tab === "novel" ? "border-b-4 border-gold-2" : ""
                        }`}
                        onClick={() => handleTab("novel")}
                    >
                        นิยาย
                    </div>
                    <div
                        className={` cursor-pointer ${
                            tab === "cartoon" ? "border-b-4 border-gold-2" : ""
                        }`}
                        onClick={() => handleTab("cartoon")}
                    >
                        การ์ตูน
                    </div>
                </div>
                {tab === "novel" ? <TopTenNovel /> : <TopTenManhwa />}
            </div>

            <Recommend />
            <New />
            <Manhwa />
            <Novel />
        </>
    );
}
