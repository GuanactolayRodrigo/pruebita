/*18. Mostrar en una página html un párrafo de texto y un botón, aplicar estilos css. 
Crear un script que capture el evento clic del botón y que cambie el texto del párrafo 
por otro.*/


let parrafo = document.getElementById("miParrafo");
let boton = document.getElementById("miBoton");

boton.addEventListener("click", function() {
    parrafo.innerHTML = "¡El texto ha sido cambiado!";
    parrafo.style.color = "blue"; 
});