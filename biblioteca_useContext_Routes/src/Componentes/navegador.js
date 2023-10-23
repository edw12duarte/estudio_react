import { Link } from "react-router-dom";
import "../Hojas_estilo/navegador.css"

/*
    <link to="crate"></Link>==> es la forma de navegar entre paginas en REACT
*/

export default function Navegador(){
    return(
        <nav className="navegador">
            <h2>Biblioteca</h2>
            <ul>
                <li>
                    <Link className="link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="link" to="/create">Create</Link>
                </li>
            </ul>
        </nav>
    );
}