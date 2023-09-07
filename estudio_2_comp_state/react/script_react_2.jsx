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
                    Un método de clase normalmente necesita usar la "this" (palabra clave) para poder acceder a las propiedades de la clase (como "state" y "props"). <br />
                    Para vincular el metodo a la clase y que este pueda modificar los datos del "Componente React", se hace de la siguiente manera:
                </p>
                <img src="../sources/vincular_metodo_componente.png" alt="" />
                <p> De esta manera podra utilizar setState o cambiar los props.</p>
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

// Metodo del componente Will Mount

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
                <img src="" alt="" />
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

ReactDOM.render(<Metodo_didMount/>, container_8_1);




