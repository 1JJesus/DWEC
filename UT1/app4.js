/*Operaciones con cadenas de texto*/
//Concatenar texto
let nombre="Pepe";
let apellido="Mosca";
let nombre_apellido=nombre+' '+apellido;
console.log(nombre_apellido);
//Template literals
let curso='VS2DAW';
nombre_apellido=`Hola ${nombre} ${apellido}`;//las`` sirven para respetar la estructura del texto
console.log(nombre_apellido)
let saludo =`Hola ${nombre} ${apellido}, bienvenido a tu peor pesadilla aqui en ${curso}`;
console.log(saludo);

//Lenght
console.log(nombre.length);

//.includes(subcadena)
console.log(saludo.includes("Pepe"))

//.slice(start, end)
console.log(saludo.slice(12,17));

//.replace
console.log(saludo.replace("Pepe","Pepo y los globos"))

//.trim elimina espacios en blanco al inicio y final
let cadenatrim="     hola      pepepepe      "
console.log(cadenatrim.trim())