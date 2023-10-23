import React from "react";
import { useState } from "react";


export default function ClimaForm({cambioCiudad}){

    const [city, setCity] = useState("");

    function actualizarCity (event){
        const nuevaInfo = event.target.value;
        if(nuevaInfo){
            setCity(nuevaInfo);
        }
    }

    function manejarEnvio(event){
        event.preventDefault();
        cambioCiudad(city);
        setCity("");
    }



    return(
        <form className="input-group" onSubmit={manejarEnvio}>
            <input className="form-control " type="text"  value={city} onChange={actualizarCity}/>
            <div className="input-group-append" >
                <button className="btn btn-primary" type="submit">
                    enviar
                </button>
            </div>
        </form>
    );
}