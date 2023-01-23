//--------------------------------------Función flecha---------------------------------------------//
//Función flecha : es una alternativa compacta a una expresión de función tradicional, 
//Es limitada y no se puede utilizar en todas las situaciones.

//------------------------descomposición de una "función tradicional" hasta la "función flecha"------//

//Función tradicional 

// Función tradicional
function (b){
    return b + 100;
  };

  // // 1. Elimina la palabra "function" y coloca la flecha entre el argumento y el corchete de apertura.
(a) => {
    return a + 100;
  }
  
  // 2. Quita los corchetes del cuerpo y la palabra "return" — el return está implícito.
  (a) => a + 100;
  
  // 3. Suprime los paréntesis de los parametros
  a => a + 100;

  //--------------------- De varios argumentos o ningun argumento ----------------------------------------//

  // Función tradicional
function (a, b){
    return a + b + 100;
  }
  
  // Función flecha
  (a, b) => a + b + 100;
  
  // Función tradicional (sin parametros)
  let a = 4;
  let b = 2;
  function (){
    return a + b + 100;
  }
  
  // Función flecha (sin parametros)
  let a = 4;
  let b = 2;
  () => a + b + 100;

  //-------------------------------------------Cuando hay lineas adicionales--------------//

  // Función tradicional
function (a, b){
    let chuck = 42;
    return a + b + chuck;
  }
  
  // Función flecha
  (a, b) => {
    let chuck = 42;
    return a + b + chuck;
  }

  //-----------------------------------------Con nombre---------------------------------------------//

//tratamos las expresiones de flecha como variables

// Función tradicional
function bob (a){
  return a + 100;
}

// Función flecha
let bob = a => a + 100;

//Ejemplo de una array con función flecha

const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  console.log(materials.map(material => material.length));
//Primero llamamamos a la array que se llama materials. entonces le pasamos el metodo map (que te hace una 
//array nueva, respetando la de origen), en este caso esta creando una nueva array entre los parentesis va la
//función que se llama material y que recorre cada  elemento de la array y te cuenta los caracteres 
//los elementos de la array .
  // Expected output: Array [8, 6, 7, 9]

  function material (material){
    return material.length
  }

  material => material.lenght