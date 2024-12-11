import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext()

function GlobalContextProvider({ children }) {
    const API_SERVER = import.meta.env.VITE_API_SERVER
    const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT
    const filmUrl = `${API_SERVER}${API_ENDPOINT}`
    console.log(`${API_SERVER}${API_ENDPOINT}`);
    const [films, setFilms] = useState([])
    const [selectedFilm, SetSelectedFilm] = useState([])


    useEffect(() => {
        fetch(`${API_SERVER}${API_ENDPOINT}`)
            .then((res => res.json()))
            .then(data => {
                console.log(data.films);
                setFilms(data.films)
            })
    }, [])
    function getSelectedFilm(id) {
        fetch(`${filmUrl}/${id}`)
            .then((res => res.json()))
            .then(data => {
                const film = data
                SetSelectedFilm(film)
            })
    }

    const values = {
        films, setFilms, filmUrl, selectedFilm, getSelectedFilm
    }
    return (
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    )
}
function useGlobalContext() {
    return useContext(GlobalContext)
}
export { GlobalContextProvider, useGlobalContext }