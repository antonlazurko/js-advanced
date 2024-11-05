export function getFavoritesFromStorageAndSet(appState) {
    const favorites = localStorage.getItem('favorites')
    if (favorites) {
        appState.favorites = JSON.parse(favorites)
    }

}
export function setFavoritesToStorage(appState) {
    localStorage.setItem('favorites', JSON.stringify(appState.favorites))
}