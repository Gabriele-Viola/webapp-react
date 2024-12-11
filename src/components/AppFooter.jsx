import { Link } from "react-router";

export default function AppFooter() {
    return (
        <footer>
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-3">
                    <div className="col">
                        <h4>about us</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam commodi esse voluptates eos consequatur fugiat ut dolorum. Ut, veniam obcaecati?</p>
                    </div>
                    <div className="col">
                        <h4>corporate</h4>
                        <ul className="list-unstyled">
                            <li>
                                <Link>Link 1</Link>
                            </li>
                            <li>
                                <Link>Link 2</Link>
                            </li>
                            <li>
                                <Link>Link 3</Link>
                            </li>
                            <li>
                                <Link>Link 4</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>privacy</h4>
                        <ul className="list-unstyled">
                            <li>
                                <Link>Link 1</Link>
                            </li>
                            <li>
                                <Link>Link 2</Link>
                            </li>
                            <li>
                                <Link>Link 3</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}