//type of
const num = 20;
console.log("El tipo es: "+ typeof num);
//NaN
const variable = 4*"hola";
console.log(""+variable);
console.log("El tipo de variable es: "+variable);
//Infinity
const division = 4/0;
console.log(division);
console.log("El tipo es: "+typeof division);
//isNaN
const numberstring = "30";
const string = "20 años";
console.log(isNaN(variable));
console.log(isNaN(division));
console.log(isNaN("12"));
console.log(isNaN(12));
console.log(isNaN(numberstring));
console.log(isNaN(string));
console.log(isNaN(NaN));
//toString
const number = 100;
console.log(number);
console.log(number.toString());
console.log(typeof number);
console.log(typeof number.toString());
//tofixed
console.log(number.toFixed(2))
//Realizar script que calcule
//cuanto toca pagar a cada persona
//de una cena 102€ y asistieron 6 personas
const precio = 102;
const npersonas = 6;
const resultado = precio/npersonas;
console.log("El precio por cabeza es: "+resultado);
//funcion boolean devuelve verdadero cuando:
console.log(Boolean(1)); //1 o mas
console.log(Boolean("quiero irme"));//String
console.log(Boolean(3.14)); //Coma flotanate
console.log(Boolean(3<4)); //logica verdadera
console.log(Boolean("1"==1)); //logica verdadera
//funcion boolean devuelve falso cuando:
console.log(Boolean(0)); //0 o menor
console.log(Boolean(""));//String vacio
console.log(Boolean(NaN)); //No un numero
console.log(Boolean(3>4)); //logica falsa
console.log(Boolean("1"===1)); //logica falsa (mismo valor diferente tipo)
console.log(Boolean(undefined)); //no es definido