import { useParams } from "react-router"
import ReviewCard from "../components/ReviewCard"
import Banner from "../components/Banner"
import { useGlobalContext } from "../contexts/GlobalContext"
import { useEffect, useState } from "react"
import AppFormRev from "../components/AppFormRev"
export default function FilmSelected() {
    const { id } = useParams()
    const { selectedFilm, getSelectedFilm, stars, success, average, voteArray, HandleFormToggle } = useGlobalContext()


    useEffect(() => {
        getSelectedFilm(id)
    }, [success])


    return (
        <>
            <Banner title={`your selected film is: ${selectedFilm.title}`} subtitle={`${selectedFilm.abstract}`} leadtext={`${selectedFilm.genre}`} button={'add reviews'} />

            <section className="reviews">
                <div className="container">

                    <AppFormRev movie_id={id} />
                    <div className="text-end mb-4">
                        <strong>Average:</strong> <span className="text-warning">{stars(average(voteArray))}</span>
                        <div className="text-muted">{Number(average(voteArray)).toFixed(1)}</div>

                    </div>
                    {!selectedFilm.reviews ? <h1>no found</h1> : selectedFilm.reviews.map(review => <ReviewCard key={review.id} review={review} />)}


                </div>
            </section>
            <div id='modify-element' className="modify-element h-100 w-100 position-absolute top-0 start-0 bg-dark bg-opacity-25 d-none" >
                <div className="text-secondary text-end m-5" onClick={() => HandleFormToggle('modify-element')} >
                    <button className="btn bg-danger shadow ">

                        <i className="bi bi-x-lg"></i>
                    </button>
                </div>

                <div className="card position-absolute top-50 start-50 translate-middle bg-light">
                    <div className="card-body ">
                        <h4 className="mb-3">Modify your review</h4>
                        <label htmlFor="modifyRev" className="mb-2">insert below your modify</label>
                        <textarea name="modifyRev" id="modifyRev" className="form-control mb-3"></textarea>
                        <button className="btn btn-warning text-light">Submit your change</button>
                    </div>
                </div>
            </div>

        </>

    )
}