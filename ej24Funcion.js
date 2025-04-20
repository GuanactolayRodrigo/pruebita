export const cambiarColor = () => {
    const colors = ['white','blue','green', 'pink', 'red', 'black', 'orange', 'purple', 'aqua', 'silver', 'magenta', 'maroon', 'lime', 'teal', 'navy', 'olive', 'gray', 'fuchsia', 'yellow', 'coral'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
    alert("El color de fondo cambiará a: " + randomColor);
}
    