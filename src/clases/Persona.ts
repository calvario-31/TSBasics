export abstract class Persona {
    private _nombre: string;
    private _apellido: string;
    private _edad: number;
    private _esHombre: boolean;

    constructor(
        nombre: string,
        apellido: string,
        edad: number,
        esHombre: boolean
    ) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._esHombre = esHombre;
    }

    protected toString(): string {
        const genero = this._esHombre ? "hombre" : "mujer";
        return `Soy es ${this._nombre} ${this._apellido}, tengo ${this._edad} de edad y soy ${genero}`;
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

    public get apellido(): string {
        return this.apellido;
    }
}
