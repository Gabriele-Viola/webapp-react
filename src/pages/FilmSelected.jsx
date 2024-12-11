import { useParams } from "react-router"
import ReviewCard from "../components/ReviewCard"
import Banner from "../components/Banner"
export default function FilmSelected() {
    const { id } = useParams()
    return (
        <>
            <Banner title={`you selected film id:${id}`} subtitle='description of film' leadtext='other description' />
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