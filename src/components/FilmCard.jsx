import { Link } from "react-router";

export default function FilmCard({ film }) {
    return (
        <div className="card h-100 ">
            <div className="card-body d-flex flex-column justify-content-between">
                <h3>{film.title}</h3>
                <h5>{film.genre}</h5>
                <p>{film.abstract}</p>
                <div className="mb-1">Direct by: {film.director}</div>
                <div className="mb-2">realese: {film.release_year}</div>
                <div>
                    <Link to={`/films/${film.id}`} className="btn btn-secondary" >Read More</Link>
                </div>
            </div>
        </div>
    )
}