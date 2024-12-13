import { useParams } from "react-router"
import ReviewCard from "../components/ReviewCard"
import Banner from "../components/Banner"
import { useGlobalContext } from "../contexts/GlobalContext"
import { useEffect, useState } from "react"
export default function FilmSelected() {
    const { id } = useParams()
    const { selectedFilm, getSelectedFilm, stars } = useGlobalContext()
    const [userName, setUserName] = useState('')
    const [review, setReview] = useState('')
    const [rating, setRating] = useState(0)
    const [errorMessage, setErrorMessage] = useState()


    useEffect(() => {
        getSelectedFilm(id)
    }, [])
    // console.log(selectedFilm);

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
                    "Content-Type": "applcation/json"
                }
            }).then(req => resizeBy.json())
                .then(data => {
                    console.log(data);

                }).catch(err => console.error(err))
        }


    }

    return (
        <>
            <Banner title={`your selected film is: ${selectedFilm.title}`} subtitle={`${selectedFilm.abstract}`} leadtext={`${selectedFilm.genre}`} button={'add reviews'} />

            <section className="reviews">
                <div className="container">
                    <div id="form-card" className="card mb-4">
                        <div className="card-body">
                            <form onSubmit={HandleFormSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" username='name' className="form-control" placeholder="type your name" value={userName} onChange={(e) => setUserName(e.target.value)} required />
                                </div>
                                <div className="rating mb-3 text-warning">
                                    {[1, 2, 3, 4, 5].map(n => <i key={n} className={`bi bi-star${n <= rating ? '-fill' : ''} `} onClick={() => setRating(n)}></i>)}
                                </div>
                                <div className="mb-3">
                                    <textarea name="review" id="review" placeholder="Type what you think" className="form-control" value={review} onChange={(e) => setReview(e.target.value)}></textarea>
                                </div>
                                <div className="mb-3">
                                    <button type="submit" className="btn btn-primary"><i className="bi bi-send-fill"></i><strong> Send</strong></button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="text-end mb-4">
                        <strong>Average:</strong> <span className="text-warning">{stars(selectedFilm.average_vote)}</span>
                        {selectedFilm.average_vote && <div className="text-muted">{Number(selectedFilm.average_vote).toFixed(1)}</div>}

                    </div>
                    {!selectedFilm.reviews ? <h1>no found</h1> : selectedFilm.reviews.map(review => <ReviewCard key={review.id} review={review} />)}


                </div>
            </section>

        </>

    )
}