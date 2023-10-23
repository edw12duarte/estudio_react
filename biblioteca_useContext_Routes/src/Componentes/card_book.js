import { Link } from "react-router-dom";
import "../Hojas_estilo/cardBook.css";



export default function CardBook({ item }) {
    return(
        <Link className="link-card" to={`/view/${item.id}`}>
            <div className="card-container">
                <img className="img-book" src={item.cover} alt={item.title}/>
                <div>{item.title}</div>
            </div>
        </Link>
    );
}