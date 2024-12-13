import Banner from "../components/Banner";
import FilmCard from "../components/FilmCard";
import { GlobalContextProvider, useGlobalContext } from "../contexts/GlobalContext";

export default function FilmsPage() {
    const { films } = useGlobalContext()
    return (
        <>

            <Banner title='All-Films' subtitle='realy all' leadtext='Lorem ipsum dolor sit amet.' />
            <section className="mb-4 py-2">
                <div className="container">


                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
                        {films ?
                            films?.map(film =>
                                <div className="col" key={film.id}>
                                    <FilmCard film={film} />
                                </div>

                            )
                            : <h1>Loading...</h1>
                        }
                        {/* {films?.map(film =>
                            <div className="col" key={film.id}>
                                <FilmCard film={film} />
                            </div>

                        )} */}

                    </div>
                </div>
            </section>
        </>
    )
}