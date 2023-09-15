//AQUI VAMOS A VER TODO LO DE "state"  Y COMPONENTES DINAMICOS DE REACT.

const container_1 = document.getElementById("container_1");

class Start_state extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
                <h1 className="titulo_principal">Componentes React Dinamicos</h1>
                <p>
                    Este Archivo se seguira estudiando los componenets de React, pero ahora <br />
                    Seran <strong>Dinamicos</strong> (se utilizara ES6)
                </p>
            </>
        );
    }
}

ReactDOM.render(<Start_state/>, container_1);

//========================================================================

// 1. Crear componente con estado (State)
const container_2 = document.getElementById("container_2");

class Explicacion_state extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
        <>
            <h1>1. Componentes con estado</h1>
            <ul>
                <li>
                    <p>
                    El estado consta de cualquier dato que su aplicación necesite conocer y que puede cambiar con el tiempo. <br />
                    Quiere que sus aplicaciones respondan a los cambios de estado y presenten una interfaz de usuario actualizada cuando sea necesario
                    </p>
                </li>
                <li>
                    <p>
                    <strong>state</strong> es una de las características más poderosas de los componentes de React. Le permite rastrear datos  <br />
                    importantes en su aplicación y representar una interfaz de usuario en respuesta a los cambios en estos datos. Si sus datos cambian, su UI cambiará.
                    </p>
                </li>
                <li>
                    <p> <span style={{fontWeight:"900"}}>State es local: </span>
                    Tenga en cuenta que si convierte un componente en estado, ningún otro componente tendrá conocimiento de su estado state. <br />
                    state estara completamente encapsulado o es local para ese componente, a menos que pase datos de estado a un componente secundario como props.
                    </p>
                </li>
            </ul>
            
            <p><strong>Ejemplo</strong></p>
            <img src="../sources/ejemplo_state.png" alt="" />
            
        </>
        );
    };
};

ReactDOM.render(<Explicacion_state/>, container_2);


//==========================================================================

// 2. Renderizar state con logica JS

const container_3 = document.getElementById("container_3");

class State_con_JS extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"Edwin Duarte"
        }
    }

    render(){
        return(
            <>
                <h1>2. Renderizar state con logica JS</h1>
                <p>
                    En el espacion dentro de <strong>render</strong> antes del <strong>return</strong> se puede utilizar <br />
                    codigo Js para manipular los datos (state) y renderizar segun como queramos
                </p>
                <br />
                <strong>Ejemplo</strong>
                <div style={{flexDirection:"row", alignItems:"flex-start"}}>
                    <img src="../sources/ejemplo_state_con_JS.png" style={{width:"400px", height:"400px"}} />
                    <img src="../sources/resultado_state_JS.png" />
                </div>
            </>
        );
    }
}

ReactDOM.render(<State_con_JS/>, container_3);


//=========================================================================

// 3. Establecer state  (setState)
const container_4 = document.getElementById("container_4");

class Ejemplo_setState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        name: 'Initial State'
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            name:"React Rocks!"
        });
    }
    
    render() {
        return (
        <div>
            <button onClick={this.handleClick}>Click Me</button>
            <h1>{this.state.name}</h1>
        </div>
        );
    }
};

class Establecer_state extends React.Component{
    constructor(props){
        super(props)
        this.state={
        }
    }

    render(){
        return(
            <div>
                <h1>3. Establecer state  (setState)</h1>
                <p>
                    React proporciona un método para actualizar el componente state llamado setState. Llamas al setState método <br /> 
                    dentro de tu clase de componente así: this.setState(), pasando un objeto con pares clave-valor. Las claves son las propiedades <br />
                    de su estado y los valores son los datos de estado actualizados. <br />
                    <strong>En otras palabras, dentro de una funcion, se llama <span style={{color:"purple"}}>setState()</span> y se usa para cambiar el state del componente</strong>
                </p>
                <p>Ejemplo</p>
                <div style={{flexDirection:"row", alignItems:"flex-start"}}>
                    <div>
                        <label>Codigo de ejemplo</label>
                        <img src="../sources/ejemplo_setState.png" style={{width:"500px", height:"400px"}}/>
                    </div>
                    <div>
                        <label>Resultado</label>
                        <Ejemplo_setState/>
                    </div>
                </div>
                <br />
                <h2>3.1 Vincular metodo (del evento) a la clase</h2>
                <p>
                    Éxiste 2 maneras para hacer que un metodo sea utilizable dentro de un elemento de React:
                </p>
                <div style={{flexDirection:"row", backgroundColor:"#FE6F61", alignItems:"flex-start"}}>
                    <div>
                        <h3>Manera 1: con this</h3>
                        <p>
                            Creando el metodo y luego definiendolo en el constructor como se ve en la imagen:
                        </p>
                        <img src="../sources/vincular_metodo_componente.png" alt="" />
                        <p> De esta manera podra utilizar setState o cambiar los props.</p>
                    </div>
                    <div>
                        <h3>Manera 2: Funcion flecha en una variable</h3>
                        <p>De esta manera solo se guarda la funcion flecha en una variable y cuando se desee usar se llama "this.nombreFuncion"</p>
                        <img src="../sources/manera_2_metodo_react.png" alt="" />
                    </div>
                </div>
            </div>
        )
        
    }
}

ReactDOM.render(<Establecer_state/>, container_4);

//=========================================================================================

// 4. Usar state para alterar un elemento
const container_5 = document.getElementById("container_5");

class Ejemplo_alternar_state extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visibility: false
        };
        this.toggleVisibility = this.toggleVisibility.bind(this); 
    }

    toggleVisibility(){
        this.setState((state)=>({
            visibility: !state.visibility
        }));
    }

    render(){
        if(this.state.visibility){
            return(
                <div>
                    <button onClick={this.toggleVisibility}>Click Me</button>
                    <h1>Now you see me! (Ahora me ves)</h1>
                </div>
            );
        }else{
            return(
                <div>
                    <button onClick={this.toggleVisibility}>Click Me</button>
                </div>
            );
        }
    }
};


class Alternar_states extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div >
                <h1>4. Usar state para alterar un elemento segun su estadi anterios</h1>
                <p>
                    Es posible que necesites conocer el estado anterior para actualizar al siguiente estado (ejemplo: Un contandor). <br />
                    Sin embargo, las actualizaciones de estado pueden ser <span className="text_import">asincrónicas</span> ; esto significa que React puede agrupar varias setState() <br />
                    llamadas en una sola actualización. Esto significa que  <span className="text_import">no puede confiar en el valor anterior</span> <strong>this.state ni this.props</strong> al calcular el siguiente valor.
                </p>
                <div id="cont_cambio_state">
                    <div className="cont_hacer">
                        <h4 style={{color:"red"}}>NO HACER</h4>
                        <p>
                            No se debe hacer un cambio de "state" de la siguiente manera
                        </p>
                        <img src="../sources/no_cambiar_state.png" alt="" />
                    </div>
                    <div className="cont_hacer">
                        <h4 style={{color:"green"}}>SI HACER</h4>
                        <p>
                            En su lugar, <strong>debes pasar a "setState" una función</strong> que  permita acceder al estado actual de "state" y/o los "accesorios". <br />
                            Al utilizar una función con "setState" se garantíza que estas trabajando con los valores de estado y accesorios más actuales.
                        </p>
                        <img src="../sources/si_cambiar_state.png" alt="" />
                    </div>
                </div>
                <strong>
                    Cuando se le pasa la funcion a "setState" se debe cubrir los corchetes con unos parentesis, asi <br />
                    {"(state) => ({}); "} <br />
                </strong>

                <h2>4.1 Ejemplo</h2>
                <div style={{flexDirection:"row", border:"2px dotted blue"}}>
                    <div>
                        <p>Codigo</p>
                        <img src="../sources/ejemplo_alternar_state.png" style={{height:"450px", width:"375px"}} />
                    </div>
                    <div>
                        <p>Resultado</p>
                        <Ejemplo_alternar_state/>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Alternar_states/>,container_5)


//=====================================================================================

// Contador con Incremento y decremento

const container_count = document.getElementById("container_count");

class Contador extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        };
        this.incrementar = this.incrementar.bind(this);
        this.decrementar = this.decrementar.bind(this);
        this.resetear = this.resetear.bind(this); 

    }
    incrementar(){
        this.setState((state, props)=>({
            count: state.count + props.valor
        }));
    }

    decrementar(){
        this.setState((state, props)=>({
            count: state.count - props.valor
        }));
    }

    resetear(){
        this.setState(()=>({
            count: 0
        }));
    }

    
    render(){
        return(
            <div>
                <div style={{flexDirection:"row"}}>
                    <button className="inc"  onClick={this.incrementar}>Incrementar</button>
                    <button className="dec"  onClick={this.decrementar}>Decrementar</button>
                    <button className="reset" onClick={this.resetear}>Reset</button>
                    
                </div>
                <h1>Cuenta actual: {this.state.count}</h1>
            </div>
        );
    }
    
}

class Mostrar_contador extends React.Component{

    render(){
        return(
            <>
                <div >
                    <h1 className="title_count">Contador</h1>
                    <Contador valor={1}/>
                </div>
                <h3>Codigo</h3>
                <div style={{flexDirection:"row", alignItems:"flex-start"}}>
                    <img src="../sources/cod_contador_1.png" style={{height:"450px", width:"375px"}}/>
                    <img src="../sources/cod_contador_2.png" style={{height:"auto", width:"375px"}} />
                </div>
            </>
        );
    }
}

ReactDOM.render(<Mostrar_contador/>, container_count)

//=====================================================================================

//Crear una entrada (input) controlada

const container_entrada = document.getElementById("container_entrada");


class Formato_control extends React.Component{
    constructor(props){
        super(props)
        this.state={
            texto :""
        }
    this.Actualizar_texto = this.Actualizar_texto.bind(this);
    }

    Actualizar_texto(event){
        this.setState({
            texto: event.target.value
        });
    }

    render(){
        return(
            <div>
                <h3>Resultado</h3>
                <input type="text" value={this.state.texto} onChange={this.Actualizar_texto} placeholder="Introduzaca texto" style={{background:"#B4C5C5"}}/>
                <br /><br />
                <h4 style={{margin:0}}>Aqui se actualizara el texto:</h4>
                <p style={{marginBottom:"30px", fontSize:"1.5rem"}}>{this.state.texto}</p>
            </div>
        );
    }
}

class Mostrar_formato extends React.Component{

    render(){
        return(
            <>
                <h1>Crear una entrada (input) controlada</h1>
                <strong>Tener en cuenta esta informacion de los eventos en react</strong>
                <ul>
                    <li>
                        <p>
                            <strong>event:</strong> En este caso, event se refiere a un objeto de evento. Cuando ocurre un evento, como escribir algo en un campo de entrada "imput", <br />
                            React crea un objeto de evento que contiene información sobre ese evento en particular. Este objeto tiene muchas propiedades y métodos que proporcionan detalles sobre el evento. <br />
                            En este contexto, event contiene información sobre el evento que desencadenó la función 
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>event.target:</strong> Aquí, target se refiere al elemento HTML en el que ocurrió el evento. Por ejemplo, si tienes un campo de entrada "input" y se escriben caracteres en él, <br />
                            el elemento "input" es el "objetivo" de ese evento. event.target es una referencia a este elemento HTML.
                        </p>
                    </li>
                </ul>
                <div style={{flexDirection:"row", justifyContent:"space-around", alignItems:"flex-start"}}>
                    <div>
                        <h3>Codigo</h3>
                        <img srcSet="../sources/cod_format_control_react.png" style={{width:"500px", height:"auto"}} />
                    </div>
                    < Formato_control/>
                </div>
                </>
        );
    }
}

ReactDOM.render(<Mostrar_formato/>, container_entrada);

//=========================================================================================


//Crear una entrada (input) controlada con un Boton (submit)

const container_entrada_submit = document.getElementById("container_entrada_submit");

class Formato_submit extends React.Component{
    constructor(props){
        super(props)
        this.state={
            input:"",
            submit:""
        }
        this.cambiar_texto  = this.cambiar_texto.bind(this);
        this.capturar_texto = this.capturar_texto.bind(this);
    }

    capturar_texto(event){
        this.setState({
            input: event.target.value
        })
    }

    cambiar_texto(event){
        event.preventDefault();
        this.setState({
            submit: this.state.input
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.cambiar_texto}>
                    <input type="text" onChange={this.capturar_texto} placeholder="Introduzca texto" />
                    <button>Submit!</button>
                </form>
                <p>
                    Aqui se muestra el texto:
                    <span style={{color:"green", fontSize:"1.5rem", fontStyle:"oblique"}}> {this.state.submit}</span>
                </p>
            </div>
        );
    }
}

class Mostrar_Formato_submit extends React.Component{
    render(){
        return(
            <div style={{padding:"0 20px"}}>
                <h1>Crear una entrada (input) controlada con un Boton (submit)</h1>
                <section style={{flexDirection:"row", alignItems:"flex-start"}}>
                    <div style={{textAlign:"left",width:"50%"}}>
                        <p>Tener en cuenta los atributos de eventos de los formularios</p>
                        <ul>
                            <li>onSubmit: Se activa cuando se envía el formulario. Puedes utilizarlo para validar los datos antes de enviar el formulario al servidor.</li>
                            <li>onReset: Se activa cuando se restablece el formulario a sus valores predeterminados.</li>
                            <li>onChange: Se activa cuando cambia el valor de un elemento del formulario, como un campo de entrada.</li>
                            <li>onFocus: Se activa cuando un elemento del formulario obtiene el foco, es decir, cuando se hace clic en él o se navega a él.</li>
                            <li>onBlur: Se activa cuando un elemento del formulario pierde el foco, es decir, cuando el usuario deja de interactuar con él.</li>
                            <li>onInput: Se activa cuando se introduce un valor en un elemento del formulario. Similar a onChange, pero puede funcionar en tiempo real.</li>
                            <li>onClick: Se activa cuando se hace clic en un elemento del formulario, como un botón.</li>
                            <li>onKeyDown, onKeyPress, onKeyUp: Estos se activan cuando se presionan, presionan y sueltan una tecla, respectivamente, mientras un elemento del formulario está en foco.</li>
                            <li>onMouseDown, onMouseUp: Se activan cuando se presiona y se suelta un botón del mouse sobre un elemento del formulario.</li>
                            <li>onSelect: Se activa cuando se selecciona un texto en un campo de entrada.</li>
                        </ul>
                    </div>
                    <div style={{flexDirection:"column", width:"50%"}}>
                        <div>
                            <h3>Resultado</h3>
                            <Formato_submit/>
                        </div>
                        <h3>Codigo</h3>
                        <div style={{flexDirection:"row", alignItems:"flex-start"}}>
                            <img src="../sources/cod_formato_submit_1.png" style={{width:"50%", height:"auto"}} />
                            <img src="../sources/cod_formato_submit_2.png" style={{width:"50%", height:"auto"}} />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

ReactDOM.render(<Mostrar_Formato_submit/>, container_entrada_submit);


//==========================================================================================================================

//Pasar estados (state) de un elemento padrea un elemento hijo como accesorios

const container_6 = document.getElementById("container_6");

class Elemento_padre extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name_main: "Edwin"
        }
    }

    render(){
        return(
            <div style={{border:"1px solid blue", width:"100%"}}>
                <h4>Soy ele Elemento_padre</h4>
                <Elemento_hijo name_main={this.state.name_main}/>
            </div>
        );
    }

}

class Elemento_hijo extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div style={{width:"100%", backgroundColor:"#B0BACD"}}>
                <h4>Soy el Elemento hijo</h4>
                <h3 style={{color:"green", fontWeight:"bolder"}}>
                    {this.props.name_main}
                </h3>
            </div>
        );
    }
}



class Mostrar_pasar_state extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div style={{flexDirection:"row", alignItems:"flex-start"}}>
                <div style={{ width:"50%"}}>
                    <h1>5. Pasar estados (state) de un elemento padre a un elemento hijo como Accesorios</h1>
                    <p>
                        Un patrón común es tener un componente con "state" que contenga lo importante para su aplicación, <br />
                        que luego se representaran en los componentes secundarios. <br />
                        Quiere que estos componentes secundarios accedan a algunas partes del state, enonces, estos "states" se pasaran como accesorios.
                    </p>
                    <strong>Ejemplo</strong>
                    <dd>
                        <p>
                            Por ejemplo, tal vez tenga un componente "App", dentro hay un  "Navbar", entre otros componentes. <br />
                            En "App", tiene "state" con una gran cantidad de información del usuario, pero solo "Navbar" necesita acceso al nombre de usuario <br />
                            del usuario para poder mostrarlo. Pasas esa pieza del "state" al "Navbar"como un accesorio.
                        </p>
                    </dd>
                    <h2>
                        <strong>Paradigma importante React</strong>
                    </h2>
                    <p>
                        Algunos paradigamas importantes a la hora de  utilizar react son:
                    </p>
                    <ol>
                        <li>
                            <strong>
                                flujo de datos unidireccional
                            </strong>
                            <p>
                                El estado fluye en una dirección hacia abajo en el árbol de componentes de su aplicación, desde el componente principal con estado hasta los componentes secundarios. <br />
                                Los componentes secundarios solo reciben los datos de estado que necesitan.
                            </p>
                        </li>
                        <li>
                            <strong>
                                Aplicaciones complejas se dividen en pocos componentes con estado
                            </strong>
                            <p>
                            El resto de sus componentes simplemente reciben el estado del padre como accesorios y representan una interfaz de usuario desde ese estado.
                            </p>
                        </li>
                        <li>
                            <strong>Separar logica del "State" y la logica de la interfaz</strong>
                            <p>
                                Crear una separación donde la gestión del estado se maneja en una parte del código y la representación de la interfaz de usuario en otra.
                            </p>
                            <p>
                            Este principio de separar la lógica de estado de la lógica de la interfaz de usuario es uno de los principios clave de React. <br />
                            Cuando se usa correctamente, hace que el diseño de aplicaciones complejas y con estado sea mucho más fácil de administrar.
                            </p>
                        </li>
                    </ol>
                </div>
                <div style={{ width:"50%"}}>
                    <h2>Ejemplo de pasar "states" como accesorios</h2>
                    <Elemento_padre/>
                    <p>El Elemento_padre tiene el state: name con el valor "Edwin" y se lo pasa al Elemento_hijo como accesorio</p>
                    <h2>Codigo</h2>
                    <div style={{flexDirection:"row", alignItems:"flex-start"}}>
                        <img src="../sources/ejemplo_elemento_padre_pasar_state.png" style={{width:"50%", height:"400px"}} />
                        <img src="../sources/ejemplo_elemento_hijo_pasar_state.png" style={{width:"50%", height:"400px"}} />
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Mostrar_pasar_state/>, container_6);


//=================================================================================================

// Pasar funciones como accesorios

const container_7 = document.getElementById("container_7");


class Mostrar_pasar_funciones extends React.Component{
    
    render(){
        return(
            <>
                <h1>
                    6. Pasar funciones como accesorios
                </h1>
                <p>
                    Puede pasar "state" accesorios a componentes secundarios, pero no está limitado a pasar datos. También puede pasar funciones de controlador o cualquier método definido en un componente de React a un componente secundario. Así es como permite que los componentes secundarios interactúen con sus componentes principales
                </p>
                <div style={{width:"100%"}}>
                    <Componente_padre/>
                </div>
                <ul>
                    <li>
                        El componenten padre tiene los "state" y "funciones"
                    </li>
                    <li>
                        El componente "GetInput" recibe como accesorios una "handlefunction" del componente padre, ademas recibe "state.input" para modificar su valor
                    </li>
                    <li>
                        El componenete "InputRender" recibe como accesorio  "state.input" para mostrarlo
                    </li>
                </ul>
                <dd>
                    <p>
                        En conclusion cada componente tiene un tara especifica <br />
                        <strong>GetImput</strong>: Recibe la informacion y modifica el state <br />
                        <strong>ImputRender</strong>: Recibe la informacion del state y la muestra
                    </p>
                </dd>
                <p>
                    Esto es muy parecido a "Crear una entrada (input) controlada", sin embargo aqui se separa la logica de "modificar el state" y la "interfaz"
                </p>
                <div style={{flexDirection:"row"}}>
                    <img src="../sources/pasar_funciones_elemento_padre.png" style={{width:"33%", height:"300px"}}/>
                    <img src="../sources/pasar_funciones_elemento_GetInput.png" style={{width:"33%", height:"300px"}}/>
                    <img src="../sources/pasar_funciones_elemento_RenderInput.png" style={{width:"33%", height:"300px"}}/>
                </div>
            </>
        );
    }
}

class Componente_padre extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        inputValue: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            inputValue: event.target.value
        });
    }

    render() {
        return (
            <div style={{border:"3px solid aquamarine", width:"80%", margin:"auto"}}>
                <h3>Soy el componente padre</h3>
                <div style={{flexDirection:"row", justifyContent:"space-around", width:"100%"}}>
                    <GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
                    <RenderInput input={this.state.inputValue}/>
                </div>
            </div>
        );
    }
};

class GetInput extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>Get Input:</h3>
                <input value={this.props.input} onChange={this.props.handleChange}/>
            </div>
        );
    }
};

class RenderInput extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>Input Render:</h3>
                <p>{this.props.input}</p>
            </div>
        );
    }
};

ReactDOM.render(<Mostrar_pasar_funciones/>, container_7);

//===================================================================================

//metodos del ciclo de vida de React

const container_8 = document.getElementById("container_8");

class Mostrar_components_lifeCicle extends React.Component{
    render(){
        return(
            <>
                <h1>
                        7. Metodos del ciclo de vida de React
                </h1>
                <div style={{width:"80%", margin:"auto"}}>
                    <p>
                        Los componentes de React tienen varios métodos especiales que brindan oportunidades para realizar acciones en puntos específicos del ciclo de vida de un componente. Estos se denominan métodos de ciclo de vida o ganchos de ciclo de vida y le permiten capturar componentes en determinados momentos. Esto puede ser antes de que se procesen, antes de que se actualicen, antes de que reciban accesorios, antes de que se desmonten, etc. Aqui algubos de los metodos principales:
                    </p>
                    <ul>
                        <li>componentWillMount() (creo que este este metodo ya no esta disponible)</li>
                        <li>componentDidMount()</li>
                        <li>shouldComponentUpdate()</li>
                        <li>componentDidUpdate()</li>
                        <li>componentWillUnmount()</li>
                    </ul>
                </div>
                
            </>
        );
    }
}

ReactDOM.render(<Mostrar_components_lifeCicle/>,container_8);

//=====================================================================================

// Metodo del componente Will Mount

const container_8_1 = document.getElementById("container_8_1");

class Metodo_willMount extends React.Component{
    render(){
        return(
            <div style={{width:"80%", margin:"auto"}}>
                <h1>7.1 Metodo de componentWillMount</h1>
                <p>El componentWillMount se ejecuta antes de renderizar el componente</p>
                <img src="../sources/componentWillMount.png" alt="" />
            </div>
        );
    }
}

ReactDOM.render(<Metodo_willMount/>, container_8_1);

//==========================================================================================

// Metodo del componente Did Mount

const container_8_2 = document.getElementById("container_8_2");

class Metodo_didMount extends React.Component{

    render(){
        return(
            <div style={{width:"80%", margin:"auto"}}>
                <h1>7.2 Metodo de componentDidMount</h1>
                <p>
                    La mayoría de los desarrolladores web, en algún momento, necesitan llamar a un endpoint API para recuperar datos. Si está trabajando con React, es importante saber dónde realizar esta acción.
                </p>
                <div style={{flexDirection:"row"}}>
                    <img src="../sources/ejemplo_didMount.png" style={{width:"500px"}} />
                    <Ejemplo_didMount/>
                </div>
                <p>
                    La mejor práctica con React es realizar llamadas API o cualquier llamada a su servidor en el método del ciclo de vida componentDidMount(). Este método se llama después de montar un componente en el DOM. Cualquier llamada setState() aquí activará una nueva representación de su componente. Cuando llama a una API en este método y establece su estado con los datos que devuelve la API, se activará automáticamente una actualización una vez que reciba los datos.
                </p>
            </div>
        );
    }
}

class Ejemplo_didMount extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            activateUser: null
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                activateUser: 1998
            });
        }, 5000);
    }
    
    render(){
        return(
            <div>
                <h1>
                    Usuario activo: {this.state.activateUser}
                </h1>
                <h6>Espere 5 segundos la respuesta del servidor</h6>
            </div>
        );
    }
}

ReactDOM.render(<Metodo_didMount/>, container_8_2);


//===========================================================================================
//  Ejemplo de listener(oyente) con DidMount

const container_listener = document.getElementById("container_listener")

class Mostrar_listener extends React.Component{
    render(){
        return(
            <div style={{width:"80%", margin:"auto"}}>
                <h1 style={{color:"green"}}>Ejemplo de evento con addEventListener()</h1>
                <p> 
                    React proporciona un sistema de eventos sintético que envuelve el sistema de eventos nativo presente en los navegadores. Esto significa que el sistema de eventos sintéticos se comporta exactamente igual independientemente del navegador del usuario.
                </p>
                <p>
                    Ya has estado usando algunos de estos controladores de eventos sintéticos, como onClick(). El sistema de eventos sintéticos de React es excelente para usar en la mayoría de las interacciones que administrará en elementos DOM. Sin embargo, si desea adjuntar un controlador de eventos al documento o a los objetos de la ventana, debe hacerlo directamente.
                </p>
                <div style={{flexDirection:"row", alignItems:"flex-start"}}>
                    <div style={{flexDirection:"column", width:"50%"}}>
                        <img src="../sources/ejemplo_listener_parte_1.png" style={{width:"100%", height:"400px"}} />
                        <img src="../sources/ejemplo_listener_parte_2.png" style={{width:"100%", height:"200px"}} />
                    </div>
                    <Ejemplo_listener/>
                </div>
            </div>
        );
    }
}


class Ejemplo_listener extends React.Component{
    constructor(props){
        super(props)
        this.state={
            message_num:"",
            message_letter:"presiona una tecla"
        }
    }

    componentDidMount(){
        //Ejemplo 1: mostrar tecla oprimida
        document.addEventListener("keydown", (event)=>{
            this.setState({
                message_letter: event.key
            })
        })

        //Ejemplo 2: Mostrar numero al azar haciendo un click
        document.getElementById("click_me").addEventListener("click", ()=>{
            let num_random = Math.floor(Math.random()*100);
            this.setState({
                message_num: num_random
            });
        })
    }
    componentWillUnmount(){
        document.removeEventListener("click")
    }

    render(){
        return(
            <div style={{width:"50%",justifyContent:"center"}}>
                <h3>Tu letra es: {this.state.message_letter}</h3>
                <h3>Tu numero es: {this.state.message_num} </h3>
                <div id="click_me" style={{width:"100px", height:"100px", backgroundColor:"aquamarine", cursor:"pointer"}}>
                    <p>Haz click aqui</p>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Mostrar_listener/>, container_listener);

//=======================================================================================
// 7.3 del metodo shouldComponentUpdate

const container_8_3 = document.getElementById("container_8_3");

class Mostrar_SCU extends React.Component{

    render(){
        return(
            <div style={{width:"80%", margin:"auto"}}> 
                <h2>7.3 Ejemplo de shouldComponentUpdate(): optimizar Renderizado</h2>
                <ul>
                    <li>
                        React proporciona un método de ciclo de vida al que puede llamar cuando los componentes secundarios reciben nuevos "state" o "props"y declarar específicamente si los componentes deben actualizarse o no. El método es shouldComponentUpdate(), y toma "nextProps" y "nextState" como parámetros
                    </li>
                    <li>
                        Puede utilizar shouldComponentUpdate() para evitar esto comparando el archivo props. El método debe devolver un boolean valor que le indique a React si actualizar o no el componente. Puede comparar los accesorios actuales ( this.props) con los siguientes accesorios ( nextProps) para determinar si necesita actualizar o no, y regresar "true" o "false" en consecuencia.
                    </li>
                </ul>
                <h3>Codigo</h3>
                <div style={{flexDirection:"row"}}>
                    <div style={{flexDirection:"row"}}>
                        <img src="../sources/ejemplo_shouldComponentUpdate_1.png" style={{width:"auto", height:"300px"}} />
                        <img src="../sources/ejemplo_shouldComponentUpdate_2.png" style={{width:"auto", height:"300px"}} />
                    </div>
                    <div>
                        <h3>Ejemplo: Renderizar solo cuando el numero es "PAR"</h3>
                        <Controller/>
                    </div>
                </div>
            </div>
        );
    }
}

class OnlyEvens extends React.Component {
    constructor(props) {
        super(props);
    }

    //Dice si DEJA o NO renderizar el componente
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Should I update?');
        if(nextProps.value %2 == 0){
            return true;
        }else{
            return false;
        }
    }
    componentDidUpdate() {
        console.log('Component re-rendered.');
    }
    render() {
        return <h1>{this.props.value}</h1>;
    }
}

class Controller extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        value: 0
    };
    this.addValue = this.addValue.bind(this);
    }
    addValue() {
        this.setState(state => ({
            value: state.value + 1
        }));
    }
    render() {
        return (
            <div>
                <button onClick={this.addValue}>Add</button>
                <OnlyEvens value={this.state.value} />
            </div>
        );
    }
}


ReactDOM.render(<Mostrar_SCU/>,container_8_3);

//=====================================================================================

// Styles en React

const container_9 = document.getElementById("container_9");

class Style_React extends React.Component{
    render(){
        return(
            <div>
                <h1> 8. Styles en React</h1>
                <ul>
                    <li>
                        En react tambien cambia la sintaxys de las propiedades de "css", ejemplo: "font-size == fontSize" (Cambia la notacion kebab-case a Camel-case)
                    </li>
                    <br />
                    <li>
                        Se pasa los estilos como un "object" 
                        <img src="../sources/ejemplo_styles_react.png" style={{height:"25px", width:"360px", margin:"-4px 0px"}} />
                    </li>
                    <li>
                        Para ordenar mejor el codigo, se puede declarar los "style" en una constante y utlizarla cuando se necesite
                        <img src="../sources/ejemplo_styles_react_1.png" style={{height:"50px", width:"170px", margin:"-25px 0px"}} />
                    </li>
                </ul>
                <Styles_dinamicos/>
            </div>
        );
    }
}


class Styles_dinamicos extends React.Component{
    constructor(props){
        super(props)
        this.state={
            input:""
        }
    }

    actualizarEntrada =(event)=>{
        this.setState({
            input: event.target.value
        })
    }

    render(){
        let style_input={}

        if(this.state.input.length < 10){
            style_input.border = "1px solid black";
            style_input.backgroundColor = "#8CE78C";
        }else{
            style_input.border = "3px solid red";
            style_input.backgroundColor = "#FFAA33";
        }

        return(
            <div style={{width:"80%", margin:"auto"}}>
                <h2>8.1 Cambiar CSS en condicionalmente según el estado del componente</h2>
                <p>
                    También puede renderizar CSS condicionalmente según el estado de un componente de React. Para hacer esto, verifica una condición y, si esa condición se cumple, modifica el objeto de los estilos asignado "style" de JSX .
                </p>
                <div>
                    <h4>Introduzca nombre: (intente no pasar los 10 caracteres)</h4>
                    <input type="text" value={this.state.input} onChange={this.actualizarEntrada} style={style_input}/>
                </div>
            </div>
        );
    }
}



ReactDOM.render(<Style_React/>, container_9)

//===========================================================================================

//Utilizar codigo Js en el "render()"

const container_10 = document.getElementById("container_10");

class Mostrar_js_render extends React.Component{

    render(){
        return(
            <div style={{width:"80%", margin:"auto"}}>
                <h1>9. Usar JS en el render</h1>
                <p>
                    Se puede escribir JavaScript directamente en su método "render", antes de la declaración "return", sin necesidad de insertarlo entre llaves. Esto se debe a que aún no está dentro del código JSX. Cuando desee utilizar una variable más adelante en el código JSX dentro de la declaración "return", coloque el nombre de la variable entre llaves.
                </p>
                <h3>Codigo</h3>
                <div style={{flexDirection:"row"}}>
                    <div style={{flexDirection:"row", width:"70%"}}>
                        <img src="../sources/ejemplo_js_render_1.png" style={{height:"500px", width:"45%", marginLeft:"auto"}} />
                        <img src="../sources/ejemplo_js_render_2.png" style={{height:"500px", width:"45%", marginRight:"auto"}} />
                    </div>
                    <div style={{width:"30%", justifyContent:"flex-start"}}>
                        Resultado
                        <Chat_bot/>
                    </div>
                </div>
                <p>
                    Este ejemplo se usa  JS para elegir una respuesta al azar de la lista y renderizarla, ademas, se verifica que halla algun valor en el "input", para dar una respuesta
                </p>
            </div>
        );
    }
}


class Chat_bot extends React.Component{
    constructor(props){
        super(props)
        this.state={
            input:"",
            randomPosition:""
        }
        //this.new_input = this.new_input.bind(this);
        //this.new_answer = this.new_answer.bind(this);
    }
    /*
    new_input(event){
        this.setState({
            input: event.target.value
        });
    }
    new_answer(){
        if(this.state.input){
            this.setState({
                input: "",
                randomPosition: Math.floor(Math.random()*20)
            })
        }
    }
    */
    new_input = (event) => {
        this.setState({
            input: event.target.value
        })
    }
    new_answer = () =>{
        if(this.state.input){
            this.setState({
                randomPosition:Math.floor(Math.random()*20),
                input: ""
            })
        }
    }
    

    render(){
        const possibleAnswers = [
            'It is certain',
            'It is decidedly so',
            'Without a doubt',
            'Yes, definitely',
            'You may rely on it',
            'As I see it, yes',
            'Outlook good',
            'Yes',
            'Signs point to yes',
            'Reply hazy try again',
            'Ask again later',
            'Better not tell you now',
            'Cannot predict now',
            'Concentrate and ask again',
            "Don't count on it",
            'My reply is no',
            'My sources say no',
            'Most likely',
            'Outlook not so good',
            'Very doubtful'
        ];
        const answer = possibleAnswers[this.state.randomPosition]

        return(
            <div>
                <input type="text" value={this.state.input} onChange={this.new_input}/>
                <button onClick={this.new_answer}>Enviar</button>
                <h3>respuesta: {answer}</h3>
            </div>
            
        );
    }
}

ReactDOM.render(<Mostrar_js_render/>,container_10);

//========================================================================================

//Renderizar con condicional (If/Else)

const container_11 = document.getElementById('container_11');

class Mostra_con_ifelse extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div style={{width:"80%", margin:"auto"}}>
                <h1>10. Renderizar con condicional (If/Else)</h1>
                <p>
                    Otra aplicación del uso de JavaScript para controlar la vista renderizada es vincular los elementos que se renderizan a una condición. Cuando la condición es verdadera, se representa una vista. Cuando es falso, es una visión diferente. Puede hacer esto con una if/elsedeclaración estándar en el render()método de un componente de React.
                </p>
                <div style={{flexDirection:"row", alignItems:"flex-start"}}>
                    <div>
                        <h3>Codigo</h3>
                        <img src="../sources/ejemplo_render_conditional_1.png"  style={{height:"150px", width:"100%"}} />
                        <img src="../sources/ejemplo_render_conditional_2.png" style={{height:"300px", width:"100%"}} />
                    </div>
                    <div>
                        <h3>Resultado</h3>
                        <Render_ifelse/>
                    </div>
                </div>
            </div>
        );
    }
}


class Render_ifelse extends React.Component{
    constructor(props){
        super(props)
        this.state={
            display: true
        }
        this.toggleDisplay = this.toggleDisplay.bind(this);
    }

    toggleDisplay() {
        this.setState((state) => ({
            display: !state.display
        }));
    }

        render() {
            // Change code below this line
            if(this.state.display){
            return (
                <div>
                    <button onClick={this.toggleDisplay}>Toggle Display</button>
                    <h1>Displayed!</h1>
                </div>
            );
            }else{
                return (
                <div>
                    <button onClick={this.toggleDisplay}>Toggle Display</button>
                </div>
            );
            /*
            return (
                <div>
                    <button onClick={this.toggleDisplay}>Toggle Display</button>
                    { this.state.display && <h1>Displayed!</h1>}
                </div>
            );
            */
            }
    }
}


ReactDOM.render(<Mostra_con_ifelse/>, container_11);


//======================================================================================

const container_11_1 = document.getElementById('container_11_1');


class Mostra_condicional_conciso extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div style={{width:"80%", margin:"auto"}}>
                <div style={{backgroundColor:"#A8D1E8"}}>
                    <h2>10.1  Renderizar con condicional (&&)</h2>
                    <p>
                        Hay una forma más concisa de lograr el mismo resultado del "if/else". Imagine que está rastreando varias condiciones en un componente y desea que se representen diferentes elementos dependiendo de cada una de estas condiciones. Si escribe muchas declaraciones "if/else" para devolver UI ligeramente diferentes, puede repetir el código, lo que deja margen de error. En su lugar, puede utilizar el operador lógico "&&" para realizar la lógica condicional de una forma más concisa. Esto es posible porque desea verificar si una condición es "true" y, si lo es, devolver algún marcador (etiqueta HTML)
                    </p>
                </div>
                <div style={{flexDirection:"row", alignItems:"flex-start"}}>
                    <div style={{width:"50%"}}>
                        <h3>Condicional (&&)</h3>
                        <img src="../sources/render_condicional_&&.png" style={{height:"auto", width:"100%"}}/>
                    </div>
                    <div style={{width:"50%"}}>
                        <h3>Condicional if/else</h3>
                        <img src="../sources/ejemplo_render_conditional_2.png" style={{height:"auto", width:"100%"}} />
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Mostra_condicional_conciso/>, container_11_1);

//=========================================================================================

// Renderizar condicional con "OPERADOR TERNARIO"
const container_11_2 = document.getElementById('container_11_2');

const style_input = {
    margin:"5px",
    with: "250px",
    backgroundColor:"#C8C8C8",
    borderRadius:"10px",
    padding:"0 5px"
}

class Mostrar_renderizado_ternario extends React.Component{
    render(){
        return(
            <div style={{width:"80%", margin:"auto"}}>
                <div style={{backgroundColor:"#55F9F9"}}>
                    <h1>10.2 Renderizar con "OPERADOR TERNARIO"</h1>
                    <p>
                        El operador <strong>ternario</strong> se utiliza a menudo como atajo para declaraciones "if/else" en JavaScript. No son tan sólidas (grandes) como las declaraciones "if/else" tradicionales, pero son muy populares entre los desarrolladores de React. Una razón para esto es que, debido a cómo se compila JSX, las declaraciones "if/else" no se pueden insertar directamente en el código JSX, se deben declarar fuera del return, en cambio, el operador ternario si podria utilizarse dentro de JSX.
                    </p>
                </div>
                <div style={{flexDirection:"column"}}>
                    <div>
                        <h3>Codigo</h3>
                        <div style={{flexDirection:"row", alignItems:"flex-start"}}>
                            <img src="../sources/render_ternario_1.png" style={{width:"30%"}}/>
                            <img src="../sources/render_ternario_2.png"  style={{width:"70%"}}/>
                        </div>
                    </div>
                    <div>
                        <h3>Resultado</h3>
                        <Render_ternario/>
                    </div>
                </div>
            </div>
        );
    }
}

class Render_ternario extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            input:"",
            userAge:""
        }
        this.submit = this.submit.bind(this);
        this.hadleChange = this.hadleChange.bind(this);
    }

    hadleChange(event){
        this.setState({
            input: event.target.value,
            userAge:""
        });
    }

    submit(){
        this.setState((state)=>({
            userAge: state.input
        })); 
    }

    render(){
        const buttonOne = <button onClick={this.submit}>Submit</button>
        const buttonTwo = <button style={{backgroundColor:"green"}}>Puedes pasar</button>
        const buttonThree = <button style={{backgroundColor:"red"}}>No Puedes pasar</button>
        return(
            <div >
                <h4>Ingrese su edad</h4>
                <div style={{flexDirection:"row"}}>
                    <input type="number" value={this.state.input} onChange={this.hadleChange} style={style_input}/>
                    {
                        (this.state.userAge === "") ? buttonOne : ( this.state.userAge >=18  &&  this.state.userAge <= 105 ) ? buttonTwo : buttonThree
                    }
                </div>
            </div>
        );
    }
    
}

ReactDOM.render(<Mostrar_renderizado_ternario/>,container_11_2)

//==============================================================================================================================
//Renderizar elementos segun o utilizando sus accesorios
let style_imp = {
    fontWeight:"bolder",
    fontStyle:"italic"
}

const container_12 = document.getElementById("container_12");

class Mostrar_renderizar_accesorios extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div style={{ width:"80%", margin:"auto"}}>
                <h1 style={style_imp}>11. Renderizar elementos segun o utilizando sus accesorios</h1>
                <ul>
                    <li>
                        <p>
                            Se ha visto cómo usar <span style={style_imp}>"if/else"</span> , <span style={style_imp}>&&</span> y el <span style={style_imp}>operador ternario</span> ( condition ? expressionIfTrue : expressionIfFalse) para tomar decisiones condicionales sobre qué renderizar y cuándo. Sin embargo, queda un tema importante por discutir que le permite combinar cualquiera o todos estos conceptos con otra característica poderosa de React: <span style={style_imp}>los accesorios.</span> 
                        </p>
                    </li>
                    <li>
                        <p>
                            El uso de accesorios para renderizar código condicionalmente es muy común entre los desarrolladores de React; es decir, utilizan el valor de un accesorio determinado para tomar decisiones automáticamente sobre qué renderizar.
                        </p>
                    </li>
                </ul>
                <h3>Codigo</h3>
                <section style={{display:"flex", flexDirection:"row", alignItems:"flex-start"}}>
                    <div style={{width:"70%", alignItems:"flex-start"}}>
                        <img src="../sources/renderizar_segun_accesorios_1.png" style={{height:"400px", width:"auto"}} />
                        <img src="../sources/renderizar_segun_accesorios_2.png" style={{height:"400px", width:"auto"}}/>
                    </div>
                    <div style={{width:"30%"}}>
                        <h4>Resultado</h4>
                        <Juego_dado/>
                    </div>
                </section>
            </div>
        );
    }
}


class Juego_dado extends React.Component{
    constructor(props){
        super(props)
        this.state={
            contador: 1
        }
    }

    aumentarContador = ()=>{
        this.setState((state)=>({
            contador: state.contador + 1
        }));
    };

    render(){
        let caras = Math.floor(Math.random()*6)

        return(
            <div id="juego_dado">
                <div>
                    <h2>Simulador de dado</h2>
                    <h5>(Si sacas MAS de 3 Ganas)</h5>
                    <p> turno numero:{ this.state.contador}</p>
                </div>
                <div>
                    <button onClick={this.aumentarContador}>Jugar</button>
                    <Result lanzamiento={caras}/>
                </div>                
            </div>
        );
    }
}


class Result extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let style_number = {
            0: {color:"yellow"},
            1: {color:"blue"},
            2: {color:"red"},
            3: {color:"purple"},
            4: {color:"green"},
            5: {color:"brown"}
        }
        return(
            <div>
                <h2>
                    {
                        (this.props.lanzamiento+1 > 3)? "Ganaste": "Perdiste"
                    }
                </h2>
                <h2 style={style_number[this.props.lanzamiento]}>{this.props.lanzamiento + 1}</h2>
            </div>
        );
    }
}

ReactDOM.render(<Mostrar_renderizar_accesorios/>, container_12)


//=======================================================================================================
// Representar elementos dinamicamente (con .map())

const container_13 = document.getElementById("container_13") 

const style_texarea ={
    with:"350px",
    height:"100px",
    margin:"5px",
    padding:"6px",
    borderRadius:"20px",
    border:"2px solid black"
}

class Mostrar_dinamico_map extends React.Component{
    

    render(){
        return(
            <div style={{width:"80%", margin:"auto"}}>
                <h1>12. Renderizar "n" numero de elementos (con .map())</h1>
                <p>
                    La representación condicional es útil, pero es posible que necesite que sus componentes representen una cantidad desconocida de elementos. A menudo, en la programación reactiva, un programador no tiene forma de saber cuál es el estado de una aplicación hasta el tiempo de ejecución, porque mucho depende de la interacción del usuario con ese programa. Los programadores deben escribir su código para manejar correctamente ese estado desconocido con anticipación. El uso <span style={style_imp}>Array.map()</span> en React ilustra este concepto.
                </p>
                <p>
                    Por ejemplo, crea una aplicación sencilla de "Lista de tareas pendientes". Como programador, no tienes forma de saber cuántos elementos puede tener un usuario en su lista. Debe configurar su componente para representar dinámicamente la cantidad correcta de elementos de la lista mucho antes de que alguien que use el programa decida que hoy es el día de lavar la ropa.
                </p>
                <p style={{fontSize:"1.3rem",fontWeight:"bolder", backgroundColor:"rgb(237,26,50,0.7)"}}>
                    Cada elemento hermano que se hace con map() (u otro metodo), debe tener un accesorio "key" que lo identifique de los demas elementos hermanos. <br />
                    suele ser el valor del mismo item, algo, unico <br />
                    Evitar colocar el "indice" como "key"
                </p>
                <h3>Codigo</h3>
                <div style={{flexDirection:"row", alignItems:"flex-start"}}>
                    <div>
                        <img src="../sources/renderizar_con_map_1.png" style={{height:"400px", width:"auto"}}/>
                        <img src="../sources/renderizar_con_map_2.png" style={{height:"400px", width:"auto"}}/>
                    </div>
                    <div style={{justifyContent:"center"}}>
                        <h3>Resultado</h3>
                        <Lista_tareas/>
                    </div>
                </div>
            </div>
        );
    }
}


class Lista_tareas extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            input:"",
            tareas:[]
        }
    }

    actualizarInput = (event)=>{
        this.setState({
            input: event.target.value
        })
    }

    mostrarLista= ()=>{
        let lista_input = this.state.input.split(",");
        this.setState(({
            tareas: lista_input,
            input:""
        }))
    }

    render(){
        let itemsLista = this.state.tareas.map((item) => {
            return <li>{item}</li>
        })

        return(
            <div>
                <h2 style={{margin:"0px auto", color:"green"}}>Cree una lista de Quehaceres</h2>
                <p style={{marginTop:"0px"}}>(Separe las tareas por comas)</p>
                <div style={{flexDirection:"row", alignItems:"flex-start"}}>
                    <div>
                        <textarea  
                        style={style_texarea} 
                        value={this.state.input} 
                        onChange={this.actualizarInput}></textarea>

                        <button onClick={this.mostrarLista}>Crear lista</button>
                    </div>
                    <ul>
                        {itemsLista}
                    </ul>
                </div>
            </div>
        );
    }

}

ReactDOM.render(<Mostrar_dinamico_map/>,container_13);






