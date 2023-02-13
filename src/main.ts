/* import * as calculadora from "./matematicas/calculadora";
import * as aleatorios from "./utilities/aleatorios";
import { Abogado } from "./clases/Abogado";
import { Ingeniero } from "./clases/Ingeniero"; */
//import * as mapOps from "./colecciones/mapsOp.js";
import * as planets from "./apiCaller/planets.js";
import * as people from "./apiCaller/people.js";

/* const num1 = aleatorios.randomInt();
const num2 = aleatorios.randomInt();

const numA = aleatorios.randomDouble();
const numB = aleatorios.randomDouble();

const suma = calculadora.calcularSuma(num1, num2);
const producto = calculadora.calcularProducto(numA, numB);

console.log(`${num1} + ${num2} = ${suma}`);
console.log(`${numA.toFixed(2)} * ${numB.toFixed(2)} = ${producto.toFixed(2)}`);

const ingeniero = new Ingeniero();
const abogado = new Abogado();

console.log(ingeniero.toString());
console.log(abogado.toString());

ingeniero.construirEdificio();
abogado.ganarJuicio();

console.log(ingeniero.toString());
console.log(abogado.toString());

ingeniero.jugarPlay();
abogado.jugarXbox();
 */
/* const map = mapOps.crearMap(5);

console.log(map);
 */

const responsePeople = await people.getPeople(5);
const responsePlanet = await planets.getPlanet(2);
console.log(responsePeople.name);
console.log(responsePlanet.name);
