import { useState } from "react"
import { useGlobalContext } from "../contexts/GlobalContext"
export default function AppFormRev({ movie_id }) {
    const { success, setSuccess } = useGlobalContext()
    const id = movie_id

    const [userName, setUserName] = useState('')
    const [review, setReview] = useState('')
    const [rating, setRating] = useState(0)
    const [errorMessage, setErrorMessage] = useState()

    function HandleinputToggle(item) {
        document.getElementById(item).classList.toggle('d-none')
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
                    setTimeout(() => {
                        HandleinputToggle('form-card')
                        setSuccess(' You already left a review!')
                    }, 2000)
                    HandleinputToggle('inputForm')

                }).catch(err => console.error(err))
        }

        setUserName('')
        setReview('')
        setRating(0)

    }


    return (
        <div id="form-card" className="card mb-4 d-none">
            <div className="card-body">
                <form onSubmit={HandleFormSubmit}>
                    {success && <div id="text-success" className="text-success"> <i className="bi bi-check"></i><strong>{success}</strong></div>}
                    <div id="inputForm" className="">

                        <h3 className="mb-3">Add Review Below</h3>
                        <div className="text-muted mb-3">Name, rating and review necessary</div>
                        <div className="mb-3 ">
                            <label htmlFor="name" className="mb-2">Name</label>
                            <input type="text" username='name' className="form-control" placeholder="type your name" value={userName} onChange={(e) => setUserName(e.target.value)} required />
                        </div>
                        <div className="rating mb-3 text-warning">
                            {[1, 2, 3, 4, 5].map(n => <i key={n} className={`bi bi-star${n <= rating ? '-fill' : ''} `} onClick={() => setRating(n)}></i>)}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="review" className="mb-2">Review</label>
                            <textarea name="review" id="review" placeholder="Type what you think" className="form-control" value={review} onChange={(e) => setReview(e.target.value)}></textarea>
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary">
                                <i className="bi bi-send-fill"></i>
                                <strong> Send</strong>
                            </button>
                            {errorMessage && <span className="text-danger">{errorMessage}</span>}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}