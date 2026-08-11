import { Link } from "react-router-dom";



export const Register = () => {
    return (
        <div className="bg-dark text-light min-vh-100 d-flex flex-column justify-content-center py-5" data-bs-theme="dark">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-5 col-xl-4">

                        {/* Header / Brand Logo */}
                        <div className="text-center mb-4">
                            <Link to="/" className="d-inline-flex align-items-center gap-2 text-decoration-none mb-3">
                                <span
                                    className="p-2 rounded-3 text-white d-inline-flex align-items-center justify-content-center"
                                    style={{ background: 'linear-gradient(135deg, #0ea5e9, #6366f1)', width: '40px', height: '40px' }}
                                >
                                    <i className="bi bi-stars fs-5"></i>
                                </span>
                                <span className="fw-bold fs-3 text-white">Nexus.AI</span>
                            </Link>
                            <h2 className="fw-bold text-white mb-1">Create an account</h2>
                            <p className="text-secondary small">Start building next-gen AI applications today</p>
                        </div>

                        {/* Auth Card */}
                        <div className="card bg-black bg-opacity-40 border-secondary border-opacity-25 rounded-4 p-4 shadow-lg">

                            {/* OAuth Buttons */}
                            <div className="d-flex flex-column gap-2 mb-4">
                                <button type="button" className="btn btn-outline-secondary text-light border-opacity-25 d-flex align-items-center justify-content-center gap-2 py-2">
                                    <i className="bi bi-google"></i>
                                    <span className="small font-medium">Sign up with Google</span>
                                </button>
                                <button type="button" className="btn btn-outline-secondary text-light border-opacity-25 d-flex align-items-center justify-content-center gap-2 py-2">
                                    <i className="bi bi-github"></i>
                                    <span className="small font-medium">Sign up with GitHub</span>
                                </button>
                            </div>

                            {/* Divider */}
                            <div className="d-flex align-items-center my-3">
                                <hr className="flex-grow-1 border-secondary border-opacity-25 m-0" />
                                <span className="px-3 text-secondary small text-uppercase" style={{ fontSize: '0.75rem' }}>Or sign up with email</span>
                                <hr className="flex-grow-1 border-secondary border-opacity-25 m-0" />
                            </div>

                            {/* Register Form */}
                            <form>
                                {/* Full Name Field */}
                                <div className="mb-3">
                                    <label htmlFor="fullName" className="form-label text-secondary small mb-1">Full Name</label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-dark border-secondary border-opacity-25 text-secondary">
                                            <i className="bi bi-person"></i>
                                        </span>
                                        <input
                                            type="text"
                                            className="form-control bg-dark border-secondary border-opacity-25 text-light"
                                            id="fullName"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                </div>

                                {/* Email Field */}
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label text-secondary small mb-1">Email address</label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-dark border-secondary border-opacity-25 text-secondary">
                                            <i className="bi bi-envelope"></i>
                                        </span>
                                        <input
                                            type="email"
                                            className="form-control bg-dark border-secondary border-opacity-25 text-light"
                                            id="email"
                                            placeholder="name@example.com"
                                        />
                                    </div>
                                </div>

                                {/* Password Field */}
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label text-secondary small mb-1">Password</label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-dark border-secondary border-opacity-25 text-secondary">
                                            <i className="bi bi-lock"></i>
                                        </span>
                                        <input
                                            type="password"
                                            className="form-control bg-dark border-secondary border-opacity-25 text-light"
                                            id="password"
                                            placeholder="Create a strong password"
                                        />
                                    </div>
                                </div>

                                {/* Terms & Conditions */}
                                <div className="mb-4 form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input bg-dark border-secondary border-opacity-25"
                                        id="terms"
                                    />
                                    <label className="form-check-label text-secondary small" htmlFor="terms">
                                        I agree to the <a href="#" className="text-info text-decoration-none">Terms of Service</a> and <a href="#" className="text-info text-decoration-none">Privacy Policy</a>
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="button"
                                    className="btn w-100 py-2 text-white fw-semibold border-0"
                                    style={{ background: 'linear-gradient(135deg, #0ea5e9, #6366f1)' }}
                                >
                                    Create Account
                                </button>
                            </form>
                        </div>

                        {/* Footer Sign In Link */}
                        <p className="text-center text-secondary small mt-4">
                            Already have an account?{' '}
                            <Link to="/login" className="text-info text-decoration-none fw-semibold">
                                Sign in
                            </Link>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}
