import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext()

function GlobalContextProvider({ children }) {
    const API_SERVER = import.meta.env.VITE_API_SERVER
    const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT
    const filmUrl = `${API_SERVER}${API_ENDPOINT}`
    const [films, setFilms] = useState([])
    const [selectedFilm, SetSelectedFilm] = useState([])
    const [success, setSuccess] = useState('')
    const [userName, setUserName] = useState('')
    const [review, setReview] = useState('')
    const [rating, setRating] = useState(0)
    const [errorMessage, setErrorMessage] = useState()


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

    function HandleFormSubmit(e) {
        e.preventDefault()

        if (userName.length < 4 || review.length < 10 || rating == 0) {
            setErrorMessage('name, rating or review is empty')
        } else {
            setErrorMessage(null)
            const formData = {
                name: userName,
                text: review,
                vote: rating
            }
            console.log(formData);

            const API_POST_REVIEW_URL = `http://localhost:3000/api/films/${id}/review`
            fetch(API_POST_REVIEW_URL, {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.success) {
                        setSuccess(' Thanks for review!')
                    }
                    setTimeout(HandleinputToggle(), 1000)


                }).catch(err => console.error(err))
        }

        setUserName('')
        setReview('')
        setRating(0)

    }


    function HandleFormToggle() {
        document.getElementById('form-card').classList.toggle('d-none')
    }
    function HandleinputToggle() {
        document.getElementById('inputForm').classList.toggle('d-none')
    }
    const values = {
        films, setFilms, filmUrl, selectedFilm, getSelectedFilm, stars, HandleFormToggle, success, userName, setUserName, setRating, rating, review, setReview, errorMessage
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