import { useState } from "react"
import { useGlobalContext } from "../contexts/GlobalContext"
import { useParams } from "react-router"

export default function ModifyRevForm() {
    const { HandleFormToggle } = useGlobalContext()
    const [modifyData, setModifyData] = useState({})
    const { id } = useParams()
    function HandleFormModify(e) {
        e.preventDefault()

        console.log(e.target, id);






        // if (userName.length < 4 || review.length < 10 || rating == 0) {
        //     setErrorMessage('name, rating or review is empty')
        // } else {
        //     setErrorMessage(null)
        //     const formData = {
        //         name: userName,
        //         text: review,
        //         vote: rating
        //     }
        //     console.log(formData);

        //     const API_POST_REVIEW_URL = `http://localhost:3000/api/films/${id}/review`
        //     fetch(API_POST_REVIEW_URL, {
        //         method: 'POST',
        //         body: JSON.stringify(formData),
        //         headers: {
        //             "Content-Type": "application/json"
        //         }
        //     }).then(res => res.json())
        //         .then(data => {
        //             console.log(data);
        //             if (data.success) {
        //                 setSuccess(' Thanks for review!')
        //             }
        //             setTimeout(() => {
        //                 HandleinputToggle('form-card')
        //                 setSuccess(' You already left a review!')
        //             }, 2000)
        //             HandleinputToggle('inputForm')

        //         }).catch(err => console.error(err))
        // }

        // setUserName('')
        // setReview('')
        // setRating(0)

    }


    return (
        <div id='modify-element' className="modify-element h-100 w-100 position-fixed top-0 start-0 bg-dark bg-opacity-25 z-3 d-none" >
            <div className="text-secondary text-end m-5" onClick={() => HandleFormToggle('modify-element')} >
                <button className="btn bg-danger shadow ">
                    <i className="bi bi-x-lg"></i>
                </button>
            </div>
            <div className="card position-absolute top-50 start-50 translate-middle bg-light">
                <div className="card-body ">
                    <h4 className="mb-3">Modify your review</h4>
                    <form onSubmit={HandleFormModify}>
                        <label htmlFor="modifyRev" className="mb-2">insert below your modify</label>
                        <textarea name="modifyRev" id="modifyRev" className="form-control mb-3"></textarea>
                        <button type="submit" className="btn btn-warning text-light">Submit your change</button>
                    </form>
                </div>
            </div>
        </div>
    )
}