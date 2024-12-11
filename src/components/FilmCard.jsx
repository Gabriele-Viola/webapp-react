import { Link } from "react-router";

export default function FilmCard() {
    return (
        <div className="card">
            <div className="card-body">
                <h3>film title</h3>
                <h4>film author</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, libero.</p>
                <Link to="/Films/1" className="btn btn-secondary">Read More</Link>
            </div>
        </div>
    )
}