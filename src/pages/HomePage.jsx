import { useEffect } from "react"
import AOS from "aos"
import 'aos/dist/aos.css';
import data from "../data";
import { HomePageIntro } from "../components/HomePageIntro";
import { HomePageInfo } from "../components/HomePageInfo";
import { HomePageDoctors } from "../components/HomePageDoctors";
import { HomePageServices } from "../components/HomePageServices";

export function HomePage() {
    const homepage = data.homepage;

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div className="HomePage">
            <HomePageIntro homepage={homepage} />
            <HomePageInfo homepage={homepage} />
            <HomePageDoctors homepage={homepage} />
            <HomePageServices homepage={homepage} />
        </div>
    )
}
