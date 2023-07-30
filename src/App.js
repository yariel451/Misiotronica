import ReactDom from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-under-dom';
import Contacto from './paginas/contacto/Contacto';
import sobreNosotros from './paginas/sobreNosotros/sobreNosotros';
import Venta from './paginas/venta/Venta';
import menuNavegacional from './paginas/menuNavegacional/menuNavegacional';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
