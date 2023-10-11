/* Hacer un programa que pida por pantalla un número del 1 al 10 y mediante un procedimiento muestre 
por pantalla el número escrito en letras.
*/ 

let numberTyped;

function numberInLetters(number) {
    switch (number) {
        case 1:
            return "El numero digitado es el número uno";
            break;
        case 2:
            return "El numero digitado es el número dos";
            break;
        case 3:
            return "El numero digitado es el número tres";
            break;
        case 4:
            return "El numero digitado es el número cuatro";
            break;
        case 5:
            return "El numero digitado es el número cinco";
            break;
        case 6:
            return "El numero digitado es el número seis";
            break;
        case 7:
            return "El numero digitado es el número siete";
            break;
        case 8:
            return "El numero digitado es el número ocho";
            break;
        case 9:
            return "El numero digitado es el número nueve";
            break;
        case 10:
            return "El numero digitado es el número diez";
            break;
    
        default:
            break;
    }
}

do {
    numberTyped = +prompt("Digite un numero del 1-10");
} while (numberTyped==NaN || numberTyped<1 || numberTyped>10);


console.log (`${numberInLetters(numberTyped)}`);
