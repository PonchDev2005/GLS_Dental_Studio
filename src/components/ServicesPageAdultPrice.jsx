export function ServicesPageAdultPrice({servicespage}){
    return(
        <div className="ServicesPageAdultPrice">
            <img className="adult_background_image" src={servicespage?.adult_price?.adult_background_image} alt="photo"/>
            <div data-aos="fade-left" className="image_box2">
                <img  src={servicespage?.adult_price?.adult_price_image} alt="photo"/>
            </div>
        </div>
    );
}