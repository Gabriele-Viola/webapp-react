import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext()

function GlobalContextProvider({ children }) {
    const API_SERVER = import.meta.env.VITE_API_SERVER
    const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT
    console.log(`${API_SERVER}${API_ENDPOINT}`);
    const [films, setFilms] = useState([])

    useEffect(() => {
        fetch(`${API_SERVER}${API_ENDPOINT}`)
            .then((res => res.json()))
            .then(data => {
                console.log(data.films);
                setFilms(data.films)
            })
    }, [])
    const values = {
        films, setFilms
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