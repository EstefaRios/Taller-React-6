import React, { useState } from 'react';

const Boton = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-300">Botón</h1>
        <p className="text-lg mb-4 text-gray-600 dark:text-gray-400">
          {clicked ? "¡Gracias por hacer clic!" : "Haz clic en el botón para interactuar."}
        </p>
        <button
          onClick={handleClick}
          className={`px-6 py-3 text-white rounded-lg transition duration-300 ${
            clicked ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {clicked ? "¡Hecho!" : "Hacer clic aquí"}
        </button>
      </div>
    </div>
  );
};

export default Boton;