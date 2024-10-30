import React from 'react';
import imagenSobre from '../assets/imagenSobre.jpg';

const Sobre = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-blue-100 p-6">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-lg text-center border border-gray-200">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Acerca de nosotros</h2>
        <p className="text-lg text-gray-700 mb-4">
          Somos un equipo dedicado a ofrecer la mejor experiencia a nuestros usuarios. Nuestra misión es crear aplicaciones accesibles y amigables que hagan la vida más fácil.
        </p>
        <img
          src={imagenSobre}
          alt="Imagen sobre nosotros"
          className="w-full h-60 object-cover rounded-lg shadow-md mb-4"
        />
        <p className="text-lg text-gray-700 mb-4">
          Trabajamos constantemente para mejorar y aportar valor a nuestra comunidad. ¡Gracias por visitarnos!
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300">
          Aprende más
        </button>
      </div>
    </div>
  );
};

export default Sobre;