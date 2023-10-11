// Determinar si un número es par o no.

let n= +prompt("Digite un numero para determinar si es par o no");

function isPair(number) {
    if(number%2===0){
        return 'es par';
    } else{
        return 'no es par';
    }
}
console.log(`El numero ${n}: ${isPair(n)}`);