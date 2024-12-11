import { Link } from "react-router";

export default function AppHeader() {
    return (
        <header className="py-2 px-2 bg-danger">

            <Link className="text-decoration-none text-dark" to='/'>
                <strong>Films</strong>
            </Link>
        </header>


    )
}