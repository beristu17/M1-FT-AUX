// Usando la recursion calcular el producto de todos los numeros de dado arreglo
// ej:
// producto([1, 2, 5]) devuelve 10

function producto(array) {
  //escribe aqui tu codigo

 if(!array.length) return 1;
 
 
 return array.pop() * producto(array);

 
};





// Dado un objeto con objetos anidados utilizar la recursión para crear una función
// que devuelva true o false dependiendo si el objeto tiene o no el valor pasado por parametro
// ejemplo:
let obj = {
    prop2:{value:5},    
      school: {
            hogwarts: {
                  headmaster:{
                      name: {
                          first: "Albus",
                          last: "Dumbledore"
                        }
                      }
                  }
              } 
            }
          

const isThere = function (obj, value){
  //escribe aqui tu codigo 
  
  for(let prop in obj){
    if(obj[prop] === value) return true;
    console.log(obj[prop]);
    if(typeof obj[prop] === "object"){
      let found = isThere(obj[prop],value);
      if(found) return true;
    }
  }

};

console.log(isThere(obj,"Albus"));
module.exports = { producto, isThere };



