import { useState } from 'react';
import './App.css';
import logo from './imagenes/logo.png';
import { Boton } from './componentes/Boton';
import { Contador } from './componentes/Contador';



function App() {

  const [numClicks, setNumClicks] = useState(0);
  
  const aumentar = ()=>{
    console.log("Aumenta en 1");
    setNumClicks(numClicks + 1);

    //manera larga, usando un callback
    /*setNumClicks(()=>{
      return numClicks +1 ;
    });*/
  };

  const decrementar = ()=>{
    console.log("Decrementa en 1");
    setNumClicks(numClicks - 1);
  };

  const reiniciar = ()=>{
    console.log("Reiniciar contador");
    setNumClicks(0);

    //Manera larga, usando un callback
    /*setNumClicks(()=>{
      return 0
    });
    */
  };
  

  return (
    <div className="App">
      <div className='contenedor_logo_contador'>
        <img className='logo_contador'
          src={logo}
          alt='imagen_logo_contador'
        />
      </div>
      <div className='contenedor_principal'>
        <Contador 
          numClicks={numClicks}
          />
        
        <Boton 
          texto="Decrementar" 
          botonClick={true} 
          manejarClick={decrementar} />

        <Boton 
          texto="Aumentar" 
          botonClick={true} 
          manejarClick={aumentar} />
        
        <Boton 
          texto="Reiniciar" 
          botonClick={false} 
          manejarClick={reiniciar} />

      </div>
    </div>
  );
}

export default App;
