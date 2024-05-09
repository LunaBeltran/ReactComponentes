import { Link } from "react-router-dom";
import './navbar.css'

const Navbar = () => {
    return (
        <div className="Menu">
            <div className="LogoIcon">
                <div className="Imagen">
                <Link to="/"><img className="logo" src="https://cdn-icons-png.flaticon.com/128/3498/3498122.png" alt="" /></Link></div>
                <div className="LinksLog"><p>Luju</p></div>
            </div>

            <div className="Links">
            <Link to='/'>Inicio</Link>
            <Link to='/primer'>Clavelina</Link>
            <Link to='/segundo'>Lirio</Link>
            <Link to='/tercera'>Gardenia</Link>
            <Link to='/cuarto'>Sakura</Link>
            <Link to='/quinto'>Girasol</Link>
            </div>

        </div>
    );
}

export {Navbar} ;