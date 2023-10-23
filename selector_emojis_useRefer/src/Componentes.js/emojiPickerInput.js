import { useRef } from "react";
import EmojiPicker from "./emojiPicker";
import "../Hojas_estilo/emojiPicker.css"


export default function EmojiPickerInput() {

    /*
    1) useRef ==> Coloca una referencia a un elemento ("input" en este caso) y despues llamarlo,
                y con ".CURRENT" obtenemos el objeto con la referencia y ya podemos usar el elemento
                como si fuera Js normal (manipular DOM), sin necesidad de espera un cambio de estado.

    
    2) pasar useRef ==> *si se quiere pasar un useRef a un componente hijo, se hace uso de la function de 
                        React "forwardRef()", esta funcion nos permite manejar la funcion que se hereda de 
                        un "padre"

                        * la varible que guarda el "useRef" se envia como una variable aparte (FUERA DE LOS PROPS)
    */
    const inputRef = useRef(null);
    
    return(
        <div className="contenedor-app">
            <input className="input-texto-main" ref={inputRef} />
            <EmojiPicker ref={inputRef} />
        </div>
    );
}