// Melina B
console.log("Alumno B");

const rutasEspeciales = ["Bilbao", "Zaragoza", "Cádiz", "Barcelona", "Málaga"];

// eliminar la ciudad en la posición 2
rutasEspeciales.splice(2, 1);
console.log("Después de eliminar la posición 2:", rutasEspeciales);

// invertir el orden de las rutas
rutasEspeciales.reverse();
console.log("Rutas al revés:", rutasEspeciales);

// converti "LOGISTICA" en arreglo, invertir y unir
const palabra = "LOGISTICA";

const arregloPalabra = palabra.split(""); // convierte en arreglo
const invertido = arregloPalabra.reverse(); // invierte
const resultado = invertido.join(""); // une 

console.log("Palabra invertida:", resultado);