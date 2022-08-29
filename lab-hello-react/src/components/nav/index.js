import style from "./style.module.css"
import navLogo from "../../images/ironhack-logo-xs.png"
import navMenu from "../../images/menu-top-xs.png"


function Nav() {
    return <nav className={style.nav}>
        <img src={navLogo} alt='nav logo'/>
        <img src={navMenu} alt='nav Menu'/>
    </nav>
}

export default Nav;