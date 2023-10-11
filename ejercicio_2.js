//Hacer un programa que realice la media aritmética de 2 números.



function average(a,b) {
    return (a+b)/2;
}

let num_uno = +prompt("Digite un numero");
let num_dos = +prompt("Digite otro numero");

console.log(`La media aritmetica de los numeros ${num_uno} y ${num_dos} es: ${average(num_uno,num_dos)}`);
