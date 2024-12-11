import { Link } from "react-router";

export default function AppFooter() {
    return (
        <footer className="bg-danger py-3">
            <div className="container">
                <div className="row">
                    <div className="col-1 col-sm-6">
                        <h4>about us</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam commodi esse voluptates eos consequatur fugiat ut dolorum. Ut, veniam obcaecati?</p>
                    </div>
                    <div className="col-1 col-sm-3">
                        <h4 className="text-end">corporate</h4>
                        <ul className="list-unstyled text-end">
                            <li>
                                <Link className="text-decoration-none text-warning">Link 1</Link>
                            </li>
                            <li>
                                <Link className="text-decoration-none text-warning">Link 2</Link>
                            </li>
                            <li>
                                <Link className="text-decoration-none text-warning">Link 3</Link>
                            </li>
                            <li>
                                <Link className="text-decoration-none text-warning">Link 4</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-1 col-sm-3">
                        <h4 className="text-end">privacy</h4>
                        <ul className="list-unstyled text-end">
                            <li>
                                <Link className="text-decoration-none text-warning" >Link 1</Link>
                            </li>
                            <li>
                                <Link className="text-decoration-none text-warning">Link 2</Link>
                            </li>
                            <li>
                                <Link className="text-decoration-none text-warning">Link 3</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}