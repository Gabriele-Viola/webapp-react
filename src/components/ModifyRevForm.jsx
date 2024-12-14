import { useGlobalContext } from "../contexts/GlobalContext"

export default function ModifyRevForm() {
    const { HandleFormToggle } = useGlobalContext()


    return (
        <div id='modify-element' className="modify-element h-100 w-100 position-fixed top-0 start-0 bg-dark bg-opacity-25 d-none" >
            <div className="text-secondary text-end m-5" onClick={() => HandleFormToggle('modify-element')} >
                <button className="btn bg-danger shadow ">
                    <i className="bi bi-x-lg"></i>
                </button>
            </div>
            <div className="card position-absolute top-50 start-50 translate-middle bg-light">
                <div className="card-body ">
                    <h4 className="mb-3">Modify your review</h4>
                    <form >
                        <label htmlFor="modifyRev" className="mb-2">insert below your modify</label>
                        <textarea name="modifyRev" id="modifyRev" className="form-control mb-3"></textarea>
                        <button type="submit" className="btn btn-warning text-light">Submit your change</button>
                    </form>
                </div>
            </div>
        </div>
    )
}