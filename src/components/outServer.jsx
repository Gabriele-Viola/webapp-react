import { useGlobalContext } from "../contexts/GlobalContext"

export default function OutServer() {
    const { noFound } = useGlobalContext()
    return (
        <>
            {noFound ?
                <h1 className="text-capitalize"> {noFound}</h1> :
                <h1>Server does not respond, we apologize for the inconvenience</h1>}
        </>
    )
}