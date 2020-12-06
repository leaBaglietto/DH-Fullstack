// Los STRINGS para JS no son mas que un ARRAY de caracteres. Para accerder a un indice del string lo hacemos con []
// ej: let nombre = 'Fran';
//  nombre [2];

//-----------------------------------------------------------------------------------

//.LENGTH te cuenta los indices dentro del string.
let miSerie = 'Mad Men';
// console.log (miSerie.length); 

let arrayName = ['Bort', 'Lisa', 'Maggie'];
// console.log (arrayName.length, arrayName[0].length); 

//-----------------------------------------------------------------------------------

//indexOf(): Busca, en el string, el string que recibe como parámetro y te devuelve la cantidad de indices dentro.

//ejemplo
let saludo = '¡Hola! Estamos programando';

//console.log (saludo.indexOf('Hola'))
//console.log (saludo.indexOf('jebus'))
//console.log (saludo.indexOf('E') + saludo.indexOf('t'))

// ------------------------------------------------------------------------------

// .SLICE() : corta el String donde se le indica (recibe dos parametros x, y) y devuelve el pedazo cortado.

let frase = 'Breaking Bad Rules!';

//console.log (frase.slice (0,4));
//console.log (frase.slice (-10,-4));

// -------------------------------------------------------------------------------

// .TRIM() : Elimina espacios del principio y final de un string. No recibe parametros ni elimina expacios intermedios. 

let nombre = ' Homero Simpson ';
console.log (nombre.trim())

// -------------------------------------------------------------------------------

// .SPLIT) : divide un string en partes, asignas como parametro un (' ') y te devuelve un array con los indices del string. 

let stringXArray = "hola esto es un array que sali de un string"
// console.log (stringXArray.split(' '))

// -------------------------------------------------------------------------------

// .replace() : Reemplaza una parte por otra, recibe 2 parametros, el que buscamos y el que vamos a reemplazar. 

let replace = 'Aguante Phyton!';
//console.log (replace.replace('Phyton', 'JS'));
//console.log (replace.replace('Phyt', 'JS'))

// -------------------------------------------------------------------------------

// EJERCITACION

// Debemos crear una función llamada dominio que recibirá un string como "digitalhouse.com.ar" y su función será retornar: "http://www.digitalhouse.com.ar".

function dominio (a) {
    return  'http://' + a;
}

console.log (dominio ("digitalhouse.com.ar"))

// ----------------------------------------------------------------------------------

//Lo primero que necesitamos es declarar una variable llamada texto, asignándole como valor un texto (string), el que queramos. Luego, utilizando la propiedad length, tendremos que imprimir en consola el total de caracteres que contiene la frase.

let texto = 'Hola estoy practicando';
console.log (texto.length, texto.replace('practicando', 'mirando TV'))

//-----------------------------------------------------------------------------------

/* Nuestra misión, ahora, es crear una función llamada reemplazoFastFast que va a recibir los siguientes tres parámetros:

1. Un texto.

2. La palabra que vamos a buscar para reemplazar.

3. La palabra que vamos a usar para reemplazar.

La función deberá devolver el texto con la palabra reemplazada. */

function reemplazoFastFast (frase, buscar, reemplazar) {
  let textoABuscar = frase;
  let palabraBuscada = buscar;
  let resultado = textoABuscar.replace (buscar, reemplazar)
  return resultado

}
let ejercicio = reemplazoFastFast('Hola soy Leandro', 'Leandro', 'Belen')

console.log (ejercicio);

// ----------------------------------------------------------------------------

/* ¿Están hablando de mí?
Para el siguiente ejercicio vamos a suponer que tenemos un texto que copiamos y queremos saber si el texto menciona una palabra en particular.

1. Para lograrlo, tendremos que crear una función llamada menciona,

2. que recibirá dos parámetros: un texto —que es donde vamos a buscar— y una palabra —que es la que vamos a averiguar si se menciona en el texto—.

3. La misma función retorna true en el caso de encontrar la palabra.


Ejemplo: Menciona('Existen muchos lenguajes de programación y JavaScript es uno de ellos','programación'); // true */

function menciona (frase1, palabra1) {
  
}
