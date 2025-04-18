const paisesCapitales = {
    "Argentina": "Buenos Aires",
    "Brasil": "Brasilia",
    "Canadá": "Ottawa",
    "México": "Ciudad de México",
    "Chile": "Santiago",
    "Colombia": "Bogotá"
};

const paisSelect = document.getElementById("pais");
const capitalSelect = document.getElementById("capital");

paisSelect.addEventListener("change", function() {
    const paisSeleccionado = this.value;

    // Limpiar la lista de capitales
    capitalSelect.innerHTML = "";

    if (paisSeleccionado === "") {
    capitalSelect.disabled = true;
    const option = document.createElement("option");
    option.text = "-- Capital --";
    option.value = "";
    capitalSelect.add(option);
    return;
    }

    const capital = paisesCapitales[paisSeleccionado];

    const option = document.createElement("option");
    option.text = capital;
    option.value = capital;
    capitalSelect.add(option);
    capitalSelect.disabled = false;

    console.log(`País seleccionado: ${paisSeleccionado}, Capital: ${capital}`);
});