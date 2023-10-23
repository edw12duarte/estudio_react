import { Route, Router, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Index from "./Pages/index.js";
import Create from './Pages/create';
import View from './Pages/view';
import Store from './Store/store';


  /* ===========================================================================================================
    DECLARAR RUTAS (PATHS) EN REACT

    -Para declara las rutas (react-router-dom) SE DEBE hacer en el componente "PADRE" que tenga acceso a todos 
    los demas componentes: en el componenete PADRE PRINCIPAL (en este caso App)
  
    -para crear rutas, se hace componenetes que representa las nuevas paginas, ejemplo:
      <index />  ==> Es la pagina principal
      <jefes /> ==> Es la pagina de los jefes
      <Mapa />  ==> Es la pagina de los mapas
      .
      . 
      .
      etc.
  
    - ASI SE DEFINEN RUTAS PARA OTRAS PAGINAS
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index/>}/>       ---> se compone de la ruta(path) y el elemnto que funge como pagina.
          <Route path='create' element={<Create/>} />

          <Route path='view/:bookid' element={<View />} />   ----->:bookid ==> -Es un placeholder, se cambia y muestra informacion 
        </Routes>                                                                especifica en la pagina: libro Harrypotter, Señor de los anillos, ...
      </BrowserRouter>

    ===================================================================================================================
    */


  
  /* ********************************************************************************************************
    useContext => -Permite tener/declarar un "ESTADO GLOBAL", el cual se puede acceder desde componentes hijos
    .             por medio de un hook.
    .             
    .             -Para que todos puedan usar el "state global (useContext)", se usa un componente "Padre" 
    .              que contiene a todo la App que se llama "Storage".
    .              <div className="App">
    .                  <Store>
    .                     TODO LOS COMPONENETES
    .                  </Store>
    .              </div>
    *********************************************************************************************************
  */




function App() {


  return (
    <div className="App">
      <Store>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/create' element={<Create />} />
            <Route path='/view/:bookId' element={<View />} />
          </Routes>
        </BrowserRouter>
      </Store>
    </div>
  );
}

export default App;
