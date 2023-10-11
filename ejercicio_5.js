/*Hacer un programa que pida por pantalla una temperatura en grados Celsius, muestre un menú para convertirlos
a Fahrenheit o Kelvin y muestre el equivalente por pantalla, utilizando funciones.*/

let temperature, temperatureWished;

function temperatureConversion(temperatureTyped,optionTyped) {
    if (optionTyped==1) {
        return `La temperatura ${temperatureTyped}°C equivale a ${(9*temperatureTyped)/5 + 32}° Fahrenheit`;
    } else if (optionTyped==2) {
        return `La temperatura ${temperatureTyped}°C equivale a ${temperatureTyped + 273.15}° Kelvin`;
    }
}

do {
    temperature = +prompt("Digite una temperatura en grados Celsius");
} while (isNaN(temperature));

do {
    temperatureWished = +prompt("¿A qué grados desea convertir? \n 1.Fahrenheit \n 2.Kelvin");
} while (isNaN(temperatureWished)|| temperatureWished<1 || temperatureWished>2);


console.log (temperatureConversion(temperature,temperatureWished));