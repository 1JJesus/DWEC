let contenido = document.querySelector(".cabezera.titulo");
console.log(contenido);

//document.querySelector(".Contenido").remove(); //borrar clase contenido
let parrafos = document.querySelectorAll("p"); //Seleccionar todos los parrafos
console.log(parrafos);
//let matches = document.queryselectorAll("div.highlighted>p")// seleccionar todos los parrafos cuyo padre sea de clase highlighted
//let matches = document.queryselectorAll("div.nota,div.alerta")// buscar todas las clase nota y todos clase alerta
let localizacion = document.location;
console.log(localizacion);
let titulo = document.title;
console.log(titulo);

let valor1 = document.querySelector("#Pie").innerText;
console.log("1"+valor1)
let valor = document.querySelector("#Pie").innerHTML;
console.log("2"+valor)

let valor3 = document.querySelector("#miboton").value;
console.log("3"+valor3)
