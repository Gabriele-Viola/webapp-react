import { useParams } from "react-router"
import ReviewCard from "../components/ReviewCard"
import Banner from "../components/Banner"
import { useGlobalContext } from "../contexts/GlobalContext"
import { useEffect, useState } from "react"
import AppFormRev from "../components/AppFormRev"
import Loading from "../components/Loading"
export default function FilmSelected() {
    const { id } = useParams()
    const { stars, success, average, voteArray, isLoading, setIsLoading, filmUrl } = useGlobalContext()
    const [selectedFilm, SetSelectedFilm] = useState([])


    useEffect(() => {


        setIsLoading(true)

        fetch(`${filmUrl}/${id}`)
            .then((res => res.json()))
            .then(data => {
                const film = data
                SetSelectedFilm(film)
                setIsLoading(false)
            })



    }, [success])


    return (
        <>
            {isLoading ? <Loading /> :
                <>
                    <Banner title={`your selected film is: ${selectedFilm.title}`} subtitle={`${selectedFilm.abstract}`} leadtext={`${selectedFilm.genre}`} button={'add reviews'} />

                    <section className="reviews">
                        <div className="container">

                            <div className="text-end mb-4">
                                <strong>Average:</strong> <span className="text-warning">{stars(average(voteArray))}</span>
                                <div className="text-muted">{Number(average(voteArray)).toFixed(1)}</div>

                            </div>
                            <AppFormRev movie_id={id} />
                            {!selectedFilm.reviews ? <h1>no found</h1> : selectedFilm.reviews.map(review => <ReviewCard key={review.id} review={review} />)}


                        </div>
                    </section>
                </>
            }




        </>

    )
}