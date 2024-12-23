import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import FilmCard from "../components/FilmCard";
import Loading from "../components/Loading";
import { useGlobalContext } from "../contexts/GlobalContext";

export default function FilmsPage() {
    const [films, setFilms] = useState([])

    const { isLoading, setIsLoading, filmUrl, errorMessage, setErrorMessage } = useGlobalContext()

    useEffect(() => {
        setIsLoading(true)
        fetch(`${filmUrl}`)
            .then((res => res.json()))
            .then(data => {
                setIsLoading(false)
                setFilms(data.films)
            }).catch((err) => {
                console.error('fetch error:', err);
                setErrorMessage(true)

            })
    }, [])


    return (
        <>
            {isLoading ? <Loading /> :

                <>
                    <Banner title='All-Films' subtitle='realy all' leadtext='Lorem ipsum dolor sit amet.' />
                    <section className="mb-4 py-2">
                        <div className="container">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
                                {films?.map(film => <div className="col" key={film.id}><FilmCard film={film} /></div>)}
                            </div>
                        </div>
                    </section>
                </>
            }

        </>
    )
}