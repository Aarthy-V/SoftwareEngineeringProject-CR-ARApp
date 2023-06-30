import "../Styles/NavBarStyles.css";
import { Box } from "./Box";
import { MenuData } from "./MenuData";


function NavBar() {
    return (  
        <nav className="NavbarItems">
            <h1 className="logo">
                CR AR App
            </h1>
            <ul className="nav-menu">
                {MenuData.map((item,index)=>{
                    return(
                        <li key={index}><a href={item.url} className={item.cName}>
                            {item.title}
                        </a></li>
                    )})}
            </ul>
        </nav>
    );
}

export default NavBar;