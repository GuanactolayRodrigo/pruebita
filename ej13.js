/*13. Escribir una función llamada mostrarArreglo que reciba un arreglo numérico como 
parámetro e imprima cada elemento en una línea a parte.*/

let arregloNumerico = [1, 2, 3, 4, 5];

/* function mostrarArreglo(arreglos){   
    for (let i = 0; i < arreglos.length; i++) {
        console.log(arreglos[i]);
    }
} */

let mostrarArreglo =  (numeros) => { 
    for (let i = 0; i < numeros.length; i++) 
    {
         console.log(numeros[i]+"\n");
    }
}  

mostrarArreglo(arregloNumerico);