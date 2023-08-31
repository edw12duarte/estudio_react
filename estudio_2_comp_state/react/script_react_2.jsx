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
                <div style={{flexDirection:"row"}}>
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
                <div style={{flexDirection:"row"}}>
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
                <h1 className="title_count">Contador</h1>
                <Contador valor={1}/>
            </>
        );
    }
}

ReactDOM.render(<Mostrar_contador/>, container_count)
