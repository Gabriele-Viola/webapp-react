import { useGlobalContext } from "../contexts/GlobalContext"

export default function ReviewCard({ review }) {
    const { stars } = useGlobalContext()
    const created = new Date(review.created_at).toISOString().slice(0, 10)
    const updated = new Date(review.updated_at).toISOString().slice(0, 10)


    return (
        <div className="review card mb-3">
            <div className="card-body">
                <p>{review.text}</p>
                <span>by: {review.name}</span>
                <div className="vote mt-3">
                    <strong>Vote: <span className="text-warning">{stars(review.vote)}</span></strong>
                </div>
                {created == updated ? <div>created: {created}</div> : <div>updated: {updated}</div>}
            </div>
        </div>
    )
}