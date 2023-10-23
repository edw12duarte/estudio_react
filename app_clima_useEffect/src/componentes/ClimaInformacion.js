import React from "react";


export default function ClimaInformacion({ cityClimaInfo }){

    //el simbolo "?" es para decir "opcional", si el llamado al endpoint
    //fue exitoso, se usa la variable, sino NO se va usar la variable
    let ruta_img_clima = cityClimaInfo?.current.condition.icon ;

    return(
        <div>
            <div className="contenedor-info text-center d-flex justify-content-between">
                <img className="img-fluid mx-3" src={ruta_img_clima} alt="icon_clima"  />
                <div className="mx-3">
                    <h3>{cityClimaInfo?.location.country}</h3>
                    <h3>{cityClimaInfo?.location.name}</h3>
                </div>
                <div className="mx-3">
                    <h3>{cityClimaInfo?.current.condition.text}</h3>
                    <h3>{cityClimaInfo?.current.temp_c}°</h3>
                </div>
            </div>
            <iframe 
                title="mapa"
                src={`https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d508400.8779515565!2d${cityClimaInfo?.location.lon}!3d${cityClimaInfo?.location.lat}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1695788851530!5m2!1ses!2sco`}              
                width="100%" 
                height="450" 
                style={{border:"0"}}
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    );
}