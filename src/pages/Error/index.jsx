import { NavLink } from 'react-router-dom'

function Error() {
    return (
        <main>
            <div className="evenlyspaced">
                <p className="error__symbol">404</p>
                <p className="error__txt">Oups! La page que vous demandez n'existe pas.</p>
                <NavLink className="error__navlink" to="/">Retourner sur la page d'accueil</NavLink></div>
            
        </main>
    )
}
 
export default Error