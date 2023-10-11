/*Hacer un programa que muestre una tabla de multiplicar hasta el 20 de un número cualquiera por pantalla, 
el número se pedirá en el programa principal. Usar procedimiento.
*/

let numberTyped;

function multiplicationTable(number) {
    for (let i = 0; i<=20; i++) {
        console.log(`${number} * ${i} = ${number*i}`);
    }
}

do {
    numberTyped = +prompt("Digite un numero para visualizar las tablas de multiplicar");
} while (isNaN(numberTyped) || numberTyped<0);



multiplicationTable(numberTyped);


