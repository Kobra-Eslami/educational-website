import {useEffect} from "react";

export default function Home() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            // eslint-disable-next-line @typescript-eslint/no-require-imports
            require("bootstrap/dist/js/bootstrap.bundle.min.js");
        }
    }, []);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarToggler" aria-controls="navbarTogglerDemo03"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="#">LearnWM</a>
                    <div className="collapse navbar-collapse" id="navbarToggler">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Categories
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-disabled="true">Courses</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-disabled="true">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-disabled="true">Contact Us</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search"
                                   aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}
