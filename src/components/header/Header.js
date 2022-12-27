import HeaderCSS from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Header() {

    return (
   
        <>
            <div className={HeaderCSS.headerBox}>
                
                <div className={HeaderCSS.logo}>
                <NavLink to="/">
                    Ljh's portfolio
                </NavLink>
                </div>
                <div className={HeaderCSS.menu}>
                    <ul className={HeaderCSS.menuBox}>
                        <li className={HeaderCSS.menuList1}><NavLink to="/AboutMe">About Me</NavLink></li>
                        <li className={HeaderCSS.menuList2}><NavLink to="/Skill">Skill</NavLink></li>
                        <li className={HeaderCSS.menuList3}><NavLink to="/Project">Project</NavLink></li>
                        <li className={HeaderCSS.menuList4}><NavLink to="/Contact">Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </>

    );
}

export default Header;