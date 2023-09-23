import React from "react";
import "../hojas_estilo/Boton.css"

function Boton({children, operacionClick}){
    const esOperador = (valor)=>{
        if(isNaN(valor) && (valor !== ".") && (valor !== "=")){
            return "operador";
        }
        else{
            return "";
        }
    };

    return(
        <button 
            className = {`boton_contenedor ${esOperador(children)}`}
            onClick={()=>operacionClick(children)}>
                {children}
        </button>
    );
}

export{
    Boton
}