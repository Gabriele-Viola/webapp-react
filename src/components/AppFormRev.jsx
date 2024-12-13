import { useGlobalContext } from "../contexts/GlobalContext"

export default function AppFormRev() {
    const { HandleFormSubmit, userName, success, setUserName, setRating, rating, review, setReview, errorMessage } = useGlobalContext()




    return (
        <div id="form-card" className="card mb-4 d-none">
            <div className="card-body">
                <form onSubmit={HandleFormSubmit}>
                    {success && <div className="text-success"> <i className="bi bi-check"></i><strong>{success}</strong></div>}
                    <div id="inputForm" className="">

                        <h3 className="mb-3">Add Review Below</h3>
                        <div className="text-muted mb-3">Name, rating and review necessary</div>
                        <div className="mb-3 ">
                            <label htmlFor="name" className="mb-2">Name</label>
                            <input type="text" username='name' className="form-control" placeholder="type your name" value={userName} onChange={(e) => setUserName(e.target.value)} required />
                        </div>
                        <div className="rating mb-3 text-warning">
                            {[1, 2, 3, 4, 5].map(n => <i key={n} className={`bi bi-star${n <= rating ? '-fill' : ''} `} onClick={() => setRating(n)}></i>)}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="review" className="mb-2">Review</label>
                            <textarea name="review" id="review" placeholder="Type what you think" className="form-control" value={review} onChange={(e) => setReview(e.target.value)}></textarea>
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary">
                                <i className="bi bi-send-fill"></i>
                                <strong> Send</strong>
                            </button>
                            {errorMessage && <span className="text-danger">{errorMessage}</span>}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}