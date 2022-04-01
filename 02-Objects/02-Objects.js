// Actividad 1
function crearClaseLibro() {
  class Libro {
    constructor(titulo, autor, traducciones) {
      // El constructor de la clase Libro recibe titulo (string), autor (string), traducciones (array de objetos)
      // Inicializar las propiedades del libro con los valores recibidos como argumento
      // Tu código aca:
      
      this.titulo = titulo;
      this.autor = autor;
      this.traducciones = traducciones;
      
    }

    getTitulo() {
      // este método debe retornar el titulo del libro.
      // Tu código aca:
      
      return this.titulo;
    }

    getAutor() {
      // El método debe retornar nombre y apellido del autor
      // Tu código aca:
      
      return this.autor;
    }

    addTraduccion(idioma, editorial) {
      // El método recibe un string 'idioma' y un string 'editorial' y debe agregar un objeto:
      // { idioma: idioma, editorial: editorial} al arreglo de traducciones del libro.
      // No debe retornar nada.
      // Tu código aca:
      
      
      return this.traducciones.push({idioma: idioma, editorial: editorial});
    

    }

    getTraducciones() {
      // El método debe retornar un arreglo con sólo los idiomas del arreglo de traducciones del libro.
      // Ej:
      // Suponiendo que el libro tiene estas traducciones: [{idioma: 'inglés', editorial: 'Scholastic'}, {idioma: 'castellano', editorial: 'Santillana'}]
      // libro.getTraducciones() debería devolver ['inglés', 'castellano']
      // Tu código aca:

      let nuevoArreglo = [];

      this.traducciones.forEach(element => {
        nuevoArreglo.push(element.idioma);
      });

      return nuevoArreglo;
     
    }

    getAlcance() {
      // El metodo debe retornar la cantidad de idiomas en la que esta traducido el libro.
      // Dato: no se repiten ni los idiomas ni las editoriales
      // ej:
      // Suponiendo que el libro tiene estas traducciones: [{idioma: 'inglés', editorial: 'Scholastic'}, {idioma: 'castellano', editorial: 'Santillana'}]
      // libro.getAlcance() deberia devolver 2
      // Tu código aca:

      let auxiliar = this.getTraducciones();

      let idioma = new Set(auxiliar);

      return idioma.size;
     
    }
  }

  return Libro;
}

let libro = crearClaseLibro();
let lib1 = new libro("Titanic", "Jk" , [{en:"Es"}]);
lib1.addTraduccion("Chino", "ED2021");
lib1.addTraduccion("Chino", "ED2021");
lib1.addTraduccion("Chino", "ED2021");
lib1.addTraduccion("Espa", "ED2021");
lib1.addTraduccion("Ingles", "ED2021");
console.log(lib1.getTraducciones());
console.log(lib1.getTitulo());
console.log(lib1.getAlcance());



const hogwarts = {
  staff: {
    headmaster: {
      name: "Albus Percival Wulfric Brian Dumbledore",
    },
    keeperOfKeys: {
      name: "Rubeus Hagrid",
    },
   potionsMaster: {
      name: "Severus Snape",
    },
  },
};


const printStaff = function (objeto) {
  // Retornar un arreglo que contenga los strings indicando el titulo y nombre de cada miembro del staff
  // de esta forma "The headmaster is Albus Percival Wulfric Brian Dumbledore" 
  // el arreglo debe mantener el orden que posee el staff del objeto.
  
  let nuevoArreglo = [];
  let i = Object.keys(objeto.staff);
  console.log(i);

  i.forEach(element =>{
    console.log(element);

    nuevoArreglo.push(`The ${element} is ${objeto.staff[element].name}`) // no anda element.name por que element lo toma como string
  })


  // for(prop in objeto.staff){
  //   console.log(objeto.staff[prop].name);

  //   nuevoArreglo.push(`The ${prop} is ${objeto.staff[prop].name}`)
  // }
  return nuevoArreglo;

};

console.log(printStaff(hogwarts));


module.exports = { crearClaseLibro, printStaff };
