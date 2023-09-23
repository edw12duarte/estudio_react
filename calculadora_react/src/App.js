import './App.css';
import { Calculadora } from './componentes/Calculadora';

function App() {
  return (
    <div className="App">
      <div className='contenedor_logo'>
        <img
          className='logo_calculadora'
          src={require("./imagenes/logo_calculadora.png")}
          alt='logo_calculadora' />
      </div>
      <Calculadora/>
    </div>
  );
}

export default App;
