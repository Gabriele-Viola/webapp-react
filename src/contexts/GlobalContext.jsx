import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext()

function GlobalContextProvider({ children }) {
    const API_SERVER = import.meta.env.VITE_API_SERVER
    const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT
    const filmUrl = `${API_SERVER}${API_ENDPOINT}`
    const [success, setSuccess] = useState('')
    const [refresh, setRefresh] = useState(0)
    const [errorMessage, setErrorMessage] = useState()
    const [isLoading, setIsLoading] = useState(false)


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

    function HandleFormToggle(item) {
        document.getElementById(item).classList.toggle('d-none')
    }

    function average(ArrayOfNumber) {
        let sumVote = 0
        ArrayOfNumber?.forEach(vote => sumVote += vote)
        const average = sumVote / ArrayOfNumber?.length
        return average
    }
    const values = {
        filmUrl, stars, HandleFormToggle, success, setSuccess, average, isLoading, setIsLoading, errorMessage, setErrorMessage, refresh, setRefresh
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