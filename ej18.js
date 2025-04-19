/*18. Mostrar en una página html un párrafo de texto y un botón, aplicar estilos css. 
Crear un script que capture el evento clic del botón y que cambie el texto del párrafo 
por otro.*/

import { cambiarTexto } from "./funcionesCari.js";

let parrafo = document.getElementById("miParrafo");
let boton = document.getElementById("miBoton");

boton.addEventListener("click", () => cambiarTexto(parrafo));