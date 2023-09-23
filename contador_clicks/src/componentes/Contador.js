import React from "react";
import "../hojas_de_estilo/Contador.css"


function Contador({ numClicks }){
  return(
    <div className="contador">
      {numClicks}
    </div>
  );
}

export{
  Contador
};

