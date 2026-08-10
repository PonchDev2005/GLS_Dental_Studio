export function ContactPageInfo({ contactContent }) {
    return (
        <div className="contact-container">
            <h2>{contactContent.title}</h2>

            <div className="contact-info">

                {/* LEFT SIDE */}
                <div className="contact-details">
                    <h1>{contactContent.left_description}</h1>
                    
                    {contactContent.adrres_details?.map(item=>(
                        <p key={item.id}>{item.description}</p>
                    ))}

                    <div className="social-links">
                        {contactContent.socialLinks?.map((social, index) => (
                            <a
                                key={index}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                <img src={social.icon} alt={social.platform} className="social-icon" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDE */}
                
                <div className="map">
                    <h3>{contactContent.right_description}</h3>
                  
                    <iframe src={contactContent.map}
                    width="600" 
                    height="450" 
                    style={{ border: "0", borderRadius: "10px" }} 
                    allowfullscreen="" 
                    loading="lazy">
                    </iframe>

                </div>
            </div>

            <div className="Info">
                <p className="Creater"> 
                    {contactContent.github?.description}
                </p>

                <p className="GitHub">
                    <a
                        href={contactContent.github?.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                    >
                       <strong>{contactContent.github?.text}</strong>
                    </a>
                </p>
            </div>

        </div>
    );
}
