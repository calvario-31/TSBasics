import { IJugar } from "./IJugar";
import { Persona } from "./Persona";

export class Abogado extends Persona implements IJugar {
    private _numJuiciosGanados: number;

    constructor(
        nombre: string,
        edad: number,
        esHombre: boolean,
        numJuiciosGanados: number
    ) {
        super(nombre, edad, esHombre);
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
