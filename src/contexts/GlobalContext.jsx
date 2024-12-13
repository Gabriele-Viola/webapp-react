import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext()

function GlobalContextProvider({ children }) {
    const API_SERVER = import.meta.env.VITE_API_SERVER
    const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT
    const filmUrl = `${API_SERVER}${API_ENDPOINT}`
    // console.log(`${API_SERVER}${API_ENDPOINT}`);
    const [films, setFilms] = useState([])
    const [selectedFilm, SetSelectedFilm] = useState([])


    useEffect(() => {
        fetch(`${API_SERVER}${API_ENDPOINT}`)
            .then((res => res.json()))
            .then(data => {
                // console.log(data.films);
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
    function stars(vote) {
        let fixVote = vote
        const afterDot = vote % 1 !== 0 && vote - parseInt(vote)
        if (afterDot < 0.5) {
            fixVote = Math.floor(vote)
        } else if (afterDot >= 0.5) {
            fixVote = parseInt(vote) + 0.5
        }


        const stars = []
        for (let i = 0; i < 5; i++) {

            if (i < Math.floor(fixVote)) {

                stars.push(<i key={i} className="bi bi-star-fill"></i>);
            } else if (i < fixVote) {

                stars.push(<i key={i} className="bi bi-star-half"></i>);
            } else {

                stars.push(<i key={i} className="bi bi-star"></i>);
            }

        }
        return stars
    }


    const values = {
        films, setFilms, filmUrl, selectedFilm, getSelectedFilm, stars
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