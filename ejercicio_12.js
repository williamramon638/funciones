//  Invertir un número entero con Recursividad.

let invertido = 0, number;

number = +prompt("Digite un numero");

function reversedNumber (invertido, numero){
    if (numero==0){
        return invertido;
    }

    invertido = (10 * invertido) + numero % 10;
    numero = (Math.floor(numero / 10));

    return reversedNumber(invertido, numero);
}

console.log(`El numero invertido es ${reversedNumber(invertido,number)}`);

