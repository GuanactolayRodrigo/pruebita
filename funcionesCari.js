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