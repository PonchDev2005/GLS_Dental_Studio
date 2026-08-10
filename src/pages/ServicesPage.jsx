import { useEffect } from "react";
import AOS from "aos"
import 'aos/dist/aos.css';
import data from "../data";
import { ServicesPageIntro } from "../components/ServicesPageIntro";
import { ServicesPageKidsPrice } from "../components/ServicesPageKidsPrice";
import { ServicesPageAdultPrice } from "../components/ServicesPageAdultPrice";

export function ServicesPage() {
    const servicespage = data.servicepage;

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div className="ServicesPage">
            <ServicesPageIntro servicespage={servicespage} />
            <ServicesPageKidsPrice servicespage={servicespage} />
            <ServicesPageAdultPrice servicespage={servicespage} />
        </div>
    )
}
