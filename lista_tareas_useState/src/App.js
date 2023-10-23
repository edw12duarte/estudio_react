import './App.css';
import { ToDoList } from './componentes/ToDoList';

function App() {
  return (
    <div className="App">
      <div className='contenedor_principal'>
        <div className='contenedor_logo'>
          <img 
            className='logo_toDoList'
            src={require("./imagenes/logo.png")} 
            alt="logo" />
        </div>
        <ToDoList/>
      </div>
    </div>
  );
}

export default App;
