import { useState, useEffect } from "react";


const AboutPage = () => {
    const btnstart = () => {
        window.open("https://wa.me/573229433191", "_blank", "noopener,noreferrer");
    
    }
    

    return (
        <section className="sect-about">
            <span className="decoracionUno"></span>
           
            <h2>Nuestro Productos</h2>

            <div className="card">
                <figure className="card-img">
                    <img src={require('../Assets/Img/card-1.png')} alt="Mundo Divertido" />
                </figure>
                <div className="card-text">
                    <h3>Alquiler y venta de inflables: saltarines, piscinas de pelotas, bolas choconas, para interior y exterior.</h3>
                    <p>En inflables y saltarines mundo divertido tenemos todo lo que usted necesita y mucho mas. Todos nuestros productos en alquiler estan hechos con materiales de larga duracion.
                    </p>
                    <button onClick={btnstart}> chatea con nosotros</button>
                </div>
            </div>
            <div className="card">
                <figure className="card-img">
                    <img src={require('../Assets/Img/card-2.png')} alt="Mundo Divertido" />
                </figure>
                <div className="card-text">
                    <h3>Recreacion, decoracion ,Taller de pinturas y pintu caritas</h3>
                    <p>No dejes pasar estas fechas especiales para ti y tus hijos  cumpleaños, integración y pasen un día de diversión y  compartir,  en casa con sus respectivos cuidados. 
                    </p>
                    <button onClick={btnstart}> chatea con nosotros</button>
                </div>
            </div>

            <article className="art-about">
            <span className="decoracionUno"></span>

                <div className="art-textAbout">
                    
                    <h2>Oferta de Combos para una espectacular fiesta  </h2>
                    <p>
                    A los clientes les encanta por su calidad, pero tambien por su inigualable precio. Contamos con una gran variedad de opciones personalizadas para que elija la que mas le convenga. Contacte a inflables y saltarines mundo divertido y pruEbelo hoy mismo. Estamos seguros de que le encantarA

                    </p>
                   
                </div>

                <figure className="fig-about">
                <img src={require('../Assets/Img/logo.png')} alt="Mundo Divertido" />

                </figure>
                
            </article>


            <article className="art-mas">
            <span className="decoracionUno"></span>
                 <h2>Lo que nos distingue</h2>

                <div className="card card-mas">
                    <figure className="card-img img-mas">
                        <img src={require('../Assets/Img/nino-1.png')} alt="Mundo Divertido" />
                    </figure>
                    <div className="card-text text-mas">
                        <h3>Exacta  honesta y puntual Disponibles cuando usted nos necesite.</h3>
                     
                    </div>
                </div>
                <div className="card card-mas">
                    <figure className="card-img img-mas">
                        <img src={require('../Assets/Img/nino-2.png')} alt="Mundo Divertido" />
                    </figure>
                    <div className="card-text text-mas">
                        <h3>Seguridad Profesionales en la seguridad de nuestros niños.</h3>
                     
                    </div>
                </div>
                <div className="card card-mas">
                    <figure className="card-img img-mas">
                        <img src={require('../Assets/Img/nino-3.png')} alt="Mundo Divertido" />
                    </figure>
                    <div className="card-text text-mas">
                        <h3>Galardones No tiene nada de qué preocuparse</h3>
                     
                    </div>
                </div>
               
             </article>


        </section>
    );
};

export default AboutPage;
