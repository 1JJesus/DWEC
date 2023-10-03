//Estructuras de control
//Condicional
const flight = 100;
const hotel = 50;
const tour = 30;
const total = flight+hotel+tour;
const budget = 180;

if (budget > total) {
    console.log('Si, me voy de viaje.');
} else if (budget===total) {
    console.log('Si, puedo ir pero estoy a 0.');
} else {
    console.log('No puedo ir soy pobre.');
}

/*Operadores ternarios */
const result = budget >= total ? console.log('Si me voy') : console.log('No me voy');
const newresult = budget > total ? 100 : 200;
console.log(newresult);

//Ejercicio
const NUM = "10" + 3;

!isNaN(NUM) ? console.log(NUM%2) : console.log('no es un numero');

/*if (isNaN(NUM)) {
    const result1



} else {
    console.log('no es un numero')
}
console.log(isNaN(NUM))*/

//ejercicio 2
const code = "En un lugar de La Mancha, de cuyo nombre";
//Si la cadena es mas larga de 27, caracteres, debo cortarla
//En caso de ser menor, debo añadir caracteres cualquiera
//Realizar todas las comprobaciones posibles, para cumplir con las especificaciones