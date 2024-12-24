import { useNavigate, useParams } from "react-router"
import ReviewCard from "../components/ReviewCard"
import Banner from "../components/Banner"
import { useGlobalContext } from "../contexts/GlobalContext"
import React, { useEffect, useState } from "react"
import AppFormRev from "../components/AppFormRev"
import Loading from "../components/Loading"
import ModifyRevForm from "../components/ModifyRevForm"
export default function FilmSelected() {
    const { id } = useParams()
    const { stars, average, isLoading, setIsLoading, filmUrl, refresh, setErrorMessage } = useGlobalContext()
    const [selectedFilm, SetSelectedFilm] = useState([])
    const navigateTo = useNavigate()

    const voteArray = selectedFilm.reviews?.map(review => review.vote)


    useEffect(() => {


        setIsLoading(true)

        fetch(`${filmUrl}/${id}`)
            .then((res => res.json()))
            .then(data => {
                const found = data.err
                if (!found) {
                    SetSelectedFilm(data)
                    setIsLoading(false)

                } else {
                    // setNoFound(data.err)
                    setErrorMessage(true)
                    navigateTo('/404')
                }

                // SetSelectedFilm(data)
                console.log(found);

                // setIsLoading(false)
            }).catch((err) =>
                console.error(err)
            )



    }, [refresh])


    return (
        <>
            {isLoading ? <Loading /> :

                <>
                    <Banner title={`your selected film is: ${selectedFilm.title}`} subtitle={`${selectedFilm.abstract}`} leadtext={`${selectedFilm.genre}`} button={'add reviews'}

                    />

                    <div className="text-end mb-4 container">
                        <strong>Average:</strong> <span className="text-warning">{stars(average(voteArray))}</span>
                        <div className="text-muted">{Number(average(voteArray)).toFixed(1)}</div>

                    </div>
                    <section className="reviews">
                        <div className="container">
                            <AppFormRev movie_id={id} />



                            {selectedFilm.reviews?.map(review =>

                                <React.Fragment key={review.id}>

                                    <ModifyRevForm reviewId={review.id} />
                                    <ReviewCard key={review.id} review={review} />
                                </React.Fragment>


                            )}



                        </div>
                    </section>
                </>
            }


        </>

    )
}