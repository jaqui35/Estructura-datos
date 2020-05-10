console.log('Funcion sin parametros');

function uno(){
    let a = 5;
    let b = 6;
    let suma = a+b;
    console.log(`La suma es: ${suma}`);
}
uno();


Console.log('Funcion sin parametros y con retorno');
function dos(){
    let a = 5, b = 6, suma = a+b;
    return suma
}
console.log(`\n ${dos()} \n\n` );


console.log('Funcion con parametros y sin retorno');
function tres(a,b){
    suma = a+b;
    console.log(suma);
}
tres(4,6);

// Ejemplos de parametros predefinidos en caso de no recibir valores
console.log(`\n Ejemplo de funciones con paraemtros predefinidos\n\n`);
function saludar(nombre ="juan", edad = 8){
    console.log(`Hola mi nombre es : ${nombre} y su edad es : ${edad}`);
}
saludar();
saludar("pedro", 25);


// Funciones expresadas
console.log(`\nFunciones expresadas\n\n`);
let sumar = function(a,b){
    return suma = a+b;
}

console.log(sumar(15,50));

let x = 3;
let y = 4;
let sumas = (a,b)=>suma=a+b;

console.log(sumas(33,10));



// Ejercicio en clase
function nueva(a,b){
    suma = a + b;
    return suma;
}

console.log(nueva(3,5));