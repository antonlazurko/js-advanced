import {API_SEARCH_URL} from "../const";

export async function getBooks(query) {
    try {
        const result = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
        if (result.status !== 200) {
            throw new Error(result.status)
        }
        const data = await result.json()
        return data
    } catch (error) {
        console.error(error);
    }
}