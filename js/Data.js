const data = {
    Desayuno : [
        {alimento: "Café americano", precio: 5},
        {alimento: "Café con leche", precio: 7},
        {alimento: "Sandwich de jamón y queso", precio: 10},
        {alimento: "Jugo natural", precio: 7}
    ],
    Comida : {
        Hamburguesas : [
            {proteina: "Pollo", precioSencilla: 10, precioDoble: 15},
            {proteina: "Res", precioSencilla: 10, precioDoble: 15},
            {proteina: "Vegetariana", precioSencilla: 10, precioDoble: 15}
        ],
        Acompañamientos : [
            {alimento: "Papas", precio: 5},
            {alimento: "Onion Rings", precio: 5}
        ],
        Bebidas : [
            {alimento: "Agua", precio: 5},
            {alimento: "Gaseosa", precio: 7}
        ]
    }
}
console.log("desayuno",data.Desayuno);




  export default data;