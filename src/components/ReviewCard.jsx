export default function ReviewCard({ text, name, vote, update, review }) {
    const stars = []
    for (let i = 0; i < 5; i++) {
        stars.push(<i key={i} className={`bi ${i < review.vote ? "bi-star-fill" : "bi-star"}`}></i>)
    }

    return (
        <div className="review card mb-3">
            <div className="card-body">
                <p>{review.text}</p>
                <span>by: {review.name}</span>
                <div className="vote mt-3">
                    <strong>Vote: <span className="text-warning">{stars}</span></strong>
                </div>
                <div>update: {review.updated_at}</div>
            </div>
        </div>
    )
}