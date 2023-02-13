import { IJugar } from "./IJugar.js";
import { Persona } from "./Persona.js";
import { faker } from "@faker-js/faker";

export class Abogado extends Persona implements IJugar {
    private _numJuiciosGanados: number;

    constructor() {
        const nombre = faker.name.firstName();
        const apellido = faker.name.lastName();
        const edad = faker.datatype.number({ min: 18, max: 50 });
        const esHombre = faker.datatype.boolean();
        const numJuiciosGanados = faker.datatype.number({ min: 1, max: 20 });
        super(nombre, apellido, edad, esHombre);

        this._numJuiciosGanados = numJuiciosGanados;
    }

    jugarPlay(): void {
        console.log("juego play mientras leo un libro");
    }

    jugarXbox(): void {
        console.log("juego xbox mientras leo un libro");
    }

    jugarSwitch(): void {
        console.log("juego switch mientras leo un libro");
    }

    ganarJuicio(): void {
        this._numJuiciosGanados++;
    }

    contarExp(): void {
        console.log("Fui a la universidad por 10 años seguidos");
    }

    toString(): string {
        const cad =
            super.toString() +
            ` siendo abogado he ganado ${this._numJuiciosGanados} juicios`;
        return cad;
    }
}
