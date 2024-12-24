import { useState } from "react"
import { useGlobalContext } from "../contexts/GlobalContext"
import ModifyRevForm from "./ModifyRevForm"

export default function ReviewCard({ review }) {
    // const [update, setUpdate] = useState(false)
    const { stars, HandleFormToggle } = useGlobalContext()
    const createDate = (review.created_at).slice(0, 10)
    const updateDate = (review.updated_at).slice(0, 10)
    const createHour = (review.created_at).slice(11, 19)
    const updateHour = (review.updated_at).slice(11, 19)
    const info = updateHour.toLocaleString()
    console.log(info);


    let update

    if (createDate == updateDate && createHour == updateHour) {
        update = false
    } else {
        update = true
    }





    return (
        <>
            <div className="review card mb-3">

                <div className="card-body">
                    <p>{review.text}</p>
                    <span>by: {review.name}</span>
                    <div className="vote mt-3">
                        <strong>Vote: <span className="text-warning">{stars(review.vote)}</span></strong>
                    </div>

                    {update ? <>
                        <div><strong className="text-success">updated</strong>: {updateDate}</div>
                        <div className="text-body-secondary">created: {createDate}</div>
                    </>

                        : <div><strong>created</strong>: {createDate}</div>}


                    <button className="btn bg-secondary-subtle text-dark position-absolute top-0 end-0 m-2" onClick={() => HandleFormToggle(`modify-element${review.id}`)}><i className="bi bi-pencil"></i></button>
                </div>
            </div>

        </>
    )
}