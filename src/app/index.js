import "./styles/styles.scss";
import "bootstrap";
import { url } from "./api";
import { getChars } from "./fetch";
import {
  mostrarBuscador,
  ocultarBuscador,
  cargarTodos,
  link,
  cargarPersonaje,
} from "./util";

// elementos dom (HTNML)
const btnVerTodos = document.querySelector("#btnVerTodos");
const btnBuscar = document.querySelector("#btnBuscar");
const listado = document.querySelector("#listado");
const buscador = document.querySelector("#buscador");
console.log(buscador);
const cajaBuscadora = document.querySelector("#fname");

async function listar() {
  const personajes = await getChars();
}

//apartado de eventos click y teclado
btnVerTodos.addEventListener("click", cargarTodos);
btnBuscar.addEventListener("click", mostrarBuscador);
console.log(cajaBuscadora);
cajaBuscadora.addEventListener("keyup", async () => {
  const abuscar = cajaBuscadora.value;
  console.log(cajaBuscadora.value);
  //filtra los personajes según el término "abuscar" y los muestra:
  listado.innerHTML = ""; //vaciar
  const personajes = await getChars();
  personajes.forEach((personaje) => {
    if (
      personaje.fullName.toLowerCase().indexOf(abuscar.toLowerCase()) !== -1
    ) {
      //contiene el término a buscar
      const carta = cargarPersonaje(personaje);
      listado.innerHTML += carta;
    }
  });
});

listar();

//entry point:
ocultarBuscador();

export { btnVerTodos, btnBuscar, listado, buscador };
