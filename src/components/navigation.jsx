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
           {/*  <Link to="/proyetos" className="link-nav">
                <i class="bi bi-pencil-square"></i>
                Galleria
            </Link>
            <Link to="/contactame" className="link-nav">
                <i className="bi bi-envelope-paper-fill"></i>
                Contactanos
            </Link> */}
       </nav>

        

    );

}

export default NavigationPage;