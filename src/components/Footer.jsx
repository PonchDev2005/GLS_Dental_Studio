import { Link } from "react-router-dom"

export function Footer({footerContent}){

    const handleScroll = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return(
        <footer className="footer">
        <div className="footer-left">
            <Link to="/" onClick={handleScroll}>
                <img src={footerContent.leftSection?.logo} alt="Logo" className="footer-logo" />
            </Link>
        </div>
        <div className="footer-right">
            <p>{footerContent.rightSection?.text}</p>
            <div className="social-links">
                {footerContent.rightSection?.socialLinks?.map((social, index) => (
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
    </footer>   
    )
}