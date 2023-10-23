import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { Clima } from "./componentes/Clima";
import './App.css';

function App() {
  return (
    <div className="App container-fluid d-flex flex-column align-items-center">
      <div className='contenedor-titulo' >
        <img className="logo img-fluid rounded" src={require("./imagenes/logo_clima.png")} alt="logo_clima"/>
      </div>
      <Clima/>
    </div>
  );
}

export default App;
