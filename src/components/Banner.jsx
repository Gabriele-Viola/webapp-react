import { useGlobalContext } from "../contexts/GlobalContext"

export default function Banner({ title, subtitle, leadtext, button }) {
    const { HandleFormToggle } = useGlobalContext()

    return (
        <div className="banner bg-warning text-dark py-4 mb-5">
            <div className="container-lg">
                <h1>{title}</h1>
                <h3 className="text-muted">{subtitle}</h3>
                <p className="lead">{leadtext}</p>
                {button && <button className="btn btn-primary" onClick={HandleFormToggle}>{button}</button>}
            </div>
        </div>
    )
}