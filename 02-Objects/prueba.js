/*
* EJERCICIO 1
*
* Implementar de forma RECURSIVA el método Newton-Raphson. Este método es utilizado para aproximar
* la raiz cuadrada de un número entero positivo.
*
* Parametros:
*   count: cantidad de veces que se requiere iterar
*   x: valor entero positivo al que se le quiere calcular la raiz cuadrada
*
* Formula:
*   y = (valorAnterior + (x/valorAnterior))/2
*   valorAnterior(0) = x/2
* 
* Salida:
*   > -1 si no es invocado con un x positivo (Ejemplo: -4)
*   > -1 si no es invocado con un x entero   (Ejemplo: 4.3)
*   > -1 si no es invocado con un x positivo y entero (Ejemplo: -4.3)
*   > El valor obtenido luego de haber aplicado la formula count veces a x
* 
* Ejemplos:
*   x = 20 
*   count = 4 
*   valorAnterior(0) = 10 
*   y(1) = (10 + (20/10))/2 = 6

*   valorAnterior = 6
*   y(2) = (6 + (20/6))/2 = 4.666

*   valorAnterior = 4.666
*   y(3) = (4.666 + (20/4.666))/2 = 4.476

*   valorAnterior = 4.476
*   y(4) = (4.476+ (20/4.476))/2 = 4.472
*
*   x = 45
*   count = 4
*   valorAnterior(0) = 22.5
*   y(1) = (22.5 + (45/22.5))/2 = 12.25
*   valorAnterior = 12.25
*   y(2) = (12.25 + (45/12.25))/2 = 7.96
*   valorAnterior = 7.96
*   y(3) = (7.96 + (45/7.96))/2 = 6.80
*   valorAnterior = 6.80
*   y(4) = (6.80 + (45/6.80))/2 = 6.70
*
* */
// function newtonRaphson(x, count, y=0){

//     if(count < -2) return 0;
//     if(x < 0 || !Number.isInteger(x)) return -1;
//     if(0 === y){
//         y = x/2;
//     }
//     else {
//          y = (y + (x/y)) /2
//     }


//     console.log(y);

//  return newtonRaphson(x , count -1 , y)

// }
// console.log(newtonRaphson(20,4));




// var uniqueInOrder=function(iterable){

// let nuevoArray = [];
// for(let i = 0; i < iterable.length ; i++){
//      let minus = iterable.charAt(i).toLowerCase();
//      let mayus = iterable.charAt(i).toUpperCase();
    
//      console.log(minus);
//      console.log(mayus);
//     if(iterable.charAt(i)!== iterable.charAt(i + 1).toLowerCase()){
//         nuevoArray.push(iterable.charAt(i));
//     } else if(iterable.charAt(i) !== iterable.charAt(i + 1).toUpperCase()){
//         nuevoArray.push(iterable.charAt(i));
//     }
// }

// return nuevoArray;

// }

// console.log(uniqueInOrder('ABBCcAD'))

// function stepDown(stair,width,nuevoArreglo = []){

   
//     if(width === 0) return [];

//     if(stair < 0) return nuevoArreglo;

//     nuevoArreglo.unshift( stair);    
    
//     return stepDown(stair - width , width , nuevoArreglo);
   
// }


// console.log(stepDown(80,10));

// function expandedForm(num) {


//     let numeroCadena = num
//     numero = numeroCadena.toString();
//     console.log(numero);
//     console.log(numero.charAt(0))
    
   
//     let resultado;
//     for(let i =0 ; i < numero.length ; i++){
//         let mul = 1;
//         let num1 ;
//         mul = Math.pow(10,i);
//         let multiplo = mul * 10;
//         console.log(multiplo);
//         console.log(mul);

//         if(mul > 0){
//             num1 = parseInt(numero.charAt(i))
//             console.log(num1);
//             resultado = num1 * mul ;
//             console.log(resultado);
//         }

//         if(mul === 0){
//             resultado += " " + numero.charAt(i)
//         }
//     }

//     return resultado;

// }


// console.log(expandedForm(340))
function LinkedList() {
    this.head = null;
    this.len = 0;
  }

  
  
  LinkedList.prototype.add = function(value) {
    var nuevoNodo = new Node(value);
  
    if(!this.head){
      this.head = nuevoNodo;
    } else {
      var tailActual = this.head;
      while (tailActual.next !== null) {
        tailActual = tailActual.next;
      }
      tailActual.next = nuevoNodo;
    }
    this.len++;
  }

  LinkedList.prototype.size = function(){


    let current = this.head;
    let count = 0 ;

    while(current){
      count++
      current = current.next;
    }
    
    return count;


  }
  
  LinkedList.prototype.remove = function() {
    if(!this.head){
      return undefined;
    }
  
    if(this.head.next === null){
      var unicoNodo = this.head;
      this.head = null;
      return unicoNodo.value;
    }
  
    var nodoActual = this.head.next;
    var nodoPrevious = this.head;
    while (nodoActual.next !== null) {
      nodoPrevious = nodoActual;
      nodoActual = nodoActual.next;
    }
    nodoPrevious.next = null;
    this.len--;
    return nodoActual.value;
  }
  
  LinkedList.prototype.search = function(arg) {
    var nodoActual = this.head;
  
    if(nodoActual === null){
      return null;
    }
  
    while (nodoActual !== null) {
      if(typeof arg === "function"){
        if(arg(nodoActual.value)){
          return nodoActual.value;
        }
      } else if(nodoActual.value === arg){
          return nodoActual.value;
      }
      nodoActual = nodoActual.next;
    }
  
    return null;
  }
  
  function Node(value){
    this.value = value;
    this.next = null;
  }

LinkedList.prototype.orderList = function () {
    

    let current = this.head;
    let current2 = this.head;
    let nuevoArray = [];
    let count = 0;
    while(current2){  
      nuevoArray.push(current2.value) 
      current2 = current2.next; 
    }
    nuevoArray.sort(function(a , b){
        return b - a ;
    });
    while(current){
     current.value = nuevoArray[count] 
     count++
     current = current.next
    }

    return current;

  // Node current will point to head
//    current = this.head;
//    let aux ;
//   if (this.head === null) {
//       return;
//   }
//   else {
//       while (current) {
//           // Node index will point to node next to
//           // current
//           index = current.next;
//           while (index) {
//               // If current node's data is greater
//               // than index's node data, swap the data
//               // between them
//               if (current.value < index.value) {
//                   aux = current.value;
//                   current.vavaluelor = index.value;
//                   index.value = aux;
//               }

//               index = index.next;
//           }
//           current = current.next;
//       }
//   }

//   return current;
}


let lista1 = new LinkedList();

lista1.add(3);
lista1.add(4);
lista1.add(5);

console.log(lista1.head);
lista1.orderList();
console.log(lista1.head)

let linkedList = new LinkedList();
linkedList.add(6);
linkedList.add(4);
linkedList.add(2);
linkedList.add(7);
linkedList.add(8);
linkedList.add(1);
linkedList.orderList();
console.log(linkedList.head.value);
console.log(linkedList.head.next.value);
console.log(linkedList.head.next.next.value);
console.log(linkedList.head.next.next.next.value);
console.log(linkedList.head.next.next.next.next.value);
console.log(linkedList.head.next.next.next.next.next.value);

LinkedList.prototype.insert = function(valor,pos) {
	
//   let current = this.head
    // let count = 1;
    // if(this.head === null) return false
    
    // if(pos > this.size()) return false
  
    // while(count < pos){
    //     count++;
    //     current = current.next;
    // }
    // let aux = current.next;
    // current.next = new Node(value);
    // current.next.next = aux;
    // return true
    let current = this.head;
    let aux;
    let count = 1;
    if(this.head === null) return false;

    if(pos > this.size || pos < 1) return false;

    while(count < pos ){
        count++;
        current = current.next
    }

    aux = current.next;
    current.next = new Node(valor);
    current.next.next = aux;

    return current;
  }


  
  
    
function decimalToBinary(n){

    if(n === 1) return "1";
    
    return decimalToBinary(Math.floor(n/2)) + n%2;
}

console.log(decimalToBinary(20));

