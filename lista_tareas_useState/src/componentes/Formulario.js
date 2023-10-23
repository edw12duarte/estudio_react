import React from "react";
import "../hojas_estilo/Formulario.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Formulario({ onSubmit }){

    const [input, setInput] = useState("");

    const manejarCambio = (event)=>{
        setInput(event.target.value);
    };

    const manejarEnvio = (event)=>{
        event.preventDefault();
        const tareaNueva={
            id:uuidv4(),
            texto: input,
            completada: false
        };
        onSubmit(tareaNueva);
        setInput("");
    };

    return(
        <form 
            className="tarea_formulario"
            onSubmit={manejarEnvio}
        >
            <input 
                className="tarea_input"
                type="text"
                placeholder="Escribe una tarea"
                name="texto"
                onChange={manejarCambio}
                value = {input}
                autoComplete="off"
            />
            <button className="tarea_boton">
                Agregar tarea
            </button>
        </form>
    );
}


export{
    Formulario
};