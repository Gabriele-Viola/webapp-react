import { useGlobalContext } from "../contexts/GlobalContext"

export default function Banner({ title, subtitle, leadtext, button }) {
    const { HandleFormToggle } = useGlobalContext()
    // 'form-card'
    return (
        <div className="banner bg-warning text-dark py-4 mb-5">
            <div className="container-lg">
                <h1>{title}</h1>
                <h3 className="text-body-secondary">{subtitle}</h3>
                <p className="lead">{leadtext}</p>
                {button && <button className="btn btn-primary" onClick={() => HandleFormToggle('form-card')}>{button}</button>}
            </div>
        </div>
    )
}