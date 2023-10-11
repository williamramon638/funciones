/*Hacer un programa que muestre 3 números ordenados descendentemente, utilizando un procedimiento 
para cada operación. */

let numberOne, numberTwo, numberThree,orderedNumbers=[];

numberOne = +prompt("Digite el numero 1");
numberTwo = +prompt("Digite el numero 2");
numberThree = +prompt("Digite el numero 3");

orderedNumbers = [numberOne,numberTwo,numberThree];


console.log(`${orderedNumbers.sort(function(a, b){return b - a}) }`);
