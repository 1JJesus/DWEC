let funcion=function(parametro){ //funciones anonimas
    return parametro+":)";
}

console.log(funcion("Hola")) // llamar la funcion

//callback funciones de funciones

function getIdentificacion(numero,letra,callback){
    let identificacion=callback(numero,letra);
    return identificacion;
}

let formatoNIF=function(numero,letra){
    return numero+"-"+letra;
}

let formatoNIE=function(numero,letra){
    return letra+"-"+numero;
}

console.log(getIdentificacion("123456789","XXX",formatoNIE))
console.log(getIdentificacion("123456789","XXX",formatoNIF))

//Forma mas usada de callback

function getIdentificacion_2(numero,letra,callback){
    let identificacion=callback(numero,letra);
    return identificacion;
}

getIdentificacion_2("123456789","forma mas usada de callback",function(numero,letra){
                                    console.log(numero+"-"+letra);
                                    return numero+"-"+letra;
                                    }

);

//Funciones autoinvocadas

(function(numero,letra){
    console.log(numero+"-"+letra);
})("6666666","autoinvocado");

//!(function()) la admiracion sirve para indicar que es una funcion autoinvocada