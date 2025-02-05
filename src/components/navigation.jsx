import react from "react";
import { Link } from "react-router-dom";

import '../Css/main.css';

const NavigationPage = () => {
    return(

        <nav className="bar-navigation">
            <figure className="logo-nav">
                <img src={require('../Assets/Img/logo.png')} alt="Mundo Divertido" />
            </figure>
            <Link to="/" className="link-nav">
                <i className="bi bi-houses-fill"></i>
                Inicio
            </Link>
            <Link to="/nosotros" className="link-nav">
                <i className="bi bi-person-circle"></i>
                Sobre Nosotros
            </Link>
            <h2 className="h2-navigation">Mundo Divertido</h2>

       </nav>

        

    );

}

export default NavigationPage;