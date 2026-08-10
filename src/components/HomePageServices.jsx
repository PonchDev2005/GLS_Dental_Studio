import { Link } from "react-router-dom";

export function HomePageServices({homepage}) {

    const handleScroll = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return (
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="OurServices">
        <div data-aos="zoom-in-down" className="doctors">
            <h1>{homepage?.servicesSection?.Text}</h1>
        </div>

        <div className="servicesInfo">
            {homepage?.servicesSection?.services?.map(service => (
                <div key={service.id} className="servicesBox">
                    <img src={service.image} alt={service.description || "Service Image"} />
                </div>
            ))}
        </div>

        <Link className="DoctButton" to="/services" onClick={handleScroll}>
            <button type="submit">{homepage?.servicesSection?.buttonText}</button>
        </Link>
    </div>
    )
}