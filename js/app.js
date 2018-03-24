const data = {
       headerTitulo: 'Burger Queen',
       headerDescripcion: 'Desayuno',
       mainSectionTitulo: 'Comida',
       asideDesayuno:'Desayuno',
       desayuno: [
         { producto: 'Cafe Americano', precio: '$ 5', button: 'Agregar'},
         { producto: 'Cafe conleche', precio: '$ 7', button: 'Agregar'},
         { producto: 'Sandwich jamon con queso', precio: '$ 10', button: 'Agregar'},
         { producto: 'Cafe conleche', precio: '$ 7', button: 'Agregar'}
       ],
       asideComidas: 'Hamburguesa',
       comida: [
         { producto: 'Res', precio: '$ 10', precio: '$ 15', button: 'Agregar'},
         { producto: 'Pollo', precio: '$ 10', precio: '$ 15', button: 'Agregar'},
         { producto: 'Vegetariana', precio: '$ 10', precio: '$ 15', button: 'Agregar'}
       ],
       asideExtras: 'Ingredientes extras',
       extras: [
         { producto: 'Huevo', precio: '$ 5', button: 'Agregar'},
         { producto: 'Queso', precio: '$ 5', button: 'Agregar'},
       ],
       asideComplementos: 'Complementos',
       complementos: [
         { producto: 'Papas fritas', precio: '$ 5', button: 'Agregar'},
         { producto: 'Onion Rings	', precio: '$ 5', button: 'Agregar'},
       ],
       asideBebidas: 'Bebidas',
       bebidas: [
         { producto: 'Agua', precio: '$ 5',precio: '$ 8', button: 'Agregar'},
         { producto: 'Gaseosa', precio: '$ 7', precio: '$ 10', button: 'Agregar'},
       ],
     };
 ////////////////////////////////////

 function App(props) {

  return (
  <div>
    <header>
      <h1>{props.headerTitulo}</h1>
    </header>
    <div>
      <p>{props.mainSectionTitulo}</p>
    </div>
  </div>
  );
 }


ReactDOM.render(
  <App
    headerTitulo={data.headerTitulo}
    headerDescripcion={data.headerDescripcion}
    mainSectionTitulo={data.mainSectionTitulo}
    asideDesayuno={data.asideDesayuno}
  />,
  document.getElementById("react-container")
);
