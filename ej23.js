
let radio = document.querySelectorAll(".inp");
let res = document.getElementById("resultado");
let valorRadio = "";


radio.forEach(function(item) {
  item.addEventListener("change", function() {
    if (item.checked) {
      valorRadio = item.value;
      res.innerHTML = "El lenguaje seleccionado es: " + valorRadio;
    }
  });
});



/*// Agregar listener a cada radio button
for (let i = 0; i < radio.length; i++) {

  console.log("Prueba");
  radio[i].addEventListener("change", function() { //click,change,input
    if (radio[i].checked) {
      valorRadio = radio[i].value;
      res.innerHTML = "El lenguaje seleccionado es: " + valorRadio;
    }
  });
}*/

// radio[0].addEventListener("change", function() { //click,change,input
//   if (radio[0].checked) {
//     valorRadio = radio[0].value;
//     res.innerHTML = "El lenguaje seleccionado es: " + valorRadio;
//   }
// });


//   radio[1].addEventListener("change", function() { //click,change,input
//     if (radio[1].checked) {
//       valorRadio = radio[1].value;
//       res.innerHTML = "El lenguaje seleccionado es: " + valorRadio;
//     }
//   });
  