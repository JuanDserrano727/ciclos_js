/* // Operadores
// O. Aritmeticos

// suma -> a + b
console.log(5 + 2);
// resta -> a - b
console.log(5 - 2);
// multiplicacion -> a * b
console.log(5 * 2);
// division -> a / b
console.log(5 / 2);
// exponenciacion -> a ** b
console.log(5 ** 2);
// modulo -> a % b
console.log(5 % 2);

// O. de Asigancion
var a = 5,
  b = 7;

// asignacion
c = a + b;
console.log(c);

// resta y asignacion
c -= a; // c = c - a
console.log(c);

// multiplicacion y asignacion
c *= a; // c = c * a
console.log(c);

// division y asignacion
c /= a; // c = c / a
console.log(c);

// modulo y asignacion
c %= a; // c = c % a
console.log(c);

// exponenciacion y asignacion
c **= a; // c = c ** a
console.log(c);

// O. Unarios
// incremento
x = 3;
y = x++;
y = x++;
console.log(y);

// decremento
x = 3;
y = x--;
y = x--;
console.log(y);

// incremento previo
x = 3;
y = ++x;
console.log(y);

// decremento previo
x = 3;
y = --x;
console.log(y);

// resta unitaria
x = 3;
y = -x;
console.log(y);

// O. de comparacion
var a = 5,
  b = 7,
  c = "5";

// o. de igualdad
console.log(a == b);
console.log(a == c);

// o. de desigualdad
console.log(a != b);
console.log(a != c);

// operador mayor que
console.log(a > b);
console.log(a > c);

// operador mayor/igual que
console.log(a >= b);
console.log(a >= c);

// operador menor que
console.log(a < b);
console.log(a < c);

// operador menor/igual que
console.log(a <= b);
console.log(a <= c);

// operador de identidad
console.log(a === b);
console.log(a === c);

// operador de no identidad
console.log(a !== b);
console.log(a !== c);

// O. Lógicos
var a = "5",
  b = 5,
  c = false;

// And - &&

if (a === 5 && b === 7) {
  console.log("se cumplio");
}

if (a === 5 && b === 6) {
  console.log("se cumplio");
}

// Or - ||

if (a === 5 || b === 7) {
  console.log("se cumplio");
}

if (a === 5 || b === 6) {
  console.log("se cumplio");
}

// O. Unario Not - !
if (!c) {
  console.log("se cumplio con el true");
}

// O. ternario - a ? b : c
typeof(a) === "number" ? console.log("Si se cumple la condicion"): console.log("no se cumple la condicion")


// O. de tipos - typeof

console.log(typeof(c)) */

// This
//this es una referencia que se crea cuando una función es invocada, no declarada, y el valor de esa referencia depende al 100% del lugar en la que esa invocación se realice, llamado call-site. Ese lugar de llamada es la invocación en sí a la función. Es decir, el momento justo en que es llamada (no declarada, no referenciada) esa función.
// Vinculación (binding) -> La vinculación ayuda a asociar los identificadores (variables, nombres de funciones) con la palabra clave this para un contexto de ejecución.
// 1. Lexical Binding (Arrow Functios)
// 2. New Binding (Instanciar Objetos) - new
// 3. Explicit Binding (invocación Indirecta)
// 4. Implicit Binding (invocación de Método)
// 5. Default Binding (Invocación Directa)

// Default Binding (Invocación Directa) -> Esto se da por ejemplo en donde tenemos funciones normales, no arrow functions, en donde la invocamos directamente (llamados también como enlazamiento por invocación directa)

/* function hola(){
  console.log(this)
}

hola() */

// "use strict"

/* function hola(){
  console.log(this)
}

hola() */

// Implicit Binding (invocación de Método) -> Se produce cuando invocamos un metodo de un objeto

/* var obj = {
  nombre: "Jhoswe",
  nombre: "saul",
  saludar: function(){
    console.log("hola me llamo" + " " + this.nombre)
  }
}

obj.saludar() */

// 3. Explicit Binding (invocación Indirecta)
// -> Call
// var getName = function(){
//   console.log(this.nombre)
// }

// var usuario = {
//   nombre: 'Jhoswe',
//   apellido: 'Castro'
// }

// getName.call(usuario)
/* 
  var getName = function(pasatiempo1, pasatiempo2){
    console.log("A "+ this.nombre + ' le gusta ' + pasatiempo1 + ', ' + pasatiempo2)
  }

  var usuario = {
    nombre: 'Jhoswe',
    apellido: 'Castro'
  }

  var pasatiempo = ['Nadar', ' Codear']
  getName.call(usuario, pasatiempo[0], pasatiempo[1])

// -> apply
var getName = function(pasatiempo1, pasatiempo2){
  console.log("A "+ this.nombre + ' le gusta ' + pasatiempo1 + ', ' + pasatiempo2)
}

var usuario = {
  nombre: 'Jhoswe',
  apellido: 'Castro'
}

var pasatiempo = ['Nadar', ' Codear']
getName.apply(usuario, pasatiempo)

// -> bind
var getName = function(pasatiempo1, pasatiempo2){
  console.log("A "+ this.nombre + ' le gusta ' + pasatiempo1 + ', ' + pasatiempo2)
}

var usuario = {
  nombre: 'Jhoswe',
  apellido: 'Castro'
}

var pasatiempo = ['Nadar', ' Codear']
var nuevaFn = getName.bind(usuario, pasatiempo[0], pasatiempo[1])
nuevaFn()

var btn = {
  nombre : 'Jhoswe',
  saludar: function(){
    console.log("Hola mi nombre es " + this.nombre)
  }
}

var saludo = btn.saludar.bind(btn)
saludo() */

// 4. New Binding (instanciar Objetos)

/* function Persona(nombre, edad) {
  this.nombre = nombre;
  this.apellido = "Castro";
  this.lugar = "Cusco";
  this.edad = edad;
}

var jhoswe = new Persona("Jhoswe", 32);
var jersson = new Persona("Jersson", 25);
var gerald = new Persona("Gerald", 35);

console.log(jhoswe);
console.log(jersson);
console.log(gerald);

// 5. Lexical Binding (arrow function)
function saludar() {
  console.log("Hola mundo");
}

saludar();

var saludar2 = function () {
  console.log("Hola mundo 2");
};

saludar2();

var saludar3 = (nombre) => "Hola mundo 3 " + nombre;

console.log(saludar3("Jhoswe")); */

/* 'use strict'

var jhoswe = {
  nombre: "Jhoswe",
  twitter: "@jhosweg",
  saludar:function () {
    console.log(this.nombre);
    var siguemeTwitter =()=> {
      console.log("sigueme en twitter:" + this.twitter);
    };
    console.log("Hola me llamo" + this.nombre);
    siguemeTwitter()
  },
};

jhoswe.saludar() */

// Estructuras de Control
//Las estructuras de control es aquel mecanismo que nos permite controlar el flujo de nuestra programación. lo que vimos al momento se llama programación secuencial ya que el código va línea por línea, pero hay momentos en los cuales nosotros queremos evaluar una condición y en base a esa condición queremos que realice una acción

/* // Condicionales
// if
function prueba(nota) {
  if (nota > 10) return "Estas aprobado";
}

console.log(prueba(12));

// if else

function prueba(nota) {
  if (nota > 10) return "Estas aprobado";
  else return "Estas desaprobado";
}

console.log(prueba(10));

// O. Ternario

function prueba(nota) {
  return nota > 10 ? "Estas aprobado" : "Estas desaprobado";
}

console.log(prueba(12));

// if multiple

function prueba(nota) {
  if (nota >= 10) {
    return "Estas aprobado";
  } else if (nota > 6) {
    return "Estas desaprobado";
  } else {
    return "ya ni te molestes en venir";
  }
}

console.log(prueba(6));

// switch

var nota = 10

switch (nota) {
  case 10:
    calificacion = "Sobresaliente";
    break;
  case 9:
  case 8:
    calificacion = "Notable";
    break;
  case 7:
  case 6:
    calificacion = "Bien";
    break;
  case 5:
    calificacion = "Suficiente";
    break;
  case 4:
  case 3:
  case 2:
  case 1:
  case 0:
    calificacion = "Insuficiente";
    break;
  default:
    // Cualquier otro caso
    calificacion = "Nota errónea";
    break;
}

console.log("He obtenido un", calificacion); */

// Ciclos
// Condición: Al igual que en los if, en los bucles se va a evaluar una condición para saber si se debe repetir el bucle o finalizarlo. Generalmente, si la condición es verdadera, se repite. Si es falsa, se finaliza.
// - Iteración: Cada repetición de un bucle se denomina iteración. Por ejemplo, si un bucle repite una acción 10 veces, se dice que tiene 10 iteraciones.
//- Contador: Muchas veces, los bucles tienen una variable que se denomina contador, porque cuenta el número de repeticiones que ha hecho, para finalizar desde que llegue a un número concreto. Dicha variable hay que inicializarla (crearla y darle un valor) antes de comenzar el bucle.
// - Incremento: Cada vez que terminemos un bucle se suele realizar el incremento (o decremento) de una variable, generalmente la denominada variable contador.
// - Bucle infinito: Es lo que ocurre si en un bucle se nos olvida incrementar la variable contador o escribimos una condición que nunca se puede dar. El bucle se queda eternamente repitiéndose y el programa se queda «colgado».

// bucle while

/* var i = 0;

while (i < 100) {
  console.log("El valor de i es:", i);
  // i=i+1
  i++;
} */

// do ... while

/* var i = 20
do {
  console.log("El valor de i es:", i);
  i++  
} while (i<10); */

// for
/* for (var i = 0; i < 10; i++) {
  var a = function(){
    console.log(5)
  }
  a()
} */


//for in

/* var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

for (var pepito in obj) {
  console.log(pepito)
  console.log(obj[pepito])
} */


// console.log(obj.a)
// console.log(obj["a"])

//for of

var arr = [1,2,3,4,5,6,8,7,9]

for (var jaimito of arr) {
  console.log(jaimito + 1)
}

// console.log(arr[1])

/* var str = "Hola mundo"

for (const iterator of str) {
  console.log(iterator)
} */