import react from "react";


const FooterPage = () => {
    return(
        <footer className="container-footer">
            <figure className="fig-footer">
                 <img src={require('../Assets/Img/logo.png')} alt="Mundo Divertido" />
            </figure>
            <div className="text-footer">
                <h2>Mundo Divertido</h2>
                <h3>Carrera 90a N 129 a 19</h3>
                <h4>inflableysaltrinmundodivertido@gmail.com</h4>
                <h3>312706472</h3>
            </div>
           

            <div className="redes-footer">
                    <a href="#"><i className="bi bi-facebook"></i></a>
                    <a href="#"><i className="bi bi-whatsapp"></i></a>
                    <a href="#"><i className="bi bi-instagram"></i></a>
                    <a href="#"><i className="bi bi-youtube"></i></a>
            </div>
            <p>©2025 por inflables y saltarines mundo divertido. Creada con React JS, Kevindevelopersr@outlook.com</p>

        </footer>
    )
}


export default FooterPage;