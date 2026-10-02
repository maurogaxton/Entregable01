let nombre = prompt("Escribe tu nombre")
console.log(nombre)
let apellido = prompt("Escribe tu apellido")
console.log(apellido)
let anioNacimiento = parseInt(prompt("Escribe el año de tu nacimiento"))
console.log(anioNacimiento)
const ANIO = 2026
let edad = ANIO - anioNacimiento
alert("Hola " + nombre + " " + apellido + ", tienes " + edad + " primaveras.")