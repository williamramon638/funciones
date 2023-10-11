// Serie Fibonacci con Recursividad: 1.1.2.3.5.8…

let n, indiceCero=0, indiceUno=1,actual=0; 

function recursividadFibonacci(index0,index1,current, n){
    current = index0 + index1;
    text += `, ${current}`;
    index0 = index1;
    index1 = current;

    if(n==2){
        return text;
    }

    return recursividadFibonacci(index0,index1,actual,n-1);
}

n = +prompt ("Digite el numero para realizar la serie fibonacci");
let text = `0, 1`;
if (n < 1) {
    console.log("");
} else if (n === 1) {
    console.log("0");
} else if (n === 2) {
    console.log("0,1");
} else{
    console.log(recursividadFibonacci(indiceCero,indiceUno,actual,n));
}






