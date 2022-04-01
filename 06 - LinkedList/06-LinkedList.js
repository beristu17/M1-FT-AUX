const { LinkedList, Node } = require("../estructuras")
  //agregar el metodo size al prototipo de LinkedList.
  // Este metodo deberia retornar la cantidad de elementos de la lista
  LinkedList.prototype.size=function(){

    let current = this.head;
    let count = 0 ;

    while(current){
      count++
      current = current.next;
    }
    
    return count;
  }

// Agregar el método orderList al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista enlazada de mayor a menor.
// Ejemplo:
//     Suponiendo que la lista actual es: Head --> [4] --> [5] --> [3]
//     lista.orderList();
//     Ahora la lista quedaría: Head --> [5] --> [4] --> [3]
// ACLARACIÓN: Se debe ordenar la lista original y no una nueva.
LinkedList.prototype.orderList = function () {
  // Tu código aca:

  // let current = this.head;
  // let current2 = this.head;
  // let nuevoArray = [];
  // let count = 0;
  // while(current2){  
  //   nuevoArray.push(current2.value) 
  //   current2 = current2.next;
  // }

  // nuevoArray.sort(function(a , b){
  //     return b - a ;
  // });

  // console.log(nuevoArray);

  // while(current){
  //  current.value = nuevoArray[0] 
  //  count++
  //  current = current.next
  // }

  // return current;


  current = this.head;
  let aux , index;
  if (this.head === null) {
      return false;
  }
  else {
      while (current) {
          index = current.next;
          while (index) {
              if (current.value < index.value) {
                  aux = current.value;
                  current.value = index.value;
                  index.value = aux;
              }
              index = index.next;
          }
          current = current.next;
      }
  }
// 4 > 5 > 3
// 
//           
  return current;
}

let lista1 = new LinkedList();

lista1.add(3);
lista1.add(4);
lista1.add(5);

  //agregar el metodo insert al prototipo de LinkedList.
  // Este metodo deberia recibir una posicion y un valor
  // agregar el valor en la posicion indicada
  //tomar el head como posicion 1  
  
    
LinkedList.prototype.insert = function(data,pos) {
	
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
  current.next = new Node(data);
  current.next.next = aux;

}
  




module.exports={
  LinkedList
}



