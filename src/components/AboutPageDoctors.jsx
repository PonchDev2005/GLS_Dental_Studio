export function AboutPageDoctors({ aboutpage }) { 
    return ( 
        <div className="AboutPageDoctors"> 
            { 
                aboutpage?.about_page_doctors?.map((elem, i) => ( 
                    <div key={elem.id} className={`about-doc doc${i}`}> 
                        <div data-aos="zoom-in" className="left"> 
                            <img src={elem?.photo} /> 
                        </div> 
 
                        <div data-aos="zoom-in" className="right"> 
                            <h1>{elem?.name}</h1> 
                            <p>{elem?.description}</p> 
                        </div> 
                    </div> 
                )) 
            } 
        </div> 
    ) 
}