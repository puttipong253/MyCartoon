import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import LayoutDefault from "../components/layouts/default";

function MyApp({ Component, pageProps }) {
    return (
        <LayoutDefault>
            <Component {...pageProps} />
        </LayoutDefault>
    );
}

export default MyApp;
