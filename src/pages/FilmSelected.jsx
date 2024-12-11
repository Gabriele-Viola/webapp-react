import { useParams } from "react-router"
export default function FilmSelected() {
    const { id } = useParams()
    return (
        <>
            <section className="reviews">
                <div className="container">
                    <div className="review card mb-3">
                        <div className="card-body">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, tenetur?</p>
                            <span>by: user</span>
                            <div className="vote mt-3">
                                <strong>Vote: 4/5</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}