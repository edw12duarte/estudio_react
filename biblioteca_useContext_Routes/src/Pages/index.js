import { useAppContext } from "../Store/store";
import CardBook from "../Componentes/card_book";
import "../Hojas_estilo/index_1.css"
import Navegador from "../Componentes/navegador";



export default function Index() {

    const contexto = useAppContext();

    return(
        <div className="container-index">
            <Navegador/>
            <div >
                <div className="container_books">
                    {
                    contexto.items.map((item)=>{
                        return(
                            <CardBook key={item.id} item={item}/>
                        );
                    })
                    }
                </div>
            </div>
        </div>
    );
}