const Arreglo1 = [];
let Arreglo2 = [1,true, 'hola mundo',['A', 'B', 'C',[1,2,3,4]]];

// Arreglo vacio
console.log(Arreglo1)

// Arreglo con valores
console.log(Arreglo2)

// Mostrando el valor de cada indice
console.log(Arreglo2[0]) 
// 1
console.log(Arreglo2[1])
// true
console.log(Arreglo2[2])
// hola mundo
console.log(Arreglo2[3])
// ['A', 'B', 'C', [1,2,3,4]]

// Mostrando los valores de los arreglos anidados
console.log(`Obtenemos el valor de Arreglo2[3][0] ${Arreglo2[3][0]}`)
console.log(`Obtenemos el valor de Arreglo2[3][1] ${Arreglo2[3][1]}`)
console.log(`Obtenemos el valor de Arreglo2[3][2] ${Arreglo2[3][2]}`)

console.log(`Obtenemos el valor de Arreglo2[3][3][0] ${Arreglo2[3][0][0]}`)
console.log(`Obtenemos el valor de Arreglo2[3][3][1] ${Arreglo2[3][0][1]}`)
console.log(`Obtenemos el valor de Arreglo2[3][3][2] ${Arreglo2[3][0][2]}`)
console.log(`Obtenemos el valor de Arreglo2[3][3][3] ${Arreglo2[3][0][3]}`)

// Arreglo ES6
const Arreglo3= Array.of(1,2,3,4,"a");
console.log(`Valores de Arreglo3 ${Arreglo3}`)

// Arreglo forma en desuso
const Arreglo4 = new Array()
console.log(`Soy el Arreglo4`)
console.log(`Arreglo4`)