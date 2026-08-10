import { Link } from "react-router-dom";

export function HomePageDoctors({ homepage }) {
    const handleScroll = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <div data-aos="zoom-out" className="doctors">
            <h1 data-aos="zoom-in-down">{homepage.doctors?.Text}</h1>
            <div className="box-container">
                {homepage.doctors?.BoxContainer?.map((doctor) => (
                    <div className="box" key={doctor?.id}>
                        <img src={doctor?.image} alt={doctor?.name} />
                        <span>{doctor?.name}</span>
                    </div>
                ))}
            </div>
            <Link className="DoctButton" to="/about" onClick={handleScroll}>
                <button type="submit">{homepage.doctors?.ButtonText}</button>
            </Link>
        </div>
    );
}