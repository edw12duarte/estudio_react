import { useState, useEffect } from "react";
import ClimaForm from "./Clima_form";
import ClimaInformacion from "./ClimaInformacion";
import Loading from "./Loading";


function Clima() {
    const [cityClima, setCityClima] = useState(null);

    //Cuando se renderiza por primera vez se ejecuta cargarinfo()
    useEffect(()=>{
        manejarCambioCiudad();
    }, []);

    // cuando se renderiza uno o mas states , se ejecuta el codigo dentro del useEffect
    // [] => se ejecuta cuando se cargar la pagina por primera vez.
    // [city, clima, ...] => cuando cambia cualquier state, se ejecuta el useEffect
    useEffect(()=>{
        document.title = `Clima | ${cityClima?.location.name}`
    } , [cityClima]);
    
    async function cargarInfo(city="Bogota"){
        try {
            const solicitud = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`);
            const infoClimaJson = await solicitud.json()
            
            if("error" in infoClimaJson){
                alert("Error");
            }
            else{
                setCityClima(infoClimaJson);
            }

        } catch (error) {
            alert("No responde la api");
        }
    }

    function manejarCambioCiudad(city){
        //setCityClima(null);
        cargarInfo(city);
    };


        return(
        <div className="contenedor-principal shadow-lg bg-secondary text-light p-3 rounded">
            <ClimaForm cambioCiudad={manejarCambioCiudad}/>
            {
                cityClima? <ClimaInformacion cityClimaInfo={cityClima}/> : <Loading/>
            }
        </div>
    );
}


export{
    Clima
};