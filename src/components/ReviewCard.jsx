import { useGlobalContext } from "../contexts/GlobalContext"
import ModifyRevForm from "./ModifyRevForm"

export default function ReviewCard({ review }) {
    const { stars, HandleFormToggle } = useGlobalContext()
    const created = (review.created_at).slice(0, 10)
    const updated = (review.updated_at).slice(0, 10)




    // function HandleFormSubmits(e) {
    //     e.preventDefault()

    //     if (review.text != ) {
    //         setErrorMessage('name, rating or review is empty')
    //     } else {
    //         setErrorMessage(null)
    //         const formData = {
    //             name: userName,
    //             text: review,
    //             vote: rating
    //         }
    //         console.log(formData);

    //         const API_POST_REVIEW_URL = `http://localhost:3000/api/films/${id}/review`
    //         fetch(API_POST_REVIEW_URL, {
    //             method: 'POST',
    //             body: JSON.stringify(formData),
    //             headers: {
    //                 "Content-Type": "application/json"
    //             }
    //         }).then(res => res.json())
    //             .then(data => {
    //                 console.log(data);
    //                 if (data.success) {
    //                     setSuccess(' Thanks for review!')
    //                 }
    //                 setTimeout(HandleinputToggle(), 1000)


    //             }).catch(err => console.error(err))
    //     }

    //     setUserName('')
    //     setReview('')
    //     setRating(0)

    // }


    return (
        <>
            <div className="review card mb-3">

                <div className="card-body">
                    <h2>{review.id}</h2>
                    <p>{review.text}</p>
                    <span>by: {review.name}</span>
                    <div className="vote mt-3">
                        <strong>Vote: <span className="text-warning">{stars(review.vote)}</span></strong>
                    </div>
                    {created == updated ? <div>created: {created}</div> : <div>updated: {updated}</div>}
                    <button className="btn bg-secondary-subtle text-dark position-absolute top-0 end-0 m-2" onClick={() => HandleFormToggle(`modify-element${review.id}`)}><i className="bi bi-pencil"></i></button>
                </div>
            </div>

        </>
    )
}