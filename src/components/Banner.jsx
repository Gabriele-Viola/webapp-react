import { Link } from "react-router";

export default function Banner({ title, subtitle, leadtext, button }) {
    return (
        <div className="banner bg-warning text-dark py-4 mb-5">
            <div className="container-lg">
                <h1>{title}</h1>
                <h3 className="text-muted">{subtitle}</h3>
                <p className="lead">{leadtext}</p>
                {button && <Link className="btn btn-primary">{button}</Link>}
            </div>
        </div>
    )
}