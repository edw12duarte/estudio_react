import { forwardRef, useState, useRef, useEffect } from "react";
import { data as emojiLista } from "./Data.js";
import  ContenedorMenuEmojis  from "./ContenedorMenuEmojis";


export  function EmojiPicker({}, inputRef) {

    const [menuEmojis, setMenuEmojis] = useState(false);
    const [emojis, setEmojis] = useState(emojiLista);
    const conatinerMenuRef = useRef(null);

    /*useEffect(()=>{
        
        // cuando se hace un click fuera del contenedor del menu de emojis, se cierra el menu
        window.addEventListener('click', (evento)=>{
            if(!conatinerMenuRef.current.contains(evento.target)){
                setMenuEmojis(false);
                setEmojis(emojiLista);
            }
        });
    },[]);*/

    function abrirMenuEmojis(){
        setMenuEmojis(!menuEmojis);
    }

    function ActualizarBusquedaEmojis(resultado) {
        setEmojis(resultado);
    }

        return(
            <div className="contenedor-buttom-menu-emojis" ref={conatinerMenuRef}>
                <button className="button-buscar-emojis" onClick={abrirMenuEmojis}>Buscar emoji</button>
                {
                    menuEmojis ? <ContenedorMenuEmojis ref={inputRef} emojisLista={emojis} originalEmojis={emojiLista} buscarEmojis={ActualizarBusquedaEmojis} />: ""
                }
            </div>
        );
}


export default forwardRef(EmojiPicker);

