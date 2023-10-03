const contenedor=document.querySelector(".container");

//Creamos un nuevo elemento
const nuevo_div = document.createElement("div");

//Creamos el nodo texto
let nodo_texto = document.createTextNode("Este es el nodo texto");

//Añadimos el nodo del texto dentro del div
nuevo_div.appendChild(nodo_texto);
console.log(nuevo_div);

const encabezado=document.createElement("h1");
nodo_texto= document.createTextNode("Titulo de la pagina");

encabezado.appendChild(nodo_texto);
console.log(encabezado);

contenedor.appendChild(encabezado);
contenedor.appendChild(nuevo_div);

function addElement() {
    let newDiv=document.createElement("div");
    let newContent=document.createTextNode("Hola, que tal");

    newDiv.appendChild(newContent);
    let currentDive=document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDive)

}