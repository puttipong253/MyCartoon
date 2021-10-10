import BannerCartoon from "../../components/bannerCartoon";
import Manhwa from "../../components/manhwa";
import TopTenManhwa from "../../components/topTenManhwa";
import RecommendCartoon from "../../components/recommendCatoon";
import CartoonNewEpisode from "../../components/cartoonNewEpisode";

export default function Cartoon() {
    return (
        <>
            <BannerCartoon />

            <div className="my-5 p-5 bg-black bg-opacity-40 rounded-2xl">
                <div className="text-white text-3xl">Top 10 MyCartoon</div>
                <div className="flex gap-5 text-xl text-white mt-5">
                    <div className="border-b-4 border-gold-2">การ์ตูน</div>
                </div>
                <div>
                    <TopTenManhwa />
                </div>
            </div>

            <RecommendCartoon />
            <CartoonNewEpisode />
            <Manhwa />
        </>
    );
}
