import "../Hojas_estilo/create.css"
import { useState } from "react";
import { useAppContext } from "../Store/store";
import { useNavigate } from "react-router-dom";
import Navegador from "../Componentes/navegador";


export default function Create(){

    // este es el contexto que creamos.
    const contexto = useAppContext();

    //Este hook es para redirigir a una pagina en la App.
    const navigate = useNavigate();

    const [book, setBook] = useState({
        title:"",
        autor:"",
        cover:"",
        intro:"",
        review:"",
        completed: false
    });

    function handleChange(event){

        //cundo la propiedad es "completed" el valor cambia al "checked" del checkbox, sino, es "value".
        const propiedad = event.target.name;
        const newValue = (propiedad !== "completed") ? event.target.value : event.target.checked ;

        //Aqui solo actualizamos la propiedad que queremos
        setBook({
            ...book,
            [propiedad]:newValue
        });

    };

    //Esta funcion es para NO almacenar el "file" en ningun servidor o base de datos,
    //sino por medio de una api. (todo se borrara cuando se recargue la pagina)
    function handleOnChangeFile(event) {
        const element = event.target;
        const file = element.files[0];

        //Esta es una api para almacenar de manera temporal archivos
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function(){
            setBook({
                ...book,
                cover: reader.result.toString()
            });
        }
        
    }

    function hadleSubmit(event){
        event.preventDefault();

        //forma corta de crear un nuevo objecto igual que "book" agregandole el id.
        const newBook ={
            ...book,
            id: crypto.randomUUID()
        }

        //TODO para mandar registrar el libro.
        contexto.createItem(newBook);

        //Limpiar los campos del formulario
        setBook({
            title:"",
            autor:"",
            cover:"",
            intro:"",
            review:"",
            completed: false
        });

        //redirigir a "HOME"
        //navigate("/");
    }

    return(
        <div className="container-create">
            <Navegador/>
            <div className="contenido">
                <h3>Nuevo libro</h3>
                <form onSubmit={hadleSubmit}>
                    <div className="container-input">
                        <label for="title">Title</label>
                        <input id="title" type="text" name="title" onChange={handleChange} value={book.title}/>
                        </div>
                    <div className="container-input">
                        <label for="autor">Autor</label>
                        <input id="autor" type="text" name="autor" onChange={handleChange} value={book.autor}/>
                    </div>
                    <div className="container-input">
                        <label for="intro">Intro</label>
                        <input id="intro" type="text" name="intro" onChange={handleChange} value={book.intro}/>
                    </div>
                    <div className="container-input">
                        <label for="review">Review</label>
                        <input id="review" type="text" name="review" onChange={handleChange} value={book.review}/>
                    </div>
                    <div className="container-input">
                        <label for="cover">Cover</label>
                        <input id="cover" type="file" name="cover" onChange={handleOnChangeFile} />
                    </div>
                    <div className="container-input ">
                        <label for="completed">Completed</label>
                        <input id="completed" type="checkbox" name="completed" onChange={handleChange} value={book.completed}/>
                    </div>
                    <input className="btn-sub" type="submit" value="Register book"/>
                </form>
                <div className="container-img">
                    <p>{ book.title}</p>
                    <span>{book.autor}</span>
                    {
                        book.cover ? <img className="img-book-new" src={book.cover} width="200" alt="img_cover"/> :""
                    }
                </div>
            </div>
        </div>
            
    );
}