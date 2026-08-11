import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg border-bottom border-secondary border-opacity-25 sticky-top bg-dark bg-opacity-75 backdrop-blur py-3" >
            <div className="container">
                <Link to="/" className="navbar-brand d-flex align-items-center gap-2 fw-bold text-white" href="#">
                    <span
                        className="p-2 rounded-3 text-white d-inline-flex align-items-center justify-content-center"
                        style={{ background: 'linear-gradient(135deg, #0ea5e9, #6366f1)', width: '32px', height: '32px' }}
                    >
                        <i className="bi bi-stars"></i>
                    </span>
                    <span>AI.AI</span>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item"><a className="nav-link px-3" href="#features">Features</a></li>
                        <li className="nav-item"><a className="nav-link px-3" href="#workflow">How It Works</a></li>
                        <li className="nav-item"><a className="nav-link px-3" href="#stats">Stats</a></li>
                        <li className="nav-item"><a className="nav-link px-3" href="#pricing">Pricing</a></li>
                    </ul>
                    <div className="d-flex gap-2 mt-3 mt-lg-0">
                        <Link to="/login">
                            <button className="btn btn-outline-secondary border-opacity-50 text-light btn-sm px-3">
                                Sign In
                            </button>
                        </Link>

                        <Link to="/register">
                            <button
                                className="btn btn-sm px-3 text-white fw-semibold border-0"
                                style={{ background: 'linear-gradient(135deg, #0ea5e9, #6366f1)' }}
                            >
                                Get Started
                            </button>
                        </Link>                        
                    </div>
                </div>
            </div>
        </nav>
    )
}