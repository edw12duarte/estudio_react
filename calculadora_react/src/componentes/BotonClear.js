import React from "react";
import "../hojas_estilo/BotonClear.css"

const BotonClear = ({children, operacionClear})=>{
    return(
    <button className="boton_clear"
        onClick={operacionClear}>
        {children}
    </button>
    );
};

export{
    BotonClear
} 