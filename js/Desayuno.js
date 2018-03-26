import React from "react";
import ReactDOM from "react-dom";
import data from "./Data.js"

export default function Desayuno (props) {
    return (
  <div>
      <h1>{props.restaurante}</h1>
      <h3>{props.titleDesayuno}</h3>
      <div>
        {props.alimentosDesayuno.map(function(desayuno){
          return (<div>
          <p>{desayuno.alimento}</p>
          <p>{desayuno.precio}</p>
          </div>)
  })}
         </div>
       <h3>{props.titleComida}</h3>
     <div>
       <p>{props.comida.Hamburguesas[0].proteina}</p>
     </div>
   </div>
  )
};

ReactDOM.render(
    <Desayuno
        restaurante={data.nameRestaurant}
        titleDesayuno={data.Titles[0]}
        titleComida={data.Titles[1]}
        alimentosDesayuno={data.Desayuno}
        comida={data.Comida}
    />,
    document.getElementById("container-react")
);
