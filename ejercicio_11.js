// Pasar de número entero a número binario con Recursividad.

let n,texto;

n = +prompt("Digite numero");

function convertirBinario (numero,text=[]){
    
    if(numero<2){
        text.push(numero%2);
        return text.reverse();
    }
    
    text.push(numero%2);

    
    return convertirBinario(parseInt(numero/2),text);
}

console.log(convertirBinario(n,texto).toString());