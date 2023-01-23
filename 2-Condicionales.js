/////////////////////////////////////////////// Condicionales ///////////////////////////////////////////////

//y un ejercicio de si es mayor de 18 puede conducir , si tiene 15 , no y si tiene 67 años retirada de carnet 
//ahora añadimos que si tienes mas de 45 años que te tienes que revisar la vista

 var edad = 45
 if (edad >=67) {
    console.log (" retirada del carnet")
 }
 else if (edad >= 46){
    console.log ("te tienes que revisar la vista")
 }
 else if (edad >=17) {
    console.log("puede conducir") 
 }
 else {
    console.log ("no puedes conducir")
 }

 var age= 17;

switch (true) { //El switch tiene una condición true para que siempre entre a evaluar los diferentes casos.
  case age >= 67:
    console.log("retirada del carnet");
    break;
  case age >= 46:
    console.log("te tienes que revisar la vista");
    break;
  case age >= 17:
    console.log("puede conducir");
    break;
  default:
    console.log("no puedes conducir");
}


