export function ServicesPageKidsPrice({servicespage}){
    return(
        <div className="ServicesPageKidsPrice">
            <h1>{servicespage?.text}</h1>
            <img className="kids_background_image" src={servicespage?.kids_price?.kids_background_image} />
            <div data-aos="fade-right" className="image_box">
                <img src={servicespage?.kids_price?.kids_price_image} />
            </div>
        </div>
    );
}