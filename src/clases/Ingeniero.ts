import { IJugar } from "./IJugar";
import { Persona } from "./Persona";

export class Ingeniero extends Persona implements IJugar {
    private _numEdificiosConstruidos: number;

    constructor(
        nombre: string,
        edad: number,
        esHombre: boolean,
        numEdificiosConstruidos: number
    ) {
        super(nombre, edad, esHombre);
        this._numEdificiosConstruidos = numEdificiosConstruidos;
    }

    contarExp(): void {
        console.log(`Me costó mucho pasar fisica 1 y 2`);
    }

    jugarPlay(): void {
        console.log("juego play mientras construyo algo con mi lego");
    }

    jugarXbox(): void {
        console.log("juego xbox mientras construyo algo con mi lego");
    }

    jugarSwitch(): void {
        console.log("juego switch mientras construyo algo con mi lego");
    }

    construirEdificio() {
        this._numEdificiosConstruidos++;
    }

    get numEdificiosConstruidos(): number {
        return this._numEdificiosConstruidos;
    }

    toString(): string {
        const cad =
            super.toString() +
            ` siendo ingeniero he construido ${this._numEdificiosConstruidos} edificios`;
        return cad;
    }
}
