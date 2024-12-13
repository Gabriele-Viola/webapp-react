import { Link } from "react-router";

export default function NotFound() {
    return (
        <>
            <div className="container my-4" style={{ height: 'calc(100vh - 220px)' }}>
                <h1 className="mb-3">404 Page Not Found!</h1>
                <Link to={'/'} className="btn btn-secondary"> <span><i className="bi bi-house-door-fill"></i></span>  go back to home</Link>
            </div>
        </>
    )
}