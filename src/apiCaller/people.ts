import { apiCaller } from "./constants.js";

const apiResource = "people";

export const getPeople = async (id: number) => {
    return await apiCaller(`${apiResource}/${id}`);
};
