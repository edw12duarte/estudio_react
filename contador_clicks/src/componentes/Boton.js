import React from "react";
import "../hojas_de_estilo/Boton.css";

//botonClick ==> true o false ===> lo usamos para saber si es el boton de "click" o el boton de "reiniciar" 

function Boton({texto, botonClick, manejarClick }){ //==> {texto}: sintaxys de desestructuracion (solo se llama los accesorios que se van ha usar)
  return(
    <button 
      className= {(botonClick)? "boton_click" : "boton_reiniciar"}
      onClick={ manejarClick}
    >
      {texto}
    </button>
  );
}

export{
  Boton
}