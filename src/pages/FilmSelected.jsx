import { useParams } from "react-router"
import ReviewCard from "../components/ReviewCard"
import Banner from "../components/Banner"
import { useGlobalContext } from "../contexts/GlobalContext"
import { useEffect } from "react"
export default function FilmSelected() {
    const { id } = useParams()
    const { selectedFilm, getSelectedFilm, stars } = useGlobalContext()


    useEffect(() => {
        getSelectedFilm(id)
    }, [id])
    console.log(selectedFilm);



    return (
        <>
            <Banner title={`you selected film is: ${selectedFilm.title}`} subtitle={`${selectedFilm.abstract}`} leadtext={`${selectedFilm.genre}`} button={'add reviews'} />
            <section className="reviews">
                <div className="container">
                    <div className="text-end mb-4">
                        <strong>Average:</strong> <span className="text-warning">{stars(selectedFilm.average_vote)}</span>
                        {selectedFilm.average_vote && <div className="text-muted">{Number(selectedFilm.average_vote).toFixed(1)}</div>}
                        {/* <div>{selectedFilm.average_vote.toFixed(2)}</div> */}
                    </div>
                    {!selectedFilm.reviews ? <h1>no found</h1> : selectedFilm.reviews.map(review => <ReviewCard key={review.id} review={review} />)}


                </div>
            </section>

        </>

    )
}