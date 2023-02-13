import { apiCaller } from "./constants.js";

const apiResource = "planets";

export const getPlanet = async (id: number) => {
    return await apiCaller(`${apiResource}/${id}`);
};
