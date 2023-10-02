
import Navbar from "../Navbar";
import logo from "../../assets/LOGO.png"
 
function Header() {
    return (
        <header>
            <img className="logo" src={logo} alt="logo de kasa" />
            <Navbar />
        </header>
    )
}

export default Header