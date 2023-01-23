////////////////////////////// Operadores de Comparación //////////////////////////////////////////////
//------------------------------------------ "=="----------------------------------------------------//
// El operador "==" en JavaScript se conoce como el operador de igualdad. Este operador se utiliza para 
// comparar dos valores y determinar si son iguales. Si los valores son iguales, 
// el operador "==" devuelve "true", de lo contrario devuelve "false".

// Cuando se utiliza el operador "==", JavaScript realiza una conversión automática de los tipos de datos 
// si son diferentes antes de compararlos. Por ejemplo, si se compara un número con una cadena de números, 
// JavaScript convertirá automáticamente la cadena de números en un número antes de compararlo.

// ==compara el valor y el tipo de dato "Si es numero, texto etc)

let num1 = 5;
let num2 = "5";
var result = (num1 == num2);
console.log(result); 

//aqui da true porque son iguales de valor .

//--------------------------------------- ===-----------------------------------------------------
// El operador "===" en JavaScript se conoce como el operador de igualdad estricta. 
// Este operador se utiliza para comparar dos valores y determinar si son iguales tanto en valor 
// como en tipo de datos. Si los valores son iguales y del mismo tipo, el operador "===" devuelve "true", 
// de lo contrario devuelve "false".

// A diferencia del operador "==", el operador "===" no realiza una conversión automática 
// de los tipos de datos antes de compararlos. Por lo tanto, si los valores son de diferentes tipos, 
// el operador "===" devolverá "false" incluso si tienen el mismo valor.

let num5 = 5;
let num6 = "5";
var result = (num1 === num2);
console.log(result); 

//mismo ejemplo , pero resultado diferente ,da false porque no son iguales en valor pero , no en dato.
// === compara el valor y el tipo de dato "Si es numero, texto etc)


//-----------------------------operadores < (menor que )> (mayor que)-----------------------------

var x = 5;
var y = 10;
var result = (x < y);
console.log(result); 

//5 es menor que 10? si por lo tanto es true 

var x = 5;
var y = 10;
var result = (x > y);
console.log(result);

//5 es mayor que 10? no, por lo tanto es false 

//------------------------------------<= o >=------------------------------------------------------------------//
//<= es menor o igual .

var x = 5;
var y = 10;
var result = (x <= y);
console.log(result);

//5 es igual o menor a 10? si , por lo tanto da true.

var x = 5;
var y = 10;
var result = (x >= y);
console.log(result);

//es 5 mayor o igual a 10? no por lo tanto da false.

//------------------------------------------------- !== ----------------------------------------------------//
//!== significa , no es igual , Compara si el valor o el tipo de dos expresiones son diferentes.

var x = 5;
var y = "5";
var result = (x !== y);
console.log(result);

// Son diferentes 5 a "5" , si,entonces el resultado es true.

var x = 5;
var y = 5;
var result = (x !== y);
console.log(result);

//es diferente 5 a 5, el resultado es no, por lo tanto es false. 






/////////////////////////////// Operadores lógicos //////////////////////////////////////////////////
//------------------------------------------- && o and ---------------------------------------------//
// El signo "&&" en español es "AND" . Este operador se utiliza para evaluar si dos o más expresiones son verdaderas 
// al mismo tiempo. 
// Si ambas expresiones son verdaderas, el operador "&&" devuelve "true", de lo contrario devuelve "false".

//let num = 5;

var resultadoo = (5 < 0 && 5 < 10);
console.log(resultadoo); 
//da false porque una no se cumple . 

var resultado = (5 > 0 && 5 < 10);
console.log(resultado); 
// 5 es mayor que 0 ? es true y 5 es menor de 10? es true por lo tanto ambas se cumplen , 
// entonces el resultado es true
// da true porque ambas se cumplen al mismo tiempo.

let var1 = true;
let var2 = false;
let resulta = (var1 && var2);
console.log(resulta); 

//false

var animal = "perro";
var result = (animal === "perro" && animal === "gato");
console.log(result); 

//aqui da falso porque ambas no se cumplen

var animal = "perro";
var result = (animal === "perro" && animal === "perro");
console.log(result); 

//da true porque ambas se cumplen . 

//-------------------------------------|| o OR ------------------------------------------------//
// "||" se conoce en español como "OR" . Este operador se utiliza para evaluar si al menos una de dos o más 
// expresiones es verdadera. 
// Si al menos una de las expresiones es verdadera, el operador "||" devuelve "true", de lo contrario 
//devuelve "false".

var resultado = (5 > 0 || 5 < 10);
console.log(resultado); 
//aqui una ya se cumple por lo tanto es verdadera o true
var resultadoo = (5 < 0 || 5 < 10);
console.log(resultadoo); 
//vuelve a dar true porque 1 es verdadera .
var resultado = (5 < 0 || 5 > 10);
console.log(resultado); 
//aqui al ser las dos falsas  ,da falso

let var3 = true;
let var4 = false;
var resultado = (var3 || var4);
console.log(resultado); 

// aqui da true porque ya una expresion ya es verdadera.


//-------------------------------------   ! ----------------------------------------
// El operador "!" es conocido como el operador de negación lógica en JavaScript. 
// Este operador se utiliza para negar una expresión lógica, 
// es decir, para cambiar el valor de una expresión de verdadero a falso o de falso a verdadero.

let llueve=true
var result = !true

console.info(result)

//da falso porque el cambia el valor de true a false.

let number = -5;
var result = !(number >= 0);
console.log(result); // true

//aqui da verdadero porque te lo transforma a positivo , entonces 5 es mayor o igual a 0? si por lo tanto true.

