//////////////////////////////////////////// BUCLES E INTERACIONES///////////////////////////////////////////////////////

//-----------------------------------------ForEach--------------------------------------------------------------//
// forEach() es un método de los arrays de JavaScript que se utiliza para iterar sobre 
// cada elemento del array y ejecutar una función específica en cada elemento. Es muy útil
//  cuando quieres aplicar una misma operación a todos los elementos del array, 
// como imprimirlos en consola o sumarlos a una variable. Es muy sencillo de usar y es muy legible.

var frutas = ["manzana", "pera", "plátano", "banana", "kiwi"];

frutas.forEach(function(fruta) {
    console.log(fruta);
});

//--------------------------------------------For-------------------------------------------------------------//

//for : es un bucle tradicional de programación que se utiliza para iterar sobre un conjunto de datos,
//  como un array. Se utiliza para recorrer un array, se especifica la longitud del array en el bucle 
//  y se accede a cada elemento del array mediante un índice. Es muy útil para realizar 
// operaciones complejas con los elementos del array, como buscar un elemento específico o calcular un promedio.

var frutas = ["manzana", "pera", "plátano", "banana", "kiwi"];
for (var i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

//---------------------------------------------While-----------------------------------------------------------//

// While :  es un bucle que se utiliza para iterar mientras se cumpla una condición. 
// Se utiliza cuando no sabes cuántas veces se debe iterar, o cuando quieres continuar iterando 
// hasta que se cumpla una condición. Es útil para realizar operaciones complejas o buscar
//  un elemento específico en un array, pero es menos legible que el bucle forEach.

var frutas = ["manzana", "pera", "plátano", "banana", "kiwi"];

var j = 0;
while (j < frutas.length) {
    console.log(frutas[j]);
    j++;
    
}
//Si se coloca el console.log fuera del bucle, se ejecutaría solo una vez, 
//después de que el bucle haya terminado de iterar,
// y sólo imprimiría el último valor del elemento del array correspondiente al índice j.


// para usar el console.log fuera tienes que meter un return.