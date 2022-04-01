
function invertirOrden(array) {
    // Invertir el orden de los elementos del array que recibe por parametro
    // Que los ultimos elementos, pasen a ser los primeros
    //
    // DETALLE: En caso de que el elemento contenga mas de 1 digito, el mismo NO debera ser devuelto
    // No vale usar el metodo "reverse"
    
    //Reccorrer el arreglo , preguntar por la condicion , y ordenar el nuevo arreglo
    let nuevoArreglo = [];

    for( let i = 0 ; i < array.length ; i++ ){
        
        if( (array[i] < 10 && array[i] > 0) || array[i].length < 2 ){
            nuevoArreglo.unshift(array[i]);
        }
    }
   return nuevoArreglo;
};

function numeroEnComun(array1, array2) {
    // Entre los dos array's que recibe la funcion por parametro
    // Buscar y retornar el valor en comun entre ellos
   
    let valor = 0;
    let minimoArray1 = array1;
    let minimoArray2 = array2;
    
    let min1=Math.min.apply(null, minimoArray1);
    let min2=Math.min.apply(null, minimoArray2);
   
    for(let i = 0 ; i < array1.length ; i++){
        for(let j = 0 ; j < array2.length ; j++){
            if(array1[i] === array2[j]){
                 valor = array1[i];
                 return valor;
            }  
        }
    }
    if(min1 < min2 ) {
        return min1;
    } 
    if (min1 > min2 ){
        return min2;
    }
};

console.log(numeroEnComun([2, 3, 15], [1, 4, 15]));

function sumaDeArrays(array) {
    // El array recibido por parametro es un array multidimencional con array's que contienen elementos de tipo number
    // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
    // Sumando los elementos de cada array que contenga dos elementos, y devolviendo la suma del mismo
    // OJO: Si el elemento dentro del array que ingresa por prop, ya es de tipo number, deben devolverlo como tal dentro del array que retornan.

    let nuevoArray = [];
    let suma = 0;
    // array.forEach(e => {
    //     if(Array.isArray(e) && e.length === 2){
    //         let suma = e[0] + e[1];
    //         nuevoArray.push(suma);
    //     } else if(!isNaN(e)){
    //         nuevoArray.push(e);
    //     }
    // });

    for(let i = 0 ; i < array.length; i++){
        if(Array.isArray(array[i]) && array[i].length === 2){
                suma = array[i][0] + array[i][1]  ;
                nuevoArray.push(suma) ;
        }  
        if( !isNaN(array[i])){
            nuevoArray.push(array[i]);
        }
        
        
    }

   return nuevoArray;
};

console.log(sumaDeArrays([[1, 3], [10, 20], [4, 5], 2]));

function mismoValorMismosElementos(numero, divisor) {
    // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
    // Todos los elementos deben tener el mismo valor
    // OJO: Si el resultado de la division no es un entero, deben devolver false

    let division = numero / divisor;
    let nuevoArreglo = [];
    if(Number.isInteger(division)){
        for(let i = 0 ; i < divisor; i++){
            nuevoArreglo.push(division);
        }
    } else {
        return false;
    }

    return nuevoArreglo;
};

function elementoMenorYMayor(array) {
    // El Array recibido por props es un array que contienen numeros
    // Tenes que retornar un array
    // Solamente con el elemento menor y mayor del array recibido
   
    let nuevoArreglo = [];
    var min=Math.min.apply(null, array);
    var max=Math.max.apply(null, array);
    nuevoArreglo.push(min);
    nuevoArreglo.push(max);
    return nuevoArreglo;
};

console.log(elementoMenorYMayor([10, 15, 24]));

module.exports = {
    numeroEnComun,
    invertirOrden,
    elementoMenorYMayor,
    sumaDeArrays,
    mismoValorMismosElementos
};