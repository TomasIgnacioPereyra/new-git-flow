/*const lenguajes = ["Node", "React", "Java", "Python", "Ruby on Rails"];

function mostrarLenguajes() {
  setTimeout(() => {
    lenguajes.forEach((lenguaje) => console.log(lenguaje));
  }, 1000);
}
function nuevoLenguaje(lenguaje, callback) {
  setTimeout(() => {
    lenguajes.push(lenguaje);

    callback();
  }, 2000);
}
nuevoLenguaje("Angular", mostrarLenguajes);

mostrarLenguajes();

const lenguajesAprendidos = [];

function agregarLenguajeAprendido(lenguaje, callback) {
  lenguajesAprendidos.push(lenguaje);

  console.log(`Agregado: ${lenguaje}`);

  callback();
}

function mostrarLenguajesAprendidos() {
  console.log(lenguajesAprendidos);
}

function iniciarCallbackHell() {
  setTimeout(() => {
    agregarLenguajeAprendido("Java", mostrarLenguajesAprendidos);

    setTimeout(() => {
      agregarLenguajeAprendido("Node", mostrarLenguajesAprendidos);

      setTimeout(() => {
        agregarLenguajeAprendido("Python", mostrarLenguajesAprendidos);
      }, 3000);
    }, 3000);
  }, 3000);
}

iniciarCallbackHell();
*/
console.clear();
const paises = [];

const mostrarPaises = () => {
    paises.sort();
    paises.map((x) => console.log(x));
    console.log(paises);
    console.log("");
};

const agregarPais = (pais, callback) => {
    setTimeout(() => {
        paises.push(pais);
        callback();
    }, 500);
};

const iniciarCallbackPaises = () => {
    agregarPais("Argentina", () => {
        mostrarPaises();
        agregarPais("Brasil", () => {
            mostrarPaises();
            agregarPais("Uruguay", () => {
                mostrarPaises();
                agregarPais("Chile", () => {
                    mostrarPaises();
                    agregarPais("Paraguay", mostrarPaises);
                });
            });
        });
    });
};

iniciarCallbackPaises();