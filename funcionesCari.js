export let mostrarPares = () => {
    
    for(let i=1;i<=20;i=i+2)
    {
        console.log(i);
    }
};

export let cambiarTexto = (obj) => {
    obj.innerHTML = "¡El texto ha sido cambiado!";
    obj.style.color = "blue"; 
}

export let agregarChange=(radio,res)=>{
    let valorRadio = "";
    for (let i = 0; i < radio.length; i++) {
        radio[i].addEventListener("change", function() { //click,change,input
          if (radio[i].checked) {
            valorRadio = radio[i].value;
            res.innerHTML = "El lenguaje seleccionado es: " + valorRadio;
          }
        });
      }

}