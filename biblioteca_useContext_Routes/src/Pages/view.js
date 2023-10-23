import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import  { useAppContext } from "../Store/store.js";
import Navegador from "../Componentes/navegador.js";



export default function View() {

    const [item, setItem] = useState(null);
    const params = useParams();
    const contexto = useAppContext();

    useEffect(()=>{
        const book = contexto.getItem(params.bookId);
        setItem(book);
    },[View]);

    if(!item){
        return(
            <div>
                <Link to="/"> {"<="} </Link>
                <div>Item no found</div>
            </div>
        );
    }
    return(
        <div>
            <Navegador />
            <div>
                <p>{item?.title}</p>
                <div>
                    {item?.cover ? <img src={item?.cover} width="400"/>: "" }
                </div>
                <p>{item?.autor}</p>
                <p>{item?.intro}</p>
                <p>{item?.review}</p>
                <p>{ item?.completed ? "leido": "por terminar" }</p>
            </div>
        </div>
    );
    
}