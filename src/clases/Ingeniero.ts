import { IJugar } from "./IJugar.js";
import { Persona } from "./Persona.js";
import { faker } from "@faker-js/faker";

export class Ingeniero extends Persona implements IJugar {
    private _numEdificiosConstruidos: number;

    constructor() {
        const nombre = faker.name.firstName();
        const apellido = faker.name.lastName();
        const edad = faker.datatype.number({ min: 18, max: 50 });
        const esHombre = faker.datatype.boolean();
        const numEdificiosConstruidos = faker.datatype.number({
            min: 1,
            max: 20,
        });
        super(nombre, apellido, edad, esHombre);
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
