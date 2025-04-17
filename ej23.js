
let radio = document.getElementsByName("lenguaje");
let res = document.getElementById("resultado");
let valorRadio = "";


// Agregar listener a cada radio button
for (let i = 0; i < radio.length; i++) {
  radio[i].addEventListener("change", function() {
    if (radio[i].checked) {
      valorRadio = radio[i].value;
      res.innerHTML = "El lenguaje seleccionado es: " + valorRadio;
    }
  });
}
