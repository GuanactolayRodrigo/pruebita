/*8.Declarar una función con nombre calcularMayor() y pasarle como 
parámetros (numero1,numero2). Dentro de la función mostrar un alert que diga cuál de los 
números ingresados es mayor. En caso de ser iguales, tendrá que indicarlo a través de un 
alert también. 
Invocar la función y enviar los argumentos con diferentes números para probar.*/




function calcularMayor(numero1, numero2) {
    if (numero1 > numero2) {
        console.log("El número mayor es: " + numero1);
    } else if (numero2 > numero1) {
        console.log("El número mayor es: " + numero2);
    } else {
        console.log("Los números son iguales: " + numero1 + " y " + numero2);
    }
}

calcularMayor(5, 10);



/*El problema del alert probablemente ocurre 
porque estás ejecutando el código en un entorno donde
alert no está definido, como un entorno de Node.js o un navegador 
que tiene restricciones específicas. La función alert es par
te del objeto global window y ---> solo está disponible en navegadores web.*/