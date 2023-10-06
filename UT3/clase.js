/*class Persona{
    constructor (nombre, apellidos, anno){
        this._nombre = nombre
        this._apellido=apellidos
        this._year=anno
    }
    get annoNacimiento(){
        return this._year
    }
    
const p1=new Persona("Jose","Garcia","1999")
}*/

/*Crear array objetos que son:
    En persona añadir: estudios, poblacion
    Los metodos para contener cada uno de los atributos

    hacer bucle con funcion flecha para obtener dos de los atributos
*/

class Persona {
    constructor(nombre, apellidos, anno, estudios, poblacion) {
      this._nombre = nombre;
      this._apellido = apellidos;
      this._year = anno;
      this._estudios = estudios;
      this._poblacion = poblacion;
    }
  
    get nombre() {
      return this._nombre;
    }
    get apellidos() {
      return this._apellido;
    }
    get annoNacimiento() {
      return this._year;
    }
    get estudios() {
      return this._estudios;
    }
    get poblacion() {
      return this._poblacion;
    }
  }
  
  const p1 = new Persona("Jose", "Garcia", "1999", "DAW", "Toledo");
  const p2 = new Persona("Ana", "Rama", "1959", "DAWN", "Murcia");
  
  // Crear un array para almacenar las instancias de Persona
  const personas = [];
  
  // Agregar las instancias de Persona al array
  personas.push(p1);
  personas.push(p2);
  
  const mostrarNEP = (lista) => {
    let contador = 0;
    lista.forEach((elemento) => {
      console.log(elemento.nombre); // Utilizamos los getters para obtener datos
      console.log(elemento.estudios); // Utilizamos los getters para obtener datos
      console.log(elemento.poblacion); // Utilizamos los getters para obtener datos
      contador++;
    });
    return contador;
  };
  mostrarNEP(personas) //llamamos al metodo y pasamos el objeto
    /*const personas = [p1, p2];
    const totalPersonas = Personas(personas);
    console.log(`Total de personas: ${totalPersonas}`);
    */

    /*
    
    */