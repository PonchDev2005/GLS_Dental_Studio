import { useEffect } from "react"
import AOS from "aos"
import 'aos/dist/aos.css';
import data from "../data";
import { AboutPageIntro } from "../components/AboutPageIntro"
import { AboutPageDoctors } from "../components/AboutPageDoctors";

export function AboutPage() {
    const aboutpage = data.aboutpage;

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div className="AboutPage">
            <AboutPageIntro aboutpage={aboutpage} />
            <AboutPageDoctors aboutpage={aboutpage} />
        </div>
    )
}
