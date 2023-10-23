import { createContext, useContext, useEffect, useState } from "react";

/*
    store.js => -Es por convención, como se le llama al archivo que tiene toda
    .           la informacion para manejar la aplicacion(App)
    
    .           -Este Archivo tiene el  "state Global" de la aplicacion (useContext).

*/

 /* ********************************************************************************************************
    useContext => Permite tener/declarar un "ESTADO GLOBAL", el cual se puede acceder desde componentes hijos
    .             por medio de un hook.
    

    <AppContext.Provider> ==> todo lo que este dentro de "AppContext.Provider" tendra acceso al "state global (useContext)"

    <AppContext.Provider value={...}> ===> En "value" se colocan todos los componentes del "state global", para que se 
    .                                       vuelvan accesibles para TODOS. 
    
    *********************************************************************************************************
    */

    //Aqui es donde se crea el contexto de la App
    const AppContext = createContext({
        items:[],
        createItem: (item)=>{},
        getItem: (id)=>{},
        updateItem: (item)=>{}
    }); 
    

export default function Store({ children }) {

    // Definimos cada parte del contexto de la app o "state global" (funciones, valores, etc.)
    const [items, setItems] = useState([]);

    function createItem(item) {
        const tempo = [...items];
        tempo.push(item);
        setItems(tempo);
    }

    function getItem(id) {
        const item = items.find((item)=>{ 
            if(item.id === id){
                return item;
            }
        });
        return item;
    }

    function updateItem(item) {
        const index = items.findIndex((i)=>{
            if(i.id === item.id){
                return i;
            }
        });
        const tempo = [...items];
        tempo[index] = {...item};
    }

    // dentro de "value" colocamos todas las partes del contexto o "state global" para que sean accesibles para TODOS.
    return(
        <AppContext.Provider value={{items, createItem, getItem, updateItem}}>
            {children}
        </AppContext.Provider>
    );
}


// Aqui exportamos "TODO EL CONTEXTO" que creamos por medio del hook "useContext".
export function useAppContext() {
    return useContext(AppContext);
}