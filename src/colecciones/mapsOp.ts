import { faker } from "@faker-js/faker";

export const crearMap = (n: number): Map<string, number> => {
    const map = new Map<string, number>();

    for (let i = 0; i < n; i++) {
        const nombre = faker.name.firstName();
        const puntaje = faker.datatype.number({ min: 1, max: 10 });
        map.set(nombre, puntaje);
    }

    return map;
};
