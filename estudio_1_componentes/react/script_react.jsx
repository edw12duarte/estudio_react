//Renderizar un elemento basico de react:
const content_1 = document.getElementById("content_1");
const Imp = function(){
    return(
        <div>
            <h1 className="titulo_principal">Siempre tener en cuenta</h1>
            <ul>
                <li><p>Todos los Elementos React deben INICIAR CON MAYUSCULA</p></li>
                <li><p>Un componente funcional sin estado (componente basico) es cualquier función que escriba y que acepte accesorios y devuelva JSX</p></li>
                <li><p> Un componente sin estado (componente avanzado ES6) , por otro lado, es una clase que se extiende React.Component</p></li>
                <li><p>un componente con estado es un componente de clase (ES6) que mantiene su propio estado interno. <br /> Es posible que vea componentes con estado denominados simplemente componentes o componentes de React.</p></li>
            </ul>
        </div>
    );
}
ReactDOM.render(<Imp/>, content_1);

//====================================================================================================================================

// Crear un elemento complejo: react solo returna UN elemento, si se quiere enviar un elemento mas complejo se debe
//empaquetar en un div (o algo que lo contenga), ejemplo:
const content_2 = document.getElementById("content_2");

const element_complex = (
<div>
    {/*Este es un comentario en la syntaxis de REACT */}
    <h1>1. My first package in react</h1>
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
        <h1>2. Clases en react:</h1>
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
        <h1>3. Etiquetas especiales</h1>
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
        <h1>4. Componenete basico de react</h1>
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
        <h1>5. Soy un componente AVANZADO</h1>
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
            <h1>6. Componentes Anidados</h1>
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



//=================================================================================

// Accesorios React

/* <Mycomponent  user="edwin" gender="male" age="25"/>
    
    * De esta manera se llama a un componente de React y se le envia "propiedades o accessorios"
        
    * Estas propiedades se guardan como un objeto : 
        {
            "user":"Edwin",
            "gender":"male",
            "age": "25"
        }
    
    *en la funcion se usa asi:
    (props)=.{
        <div>
            <h1>{props.user}</h1>     //entre corchete para que se tome como codigo y la propiedad que desee.
        </div>
    }

        SI EL ELEMENTO ES "ES6" ===> {this.props.name}
        SI EL ELEMENTO ES "const" ===> {props.name}
    
    EJEMPLO:
*/

const content_8 = document.getElementById("content_8");

class Comp_accesorios extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
            <br />
                <form id="MyFormulario">
                    <label htmlFor="">(No sirve: En progreso) </label>
                    <input type="text" name="name" id="user_name" required placeholder="Introduzca nombre"/>
                    <button className="btn_submit" >Mostrar</button>
                </form>
            <br />
                <div style={{border: "3px solid red", width:"30%"}}>
                    <h2>Ejemplo de accesorios</h2>
                    <h3>
                        Holas soy 
                        <span style={{color:"green", textShadow:"10px"}}>
                            {this.props.name}
                        </span>
                    </h3>
                </div>
            </>
        );
    }
}


class Imprimir_contenido extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <h1>7. Accsesorios en React (propiedades) </h1>
                <p>
                    Los accesorios es React, son como las propiedades que se le envia a las funciones,
                    estos se guardan como un "Object" y se utilizan cuando se define el componenete
                    <br />
                    <strong>Se puede pasar matrices, int, string, objects, etc</strong>
                </p>
                <label>accesorios "string"</label>
                <img src="../sources/enviar_accesorios.png" alt="" />
                <br />
                <label >Otros accesorios: usar corchetes</label>
                <img src="../sources/accesorios_array.png" alt="" />
                <br />
                <img src="../sources/ejemplo_accesorio.png" alt="ejemplo_accesorios" />
                <img src="../sources/accesorios_tener_cuenta.png" alt="" />
                <div className="ejemplo">
                    <Comp_accesorios name="Alphonse"/>
                </div>
            </>
            
        );
    }
}


ReactDOM.render(<Imprimir_contenido/>, content_8);


//========================================================================================

//Accesorios predeterminados (default)

let content_9 = document.getElementById("content_9");

const Acce_default = ()=>{
    return(
        <div>
            <h1> 8. Accesorios predeterminados (Default)</h1>
            <p>
                Se puede hacer que los accesorios de un elemento sean predeterminados para evitar 
                errores o si un accesorio llega como tipo "Null", <br />para definir los "defaultProps" <strong>se hace fuera y despues del elemento </strong><br />
            </p>
            <img style={{border:"1px solid black"}}src="../sources/ejemplo_props_default.png" alt="" />
            <br />
            <h2>8.1 Anular accesorios predeterminados</h2>
            <p>
                Solo se debe especificar EL VALOR del accesorio en el momento que se llama al elemento <br />
            </p>
        </div>
    );
};

ReactDOM.render(<Acce_default/>, content_9);

//=======================================================================================

//Definir "Type" de accesorio

let content_10 = document.getElementById("content_10");

const Type_Acce = ()=>{
    return(
        <div>
            <h1> 9. Definir "type "Accesorios</h1>
            <p>
            React proporciona funciones útiles la verificación de los accesorios sean del tipo correcto. <br />
            <strong>"isRequired" hace que sea obligatorio que el accesorio sea de ese tipo</strong>
            </p>
            <div style={{display:"flex", flexDirection:"row", width:"auto"}}>
                <div style={{display:"block", border:"1px solid black"}}>
                    <p>Tipos de variables en React (function == func)</p>
                    <img src="../sources/propTypes_ejemplos.png" alt="" />
                </div>
                <div style={{display:"block", border:"1px solid black", width:"auto"}}>
                    <p>Ejemplo de sintaxys</p>
                    <img src="../sources/sintaxys_propTypes_example.png" alt="" />
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(<Type_Acce/>, content_10);


//===================================================================================




