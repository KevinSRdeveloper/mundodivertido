import react from "react";

const btnstart = () => {
    window.open("https://wa.me/573229433191", "_blank", "noopener,noreferrer");

}


const StarPage = () => {
    return(
        <section className="sect-star">
            <span className="decoracionUno"></span>

              <figure className="fig-star position-uno">
                    <img src={require('../Assets/Img/logo.png')} alt="Mundo Divertido" />
                </figure>

            <article className="art-textStar position-dos">
                
              
                <div className="text-titleStar">
                    <h2>Infables</h2>
                    <h2>Saltarines</h2>
                    <p>MUNDO DIVERTIDO LE DA LA BIENVENIDA!!</p>
                </div>

                <article className="art-textStart">
                    <button className="btn-vamosChatear position-startText2" onClick={btnstart} >Vamos a Chatear</button>
                    <figure className="fig-redes">
                        <a href="https://www.facebook.com/profile.php?id=100066873277008" target="_bank"><i className="bi bi-facebook"></i></a>
                        <a href="https://wa.me/+573229433191" target="_bank"><i className="bi bi-whatsapp"></i></a>
                        <a href="https://www.instagram.com/?hl=es" target="_bank"><i className="bi bi-instagram"></i></a>
                        <a href="https://www.youtube.com/" target="_bank"><i className="bi bi-youtube"></i></a>

                    </figure>
                    <p>Su Servicio de alquiler de brincolines inflables numero uno  </p>
                </article>
            </article>
           
            <span className="decoration-start"></span>

        </section>

        
    );
}


export default StarPage;