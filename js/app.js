import React from "react";
import ReactDOM from "react-dom";
import data from "./Data.js"

 function App(props) {
  console.log("props",props);
  return (
  <div>
    <header>
      <p>{props.desayuno[0].alimento}</p>
    </header>
    <div>
      <p>{props.comida.Hamburguesas[0].proteina}</p>
    </div>
  </div>
  );
  
 }


ReactDOM.render(
  <App
    desayuno={data.Desayuno}
    comida={data.Comida}
    //headerDescripcion={data.headerDescripcion}
    //mainSectionTitulo={data.mainSectionTitulo}
    //asideDesayuno={data.asideDesayuno}
  />,
  document.getElementById("container-react")
);
