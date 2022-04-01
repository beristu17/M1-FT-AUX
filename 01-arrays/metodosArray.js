//array.entries --> Retorna un nuevo objeto que contiene los pares clave  y valor para cada indice de la matriz.

let arr = [1,2,3,4];

let iterator = arr.entries();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);


for(let e of iterator){
    console.log(e);
}



//Array.every() --> DEtermina si todos los elementos en el array satisfacen una condicion. --> Devuelve true o false si se cumple la condicion.

let ejemploEvery = (condicion) => condicion < 40;

console.log(arr.every(ejemploEvery))

//Array.sort()