import React from "react";
import { useState } from "react";
import "../hojas_estilo/Calculadora.css"
import { Boton } from "./Boton.js";
import { Pantalla } from "./Pantalla.js";
import { BotonClear } from "./BotonClear.js";
import { evaluate } from "mathjs";

function Calculadora(){

    const [input, setInput] = useState("");

    const actualizarPantalla = (valor)=>{
        setInput(input + valor) //Se llama la operacion de una manera especial en el elemento hijo
        //setInput(input + valor.target.textContent); Manera tradicional de obtener el contenido del elemento que hace el evento("valor" en este caso)
    };

    const limpiarPantalla = ()=>{
        setInput("");
    }

    const calcularResultado = ()=>{
        let patron = /^[*/.]+|\W{2,}|(\W)$/g // el patron busca ==> comienza por (*/.) o tiene 2 simbolos seguidos o termina por un simbolo

        if(input.length > 0 && !(patron.test(input))){
            setInput(evaluate(input));
        }else{
            setInput("error");
        }
        
    }

    return(
        <div className="contenedor_calculadora">
            <Pantalla input={input} />
            <div className="contenedor_botones">
                <div className="fila"> 
                    <Boton operacionClick={actualizarPantalla}>1</Boton>
                    <Boton operacionClick={actualizarPantalla}>2</Boton>
                    <Boton operacionClick={actualizarPantalla}>3</Boton>
                    <Boton operacionClick={actualizarPantalla}>+</Boton>
                </div>
                <div className="fila">
                    <Boton operacionClick={actualizarPantalla}>4</Boton>
                    <Boton operacionClick={actualizarPantalla}>5</Boton>
                    <Boton operacionClick={actualizarPantalla}>6</Boton>
                    <Boton operacionClick={actualizarPantalla}>-</Boton>
                </div>
                <div className="fila">
                    <Boton operacionClick={actualizarPantalla}>7</Boton>
                    <Boton operacionClick={actualizarPantalla}>8</Boton>
                    <Boton operacionClick={actualizarPantalla}>9</Boton>
                    <Boton operacionClick={actualizarPantalla}>*</Boton>
                </div>
                <div className="fila">
                    <Boton operacionClick={calcularResultado}>=</Boton>
                    <Boton operacionClick={actualizarPantalla}>0</Boton>
                    <Boton operacionClick={actualizarPantalla}>.</Boton>
                    <Boton operacionClick={actualizarPantalla}>/</Boton>
                </div>
                <div className="fila">
                    <BotonClear operacionClear={limpiarPantalla}>Clear</BotonClear>
                </div>
            </div>
        </div>
    ); 
}



export{
    Calculadora
}