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


//=======================================================================================================================================

//DEFINIR UN COMPONENTE BASICO: 

//es un funcion que devuelve paquete de HTML estatico y que no puede seguir los cambios de este
//


const content_5 = document.getElementById("content_5");

const Comp_basic = function(){  //Buena practica: Primera letra del nombre de la funcion este en mayuscula.
    return (<div>
        <h1>Componenete basico de react</h1>
        <p>Definir un componente funcional sin estado o un componente BASICO, es una funcion que devuelve un paquete de HTML. en otras palabras:<br/>piense en un componente sin estado  <u style={{color:"red"}}> como uno que puede recibir datos y representarlos, pero no administra ni rastrea los cambios en esos datos.</u></p>
        <p>EJEMPLO</p>
        <img src="../sources/example_component_basico.png" alt="" />
        <br />
        <h3>Asi se puede llamar a cualquier elemento en React (lementos basicos, avanzados, anidados, etc)</h3>
        <img src="../sources/llamar_elemento_react.png" alt="" />
    </div>);
}

ReactDOM.render(Comp_basic(),content_5); // Comp_basic() ==> <Comp_basic/>


//=======================================================================================================================================

//CREAR UN COMPONENTE AVANZADO
const content_6 = document.getElementById("content_6");

class My_Component extends React.Component{
    constructor(props){
        super(props);
    }

render(){
    return(<div>
        <h1>Soy un componente AVANZADO</h1>
        <p>Se puede definir un elemento (elemento avanzado) <u>React</u>  con la sintaxys <u>ES6</u>, Ejemplo:</p>
        <img src="../sources/ejemplo_elemento_avanzado.png" alt="" />
        <p>Se crea un elemento llamado <u>"My_Component"</u>, el cual extiende la React.Component clase. <br/> Entonces, el elemento "My_Component" ahora tiene acceso a muchas funciones útiles de React</p>
        <br /><br />
        <div style={{border:"3px solid red", width:"auto"}}>
            <p>
                <span style={{font:"1.5rem",color:"red"}}>Tener en cuenta:  </span>
                También observe que la "My_Component" tiene una constructor definición dentro que llama super(). Se utiliza super() para llamar al constructor de la clase padre, en este caso React.Component. <br />
                El constructor es un método especial utilizado durante la inicialización de objetos que se crean con la classpalabra clave. Es una buena práctica llamar a un componente constructorcon super y pasarpropsa ambos. <br />
                Esto asegura que el componente se inicialice correctamente.
            </p>
            <br />
            <h3>Asi se puede llamar a cualquier elemento en React (elementos basicos, avanzados, anidados, etc)</h3>
            <img src="../sources/llamar_elemento_react.png" alt="" />
        </div>
        
    </div>
    );
    }
};

ReactDOM.render(<My_Component/>, content_6);


//=======================================================================================================================================

//COMPONENTES ANIDADOS

//Se puede crear componenentes que a su vez esten compuestos por otro componentes de react

const ChildComponent_1 = () => {
    return (
    <div style={{border:"2px solid green"}}>
        <p style={{color:"green"}}>
            I am the child 1
        </p>
    </div>
    );
};

const ChildComponent_2 = () => {
    return (
    <div style={{border:"2px solid red"}}>
        <p style={{color:"red"}}>
            I am the child 2
        </p>
    </div>
    );
};

const ChildComponent_3 = () => {
    return (
    <div style={{border:"2px solid purple"}}>
        <p style={{color:"purple"}}>
        I am the child 3
        </p>
    </div>
    );
};

class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
    return (
        <div className="cont_result">
            <h1>I am the parent</h1>
            <ChildComponent_1/>
            <ChildComponent_2/>
            <ChildComponent_3/>
        </div>
    );
    }
};


const content_7 = document.getElementById("content_7");

const Component_anidados =function(){
    return (
        <div>
            <h2>Componentes Anidados</h2>
            <p>Se puede crear componenentes que a su vez esten compuestos por otros componentes de react</p>
            <div className="contenedor_imagenes">
                <div className="Cont_img_child" >
                    <p>Elementos Hijos</p>
                    <img src="../sources/elementos_hijos.png" alt="component_child" />
                </div>
                <div className="Cont_img_parent">
                    <p>Elemento Padre</p>
                    <img src="../sources/elemento_padre.png" alt="component_parent" />
                </div>
            </div>
            <div className="resultado_componente_anidado">
                <ParentComponent/>
            </div>
        </div>
    );
};

ReactDOM.render(<Component_anidados/>, content_7);
















