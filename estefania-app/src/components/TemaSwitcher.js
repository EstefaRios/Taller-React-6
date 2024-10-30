import React from 'react';
import { useTema } from './TemaContext';

const TemaSwitcher = () => {
  const { darkTheme, toggleTema } = useTema();

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen ${darkTheme ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <div className="flex flex-col items-center justify-center p-6 bg-white rounded shadow-md max-w-xs">
        <p className={`mb-4 ${darkTheme ? 'text-gray-600' : 'text-gray-900'}`}>
          Al hacer clic el tema de toda la página se pondrá oscuro.
        </p>
        <button
          onClick={toggleTema}
          className={`px-4 py-2 rounded ${
            darkTheme ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'
          } transition-all duration-300`}
        >
          {darkTheme ? 'Cambiar a Tema Claro' : 'Cambiar a Tema Oscuro'}
        </button>
      </div>
    </div>
  );
};

export default TemaSwitcher;