import React, { useState } from 'react';
import imagen1 from '../assets/imagen1.jpg';
import imagen2 from '../assets/imagen2.jpg';
import imagen3 from '../assets/imagen3.jpg';

const images = [imagen1, imagen2, imagen3];

const Inicio = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-md text-center border border-gray-200">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Bienvenido a la página de inicio</h2>
        <p className="mt-4 text-gray-700">
          Disfruta explorando la aplicación. Aquí encontrarás todo lo que necesitas.
        </p>

        <div className="mt-8 relative inline-block">
          <img
            src={images[currentImage]}
            alt="Carrusel"
            className="w-96 h-64 object-cover rounded-lg shadow-md transition-transform transform hover:scale-105"
          />
          <button onClick={prevImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-l shadow hover:bg-gray-700 transition duration-300">
            &#9664;
          </button>
          <button onClick={nextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-r shadow hover:bg-gray-700 transition duration-300">
            &#9654;
          </button>
        </div>

        <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300">
          Explora más
        </button>
      </div>
    </div>
  );
};

export default Inicio;