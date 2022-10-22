/* Desafío: javaScript

Nombre de Desafío: ciclos_js

Instrucciones */

// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:

  if (x > y) {
    console.log(x + ` es mayor que `+ y );
  } else if(y > x){
    console.log(y + ` es mayor que `+ x);
  }else{
    console.log(x + ` y ` + y + ` son iguales `);
  }
}
obtenerMayor(12,18)


function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
 return edad >=18? `Allowed`:`Not allowed`;
}
console.log(mayoriaDeEdad(20));

  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.

if (status ==1) {
  console.log(`El usuario esta Online`);
} else if(status ==2){
console.log(`El usuario esta Away`);
}else{
  console.log(`El usuario esta Offline`);
}
}
conection(1);


function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  switch (idioma) {
    case `aleman`:
      console.log(`guten tag`);
      break;
    case `mandarin`:
      console.log(`Ni hao`);
      break;
    case `ingles`:
      console.log(`Hello!`);
      break;    

    default:
      console.log(`Undefined`);
      break;
  }
}
saludo(`ingles`);


function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.

switch (color) {
  case `blue`:
console.log(`This is BLUE`);
    break;
    case `red`:
  console.log(`This is RED`);
    break;
    case `green`:
  console.log(`This is GREEN`);
    break;
    case `orange`:
  console.log(`This is Orange`);
    break;

  default:
    console.log(`Color not found`);
    break;
}
}
colors(`orange`);


function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  return numero ==10  || numero ==5? `true`:`false`;
}
console.log(esDiezOCinco(10));


function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  return numero < 50 && numero > 20? `true`:`false`;
}
console.log(estaEnRango(48));


function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
return numero === Math.floor(numero);
}
console.log(esEntero(0.2));


function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  if (numero % 15 == 0) { return `fizzbuzz`}
  if (numero % 3 == 0) { return `fizz`}
  if (numero % 5 == 0) { return `buzz`}
}
console.log(fizzBuzz(5));


function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false.
if(num1==0 || num2 ==0 || num3==0){
  return `Error`

}else if(num1 < 0 || num2 < 0 || num3 < 0){
  return `hay negativos`

}else if (num1 > num2 && num1 > num3 && num1 > 0) {
  return `numero 1 es mayor y es positivo`

}else if(num3 > num1 && num3 > num2){
  num3 = num3+1
  return num3

}else{
  return `False`
}
}
console.log(operadoresLogicos(1,2,5));


function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  if (numero < 2) return false;
  if (numero ==2) return true;
  for (let i = 2; i < numero; i++){
    if(numero %i ==0)
    return false;
  }
  return true;
  }
  console.log(esPrimo(53));


function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
if (valor ==true) {
  return `soy verdadero`
}else if(valor == false){
  return `Soy falso`
}
}
console.log(esVerdadero(false));


function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //el metodo push añade uno o más elementos al final de un array 
  // y devuelve la nueva longitud del array.
  //Escribe tu código aquí:
var arr = [];

for (let i = 0; i < 11; i++) {
  arr.push(6 * i);
}
return arr;
}
console.log(tablaDelSeis());


function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  if (numero >99 && numero < 1000) {
    return true;
  }else{
    return false;
  }
}
console.log(tieneTresDigitos(215));


function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  
var a = numero;
var i = 0;
  do { 
    a = a+5;
    i++;
  } while (i<8);
  return a;
}
console.log(doWhile(5));