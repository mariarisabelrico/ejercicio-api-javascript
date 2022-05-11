import { buscador,listado } from ".";
import { getChars } from "./fetch";
//import {listado} from './'
import { url } from "./api";

const ocultarBuscador = () => {

   buscador.style.display = "none";
  };
  const mostrarBuscador = () => {
    buscador.style.display = "flex";
    listado.innerHTML = ""; //borra el listado, si lo hay
  };
  const cargarPersonaje = (personaje) => {
    console.log(personaje)
    return `<div class="card">
      <div class="container">
        <h4> <a href = "${url }${personaje.id}"> ${personaje.fullName} </h4>
  
      <img src="${personaje.imageUrl}" alt="" style="width:75%">
      <div class="container">
        <p>T&iacute;tulo: ${personaje.title}</p>
        <p>Familia: ${personaje.family}</p>
      </div>
    </div>`;
  };
  async function cargarTodos() {
    ocultarBuscador();
    listado.innerHTML = ""; //vaciar si hay algo en el listado
    const personajes = await getChars();
    console.log(personajes)
    personajes.forEach((personaje) => {
      const carta = cargarPersonaje(personaje);
      listado.innerHTML += carta;
    });
  }

  const cargar = async(pagina) => {
      const personajes = await getChars();
      let contador = pagina;
      console.log(pagina,contador)
  }

  const link = () => {
      let template = '';
      for (let i = 1; i >5; i++) {          
          template+= ` <a href="#" value =${i}>${i}<a/>`
          
      }
      let nav =document.createElement('nav')
      nav.innerHTML= template;

      listado.insertAdjacentElement('afterend',nav)
    }
  
  
  export{ocultarBuscador,mostrarBuscador,cargarTodos,link,cargarPersonaje};