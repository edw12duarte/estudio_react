import { forwardRef, useState } from "react";
import EmojiButtonSelect from "./emojiButtonSelect";


export  function ContenedorMenuEmojis({emojisLista, originalEmojis, buscarEmojis}, inputRef){

    const [valueInput, setValueInput] = useState("");

    function manejarBusqueda(evento) {
        
        setValueInput(evento.target.value);

        /*
        const {name, value} = evento.target;       // Lenguaje desestructuracion para obtener valores del elemento del evento.
        console.log(name, value);
        */
        
        const consulta = evento.target.value.toLowerCase();
        if(consulta){                                
            const resultado = emojisLista.filter((item)=>{
                return (
                    item.description.toLowerCase().includes(consulta) || 
                    item.tags.join(" ").toLowerCase().includes(consulta)
                );
            }); 
            
            buscarEmojis(resultado);
        }else{
            buscarEmojis(originalEmojis);
        }
    }

    function ManejarClickEmoji(emoji) {
        const cursorPosition = inputRef.current.selectionStart;
        const texto = inputRef.current.value;
        const previo = texto.slice(0, cursorPosition);
        const post = texto.slice(cursorPosition);

        inputRef.current.value = previo + emoji.emoji_img + post;
    }

    return(
        <div className="contenedor-emojis">
            <input className="input-select-emojis" type="text" value={valueInput} name="inputFiltroEmojis" onChange={manejarBusqueda}/>
            <div className="lista-emojis">
                {
                    emojisLista.map((item)=>{
                        return <EmojiButtonSelect key={item.emoji_img} emoji={item} SelectEmoji={ManejarClickEmoji} />
                    })
                }
            </div>
        </div>
    );
}


export default forwardRef (ContenedorMenuEmojis);
