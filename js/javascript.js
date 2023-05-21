
const helado = 300; 
let topping= "kinder"; 
let precio= 25; 
let precioFinal; 

if (topping == "Oreo" ) {
  topping = "Oreo";
  precio = 10;
} 
else if (topping == "Kitkat") {
  topping = "KitKat";
  precio = 15;
} 
else if (topping== "Kinder") {
  topping = "Kinder";
  precio = 25;
} 
else {
  topping = ("Ninguno");
  precio = 0;
  console.log("No tenemos este topping");
}


precioFinal = helado + precio;

console.log ("helado $ " + precioFinal);

//No tengo los resultados esperados enla consola//
//la otra actividad no la entiendo//




