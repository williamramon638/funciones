// Consideremos una función que recibe un número n e imprime los números del n al 1 con recursividad.

let n, texto=[];



function goThroughNumbers(number, text=[]){
    text.push(number);
    if(number==1){
        return text;
    }
    return goThroughNumbers(number-1,text);
}

do {
    n= +prompt ("Digite un numero");
} while (isNaN(n)|| n<0);

if (n==0) {
    console.log("0");   
} else{
    console.log(`Los numeros del ${n} al 1 son; ${goThroughNumbers(n,texto)}`);
}

