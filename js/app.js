import React from "react";
import ReactDOM from "react-dom";
import data from "./Data.js";
import Title from "./Title.js";
import Button from "./Button.js"
//import Desayuno from "./Desayuno.js"

function App(props) {
//<Desayuno />
  return (
  <div>
      <h1>{props.restaurante}</h1>
      <h3>{props.titleDesayuno}</h3>
      <div>
        {props.alimentosDesayuno.map(function(desayuno){
          return (<div>
          <p>{desayuno.alimento}</p>
          <p>{desayuno.precio}</p>
            <Button />
          </div>)
  })}
         </div>
       <h3>{props.titleComida}</h3>
      <h4>{props.subTitleHamburguer}</h4>
     <div>
        <p>{props.comida.Hamburguesas.map(function (hamburguer){
         return (<div>
           <p>{hamburguer.proteina}</p>
           <p>{hamburguer.precioSencilla}</p>
           <Button />
           <p>{hamburguer.precioDoble}</p>
           <Button />
         </div>
         )
       })}
       </p>
     </div>
     <h4>{props.subTitleComplementos}</h4>
     <div>
       <p>{props.comida.Complementos.map(function (complementos){
         return (<div>
           <p>{complementos.alimento}</p>
           <p>{complementos.precio}</p>
           <Button />
         </div>
         )
       })}
       </p>
     </div>
      <h4>{props.subTitleBebidas}</h4>
      <div>
        <p>{props.comida.Bebidas.map(function (bebidas) {
          return (<div>
            <p>{bebidas.alimento}</p>
            <p>{bebidas.precio}</p>
            <Button />
          </div>
          )
        })}
        </p>
      </div>
      <h4>{props.subTitleExtras}</h4>
      <div>
        <p>{props.comida.Extras.map(function (extras) {
          return (<div>
            <p>{extras.alimento}</p>
            <p>{extras.precio}</p>
            <Button />
          </div>
          )
        })}
        </p>
      </div>
   </div>
  )
}


ReactDOM.render(
  <App
    restaurante={data.nameRestaurant}
    titleDesayuno={data.Titles[0]}
    titleComida={data.Titles[1]}
    alimentosDesayuno={data.Desayuno}
    comida={data.Comida}
    subTitleHamburguer={data.Subtitles[0]}
    subTitleComplementos={data.Subtitles[1]}
    subTitleBebidas={data.Subtitles[2]}
    subTitleExtras={data.Subtitles[3]}
  />,
  document.getElementById("container-react")
);
