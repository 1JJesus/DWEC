const cadena = `Esto es una cadena`;
const objetocadena = new String (`Esto es una cadena`);

console.log(typeof cadena);
console.log(typeof objetocadena);

console.log(cadena===objetocadena); //falso porque tambien compara el tipo
console.log(cadena==objetocadena); // verdadero porque solo compara valor


console.log(cadena.toUpperCase());
console.log(objetocadena.toUpperCase());
