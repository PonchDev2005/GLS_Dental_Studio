import { useState, useEffect } from "react"
import { NavLink, Link } from "react-router-dom"

export function Header({headerContent, navbar}){
    const [lastScrollY, setLastScrollY] = useState(0); 
    const [showNavbar, setShowNavbar] = useState(false); 
    const handleScrollx = () => { 
      window.scrollTo({ top: 0, behavior: "smooth" }); 
    } 
    const handleNavLinkClick = () => { 
      setShowNavbar(false);  
      handleScrollx();      
    }; 
   
    const handleScroll = () => { 
      if (window.scrollY > lastScrollY || window.scrollY < lastScrollY) { 
         
        setShowNavbar(false); 
      } 
      setLastScrollY(window.scrollY);  
    }; 
   
    useEffect(() => { 
      window.addEventListener("scroll", handleScroll);  
   
      return () => { 
        window.removeEventListener("scroll", handleScroll);  
      }; 
    }, [lastScrollY]);

    return <header>
        <Link to={'/'} className="logo" onClick={handleScroll}>
            <img src={headerContent.logoImage} alt="logo" />
        </Link>
        
        <nav className={`${showNavbar ? 'active' : ''}`}>
            {
                navbar.map(el => <NavLink onClick={handleNavLinkClick} to={el.url} key={el.id}>
                    {el.title}
                </NavLink>)
            }
        </nav>

        <div className="menu-bar" onClick={() => setShowNavbar(!showNavbar)}>
            <img src={headerContent.menuBar} alt="icon" />
        </div>
    </header>
}