//Renderizar un elemento basico de react:
const content_1 = document.getElementById("content_1");
ReactDOM.render(<h1>Develop. Preview. Ship. 🚀</h1>, content_1);

//====================================================================================================================================

// Crear un elemento complejo: react solo returna UN elemento, si se quiere enviar un elemento mas complejo se debe
//empaquetar en un div (o algo que lo contenga), ejemplo:
const content_2 = document.getElementById("content_2");

const element_complex = (
<div>
    {/*Este es un comentario en la syntaxis de REACT */}
    <h1>My first package in react</h1>
    <p>this is my first excersice in which i work with reacts elements </p>
    <ul>
        <li>I want to learn react</li>
        <li>I want to have job</li>
        <li>I dont want to be a burden</li>
    </ul>
</div>);

ReactDOM.render(element_complex, content_2);

//======================================================================================================================================

//Colocar los atributos de HTML en react (class->className, onclick->onClick ,etc)
const content_3 = document.getElementById("content_3");

const element_class = (
    <div className="style_div">
        <h2>Clases en react:</h2>
        <p>la forma para asignarle clases o propiedades de html a elementos de react cambia sus nombre:</p>
        <ul>
            <li>class="" --- className=""</li>
            <li>evento "onclick" --- "onClick"</li>
            <li>evento "onchange" --- "onChange"</li>
            <li>entre otros</li>
        </ul>
    </div>
);
ReactDOM.render(element_class, content_3);

//=======================================================================================================================================

const content_4 = document.getElementById("content_4");
let eti = "<br></br>"

const element_etiquetas = (
    <div >
        <h1>Etiquetas especiales</h1>
        <p>En react todas las etiquetas incluyendo las especiales TIENEN QUE CERRARSE:</p>
        <img src="../sources/Screenshot 2023-08-23 205541.png" alt="etiquetas_epeciales" />
        <p style={{fontSize:"1.3rem", color:"blue"}}>Se cierran de las siguientes foma</p>
        <img src="../sources/cerrar_etiquetas_react.png" alt="" />
        
    </div>
);
ReactDOM.render(element_etiquetas, content_4);













