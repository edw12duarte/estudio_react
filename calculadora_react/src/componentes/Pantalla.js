import React from "react";
import "../hojas_estilo/Pantalla.css"

const Pantalla = ({input})=>{
    return(
        <div className="input">
            {input}
        </div>
    );
}

export{
    Pantalla
}