import { Link } from "react-router-dom";



export const PageNotFound = () => {
    return (
        <div className="bg-dark text-light min-vh-100 d-flex flex-column justify-content-center align-items-center py-5 text-center" data-bs-theme="dark">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6">

                        {/* Brand Logo */}
                        <Link to="/" className="d-inline-flex align-items-center gap-2 text-decoration-none mb-4">
                            <span
                                className="p-2 rounded-3 text-white d-inline-flex align-items-center justify-content-center"
                                style={{ background: 'linear-gradient(135deg, #0ea5e9, #6366f1)', width: '40px', height: '40px' }}
                            >
                                <i className="bi bi-stars fs-5"></i>
                            </span>
                            <span className="fw-bold fs-3 text-white">Nexus.AI</span>
                        </Link>

                        {/* Error Graphic / Text */}
                        <div className="my-3">
                            <h1
                                className="display-1 fw-extrabold mb-0"
                                style={{
                                    background: 'linear-gradient(135deg, #38bdf8, #818cf8)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    fontSize: '8rem',
                                    fontWeight: '900'
                                }}
                            >
                                404
                            </h1>
                            <h2 className="fw-bold text-white mb-3">Neural Pathway Not Found</h2>
                            <p className="text-secondary lead mb-4 mx-auto" style={{ maxWidth: '480px' }}>
                                The page or endpoint you are looking for has been moved, deleted, or does not exist in our vector space.
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                            <Link
                                to="/"
                                className="btn btn-lg px-4 py-2 text-white fw-semibold border-0"
                                style={{ background: 'linear-gradient(135deg, #0ea5e9, #6366f1)' }}
                            >
                                <i className="bi bi-house me-2"></i>
                                Return Home
                            </Link>
                            <button
                                onClick={() => window.history.back()}
                                className="btn btn-outline-secondary text-light btn-lg px-4 py-2 border-opacity-25"
                            >
                                <i className="bi bi-arrow-left me-2"></i>
                                Go Back
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
