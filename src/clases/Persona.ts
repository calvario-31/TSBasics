export abstract class Persona {
    private _nombre: string;
    private _edad: number;
    private _esHombre: boolean;

    constructor(nombre: string, edad: number, esHombre: boolean) {
        this._nombre = nombre;
        this._edad = edad;
        this._esHombre = esHombre;
    }

    protected toString(): string {
        return `mi nombre es ${this._nombre}, tengo ${this._edad} de edad y soy hombre? ${this._esHombre}`;
    }

    abstract contarExp(): void;

    get nombre() {
        return this._nombre;
    }

    get edad() {
        return this._edad;
    }

    get esHombre() {
        return this._esHombre;
    }
}
