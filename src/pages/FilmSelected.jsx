import { useParams } from "react-router"
import ReviewCard from "../components/ReviewCard"
export default function FilmSelected() {
    const { id } = useParams()
    return (
        <>
            <section className="reviews">
                <div className="container">
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />

                </div>
            </section>

        </>

    )
}