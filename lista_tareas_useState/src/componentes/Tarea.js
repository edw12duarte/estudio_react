import React from "react";
import "../hojas_estilo/Tarea.css"
import { AiOutlineCloseCircle } from "react-icons/ai"


function Tarea({ id, texto, completada, completarTarea, eliminartarea }){
    return(
        <div className={completada ? "tarea_contenedor tarea_completada" : "tarea_contenedor"}>
            <div 
                className="tarea_texto" 
                onClick={() => completarTarea(id)}
            >
                {texto}
            </div>
            <div className="tarea-contenedor-iconos">
                <AiOutlineCloseCircle 
                    className="tarea_icono_x"
                    onClick={()=>eliminartarea(id)}
                />
            </div>
        </div>
    );
}

export{
    Tarea
};