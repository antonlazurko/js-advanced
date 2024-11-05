import {API_SEARCH_URL} from "../const";

export async function getBooks(query, offset) {
    try {
        const result = await fetch(`${API_SEARCH_URL}q=${query}&offset=${offset}&limit=10`)
        if (result.status !== 200) {
            throw new Error(result.status)
        }
        const data = await result.json()
        return data
    } catch (error) {
        console.error(error);
    }
}