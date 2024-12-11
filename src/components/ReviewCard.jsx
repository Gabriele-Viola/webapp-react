export default function ReviewCard({ text, name, vote, update }) {
    console.log(text);

    console.log(vote);

    return (
        <div className="review card mb-3">
            <div className="card-body">
                <p>{text}</p>
                <span>by: {name}</span>
                <div className="vote mt-3">
                    <strong>Vote: {vote}/5</strong>
                </div>
                <div>update: {update}</div>
            </div>
        </div>
    )
}