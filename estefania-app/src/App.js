import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Inicio from './components/Inicio';
import Sobre from './components/Sobre';
import Contador from './components/Contador';
import TemaSwitcher from './components/TemaSwitcher';
import ContadorRedux from './components/ContadorRedux';
import Boton from './components/Boton';
import { TemaProvider, useTema } from './components/TemaContext';
import './index.css';

function App() {
  return (
    <Provider store={store}>
      <TemaProvider>
        <MainComponent />
      </TemaProvider>
    </Provider>
  );
}

const MainComponent = () => {
  const { darkTheme } = useTema();

  return (
    <Router>
      <div className={`min-h-screen ${darkTheme ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'} flex flex-col`}>
        <nav className="bg-blue-600 p-4">
          <ul className="flex space-x-4">
            <li>
              <Link className="text-white hover:underline" to="/inicio">Inicio</Link>
            </li>
            <li>
              <Link className="text-white hover:underline" to="/sobre">Sobre</Link>
            </li>
            <li>
              <Link className="text-white hover:underline" to="/contador">Contador</Link>
            </li>
            <li>
              <Link className="text-white hover:underline" to="/tema">Cambiar Tema</Link>
            </li>
            <li>
              <Link className="text-white hover:underline" to="/contador-redux">Contador Redux</Link>
            </li>
            <li>
              <Link className="text-white hover:underline" to="/boton">Botón</Link>
            </li>
          </ul>
        </nav>
        <div className="flex-grow p-6">
          <Routes>
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contador" element={<Contador />} />
            <Route path="/tema" element={<TemaSwitcher />} />
            <Route path="/contador-redux" element={<ContadorRedux />} />
            <Route path="/boton" element={<Boton />} />
          </Routes>
        </div>
        <footer className="bg-blue-600 text-white p-4 text-center">
          Muchas gracias por visitarnos, ¡ten un lindo día! :)
        </footer>
      </div>
    </Router>
  );
};

export default App;