import * as aleatorios from "../utilities/aleatorios.js";

export const calcularSumaArray = (array: Array<number>): number => {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma;
};

export const calcularProductoArray = (array: Array<number>): number => {
    let producto = 1;
    for (let i = 0; i < array.length; i++) {
        producto *= array[i];
    }
    return producto;
};

export const generarArrayAleatorioInt = (n: number): Array<number> => {
    const array: Array<number> = [];
    for (let i = 0; i < n; i++) {
        array[i] = aleatorios.randomInt();
    }
    return array;
};

export const generarArrayAleatorioDouble = (n: number): Array<number> => {
    const array: Array<number> = [];
    for (let i = 0; i < n; i++) {
        array[i] = aleatorios.randomDouble();
    }
    return array;
};
