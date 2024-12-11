import FilmCard from "../components/FilmCard";

export default function FilmsPage() {
    return (
        <div className="container">
            <section className="mb-2">

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
                    <div className="col">
                        <FilmCard />

                    </div>
                    <div className="col">
                        <FilmCard />


                    </div>
                    <div className="col">
                        <FilmCard />


                    </div>
                    <div className="col">
                        <FilmCard />

                    </div>
                    <div className="col">
                        <FilmCard />


                    </div>
                </div>
            </section>
        </div>
    )
}