import Banner from "../components/banner";
import Manhwa from "../components/manhwa";
import TopTenManhwa from "../components/topTenManhwa";
import Recommend from "../components/recommend";
import New from "../components/new";
import Novel from "../components/novel";

export default function Home() {
    return (
        <>
            <Banner />

            <div className="my-2 xl:my-5 p-5 bg-black bg-opacity-40 rounded-2xl">
                <div className="text-white text-3xl">Top 10 MyCartoon</div>
                <div className="flex gap-5 text-xl text-white mt-5">
                    <div>นิยาย</div>
                    <div>การ์ตูน</div>
                </div>
                <div>
                    <TopTenManhwa />
                </div>
            </div>

            <Recommend />
            <New />
            <Manhwa />
            <Novel />
        </>
    );
}
