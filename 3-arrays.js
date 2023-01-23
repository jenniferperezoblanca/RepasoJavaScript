///////////////////////////////////////////  Arrays ////////////////////////////////////////////////////////////

//array en JavaScript puede almacenar diferentes tipos de datos y siempre va entre corchetes []

var miArray = [1, "Hola", {nombre: "Juan"}];
// tiene tres elementos, el primero es un número, el segundo es una cadena y el tercero es un objeto.
// Se recomienda una misma array con el mismo tipo de datos para facilitar las tareas.

//-----------------------------------Diferentes tipos de arrays (programacion funcional)-------------------------------//

//-------------------------------------------Split----------------------------------------//

//Split : si tienes una cadena que contiene varias palabras separadas por espacios, 
//puedes utilizar el espacio como separador para dividir la cadena en un array de palabras individuales: 

var cadena = "Hola mundo";
var palabras = cadena.split(" ");
console.log(palabras); // ["Hola", "mundo"]

var cadena = "Hola,mundo";
var palabras = cadena.split(",");
console.log(palabras); // ["Hola", "mundo"]

//------------------------------------------Push----------------------------------------------//

//Push : Agrega uno o más elementos al final del array

var miArray = [1, 2, 3];
console.log(miArray); // [1, 2, 3]

miArray.push(4);
console.log(miArray); // [1, 2, 3, 4]

miArray.push(5, 6);
console.log(miArray); // [1, 2, 3, 4, 5, 6]

//-------------------------------------------Pop--------------------------------------------------//
//pop: Elimina el último elemento del array .

var miArray = [1, 2, 3];
var ultimo = miArray.pop();
console.log(miArray); // [1, 2]
//-------------------------------------------Shift-------------------------------------------------//
// shift(): Elimina el primer elemento del array .

var miArray = [1, 2, 3];
var ultimo = miArray.shift();
console.log(miArray); // [2, 3]
//-----------------------------------------------Unshift-------------------------------------------------//
// unshift(): Agrega uno o más elementos al principio del array.

var miArray = [2, 3];
var nuevaLongitud = miArray.unshift(1);
console.log(miArray); // [1, 2, 3]

//-------------------------------------------------slice---------------------------------------------------//
// slice(): Devuelve una copia de una porción del array.

var miArray = [1, 2, 3, 4, 5];
var nuevoArray = miArray.slice(2);
console.log(nuevoArray); // [3, 4, 5] , te coge a partir de la posición 2 ,que seria el tercer elmento.
//la array original no se modificara

var miArrays = [1, 2, 3, 4, 5];
var nueveArray = miArrays.slice(1, 4); //el indice es 1  el final es 4 
console.log(nueveArray); // [2, 3,4]

// te coge a partir de la posición 1 que seria el elemento 2 , y la posicion 4 que es el final y javascript dice 
//el final es excluyente , por lo tanto es el ultimo , que a partir de esa posicion no cuenta más .

nuevoArray = miArray.slice(-4);
console.log(nuevoArray); // [2,3, 4, 5]
console.log(miArray); // [1, 2, 3, 4, 5]
// al poner negativo que empieza a coger los ultimos numeros de la array.

//--------------------------------------------Concat-----------------------------------------
// concat(): Concatena dos o más arrays y devuelve un nuevo array.
var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
var nuevoArray = array1.concat(array2);
console.log(nuevoArray); // [1, 2, 3, 4, 5, 6]
//---------------------------------------------foreach----------------------------------------------//
// forEach(): Ejecuta una función especificada para cada elemento del array.
var frutas = ["manzana", "pera", "plátano","uva","naranja"];
frutas.forEach(function(fruta) {
   // console.log(fruta);
    frutas.length++;
});

console.log(frutas);
//-------------------------------------------------map----------------------------------------------------//
// map(): Devuelve un nuevo array con los resultados de la función especificada aplicada a cada elemento del array.
var numeros = [1, 2, 3, 4, 5];


var numerosDuplicados = numeros.map(function(numero) {
    return numero * 2;
});
console.log("Array modificado: ", numerosDuplicados);
//------------------------------------------------Filter-------------------------------------------------------//
// filter(): Devuelve un nuevo array con los elementos que pasan la prueba especificada en una función. 
//filtrando solo los elementos que cumplen con la condición especificada en la función

let ganadores = ["Anna", "Beth", "Cara"];

let oro = ganadores.filter((ganador, indice) => indice == 0);
let plata = ganadores.filter((ganador, indice) => indice == 1);
let bronce = ganadores.filter((ganador, indice) => indice == 2);
console.log(oro)
console.log (plata)
console.log (bronce)
console.log("Oro ganador: "+oro+" "+"ganador de plata: "+plata+ " " +"ganador de bronce: "+bronce) //concatenacion
console.log(`Oro ganador: ${oro}, ganador de plata: ${plata}, ganador de bronce: ${bronce}`); //interpoblación













































