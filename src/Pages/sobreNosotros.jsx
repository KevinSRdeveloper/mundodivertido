import react from "react";

const btnstart = () => {
    window.open("https://wa.me/573229433191", "_blank", "noopener,noreferrer");

}


const SobrePage = () => {
    return(
        <section className="sect-star">
            <span className="decoracionUno "></span>

              <figure className="fig-star position-uno">
               {/*      <img src={require('../Assets/Img/logo.png')} alt="Mundo Divertido" /> */}
                </figure>

            <article className="art-textStar position-dos sobre-start">
                
              
                <div className="text-titleStar">
                    <h2>Quienes somos</h2>
                    <p className="text-titleStar-sobre">En inflables y saltarines mundo divertido nos hemos comprometido con la satisfaccion del cliente desde el momento en que abrimos por primera vez en el año 2000. El buen servicio comienza con buenas personas. Nuestro personal conoce el negocio a la perfeccion. Somos un equipo de profesionales que buscan garantizar que su experiencia con nosotros sea la mejor.</p>
                </div>

                <article className="art-textStart">
                    <button className="btn-vamosChatear position-startText2" onClick={btnstart} >Vamos a Chatear</button>
                    <figure className="fig-redes">
                        <a href="https://www.facebook.com/profile.php?id=100066873277008" target="_bank"><i className="bi bi-facebook"></i></a>
                        <a href="https://wa.me/+573229433191" target="_bank"><i className="bi bi-whatsapp"></i></a>
                        <a href="https://www.instagram.com/?hl=es" target="_bank"><i className="bi bi-instagram"></i></a>
                        <a href="https://www.youtube.com/" target="_bank"><i className="bi bi-youtube"></i></a>

                    </figure>
                </article>
            </article>
           
            <span className="decoration-start sobre-img"></span>

        </section>

        
    );
}


export default SobrePage;