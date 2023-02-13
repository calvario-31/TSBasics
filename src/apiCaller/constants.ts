export const mainUrl = "https://swapi.dev/api";

export const apiCaller = async (url: string) => {
    const response = await fetch(`${mainUrl}/${url}`);
    return await response.json();
};

export const apiCallerPromise = (url: string) => {
    return fetch(`${mainUrl}/${url}`)
        .then((response) => response.json())
        .then((response) => response);
};
