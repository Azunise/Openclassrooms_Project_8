import { NavLink } from 'react-router-dom'


function Navbar() {
    return (
    <nav className='navbar'>
        <NavLink className="header__navlink" to="/">Accueil</NavLink>
        <NavLink className="header__navlink" to="/APropos">A Propos</NavLink>
    </nav>
    )
}

export default Navbar

