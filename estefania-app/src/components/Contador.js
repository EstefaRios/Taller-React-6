import React, { useState } from 'react';

const Contador = () => {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount(count + 1); // Incrementar el contador
  };

  const decrementar = () => {
    setCount(count - 1); // Decrementar el contador
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-xs text-center border border-gray-200">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Contador</h2>
        <p className="text-xl text-gray-800 mb-4">Valor actual: <span className="font-semibold">{count}</span></p>
        <div className="flex justify-center space-x-4">
          <button 
            onClick={incrementar} 
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300">
            Incrementar
          </button>
          <button 
            onClick={decrementar} 
            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition duration-300">
            Decrementar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contador;