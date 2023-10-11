/*Hacer un programa que muestre un menú con las opciones sumar, restar, multiplicar y dividir, 
el programa solicitará una opción y realizará la tarea elegida, se debe usar procedimientos.*/

let opcion,num1,num2;

function operacion(a,b,c) {
    if (a==1) {
        return b+c;
    } else if (a==2) {
        return b-c;
    } else if (a==3) {
        return b*c;
    } else if (a==4) {
        return b/c;
    }else{
        return console.error("La operación no fue posible");
    }
}


do {
    opcion = +prompt ("Digite el numero de la operacion que desea realizar: \n 1. Sumar \n 2. Restar \n 3. Multiplicar \n 4. Dividir");
    
} while (isNaN(opcion) || opcion<=1 || opcion>=4);

do {
    num1 = +prompt ("Digite el numero 1");
    num2 = +prompt ("Digite el numero 2");
} while (isNaN(num1)|| isNaN (num2));

console.log(`El resultado de la operación entre los dos numeros es: ${operacion(opcion,num1,num2)}`);