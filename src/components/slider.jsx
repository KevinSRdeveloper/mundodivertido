import { useState, useEffect } from "react";

const images = [
    require("../Assets/Img/slider-1.jpg"),
    require("../Assets/Img/slider-2.jpg"),
    require("../Assets/Img/slider-3.jpg"),
    require("../Assets/Img/slider-4.jpg"),
    require("../Assets/Img/slider-5.jpg"),
];

const SliderPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Cambia cada 3 segundos

        return () => clearInterval(interval); // Limpieza al desmontar
    }, []);

    return (
        <div className="slider">
             <span className="decoracionUno"></span>
          
            <span className="decoracionDos"></span>
                <div className="slider-inner" style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: "transform 1s ease-in-out" }}>
                    {images.map((src, index) => (
                        <img key={index} src={src} alt={`Slide ${index + 1}`} className="slider-image" />
                    ))}
                </div>

        </div>
    );
};

export default SliderPage;
