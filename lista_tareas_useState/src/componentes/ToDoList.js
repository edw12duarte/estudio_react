import React, { useState } from "react";
import "../hojas_estilo/ToDoList.css"
import { Tarea } from "./Tarea.js"
import { Formulario } from "./Formulario.js";


function ToDoList(){

    const [tareas, setTareas] = useState([]);

    const agregarTarea =(tarea)=>{
        if(tarea.texto.trim()){
            tarea.texto = tarea.texto.trim();
            const tareasActualizar = [tarea, ...tareas];
            setTareas(tareasActualizar);
        }
    };

    const eliminartarea = (id_borrar)=>{
        const tareasActualizar = tareas.filter((tarea)=>{
            return tarea.id !== id_borrar
        })
        setTareas(tareasActualizar);
    };

    const completarTarea = (id_completada)=>{
        const tareasActualizar = tareas.map((tarea)=>{
            if(tarea.id === id_completada){
                tarea.completada = !tarea.completada;
            };
            return tarea;
        })
        setTareas(tareasActualizar);
    };


    return(
        <div className="contenedor_todolist">
            <Formulario
                onSubmit={agregarTarea}
            />
            <h1>Mis tareas</h1>
            <div className="tareas_lista_contenedor">
                {
                    tareas.map((tarea)=>{
                        return(
                            <Tarea 
                                key={tarea.id}
                                id={tarea.id}
                                texto={tarea.texto}
                                completada={tarea.completada}
                                completarTarea={completarTarea}
                                eliminartarea={eliminartarea}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

export{
    ToDoList
};