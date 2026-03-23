// TRABAJO DEL ALUMNO A
console.log("--- Gestión de Alumno A ---");
let flota = ["Madrid", "Valencia", "Sevilla"];
console.log(flota);

// Alumno A - Priscila

flota.push("Barcelona"); 
console.log("Alumno A (push): Llega camión nuevo a Barcelona ->", flota);

flota.unshift("Bilbao");
console.log("Alumno A (unshift): Camión de urgencia en Bilbao ->", flota);

let camionSalida = flota.pop();
console.log(`Alumno A (pop): El camión de ${camionSalida} ha salido a ruta.`);s

console.log("--- Gestión Finalizada ---");
console.log("Estado final de la flota:", flota);