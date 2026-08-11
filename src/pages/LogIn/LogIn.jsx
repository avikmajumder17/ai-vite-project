import { Link } from "react-router-dom";



export const LogIn = () => {
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
                            <h2 className="fw-bold text-white mb-1">Welcome back</h2>
                            <p className="text-secondary small">Enter your credentials to access your account</p>
                        </div>

                        {/* Auth Card */}
                        <div className="card bg-black bg-opacity-40 border-secondary border-opacity-25 rounded-4 p-4 shadow-lg">

                            {/* OAuth Buttons */}
                            <div className="d-flex flex-column gap-2 mb-4">
                                <button type="button" className="btn btn-outline-secondary text-light border-opacity-25 d-flex align-items-center justify-content-center gap-2 py-2">
                                    <i className="bi bi-google"></i>
                                    <span className="small font-medium">Continue with Google</span>
                                </button>
                                <button type="button" className="btn btn-outline-secondary text-light border-opacity-25 d-flex align-items-center justify-content-center gap-2 py-2">
                                    <i className="bi bi-github"></i>
                                    <span className="small font-medium">Continue with GitHub</span>
                                </button>
                            </div>

                            {/* Divider */}
                            <div className="d-flex align-items-center my-3">
                                <hr className="flex-grow-1 border-secondary border-opacity-25 m-0" />
                                <span className="px-3 text-secondary small text-uppercase" style={{ fontSize: '0.75rem' }}>Or continue with email</span>
                                <hr className="flex-grow-1 border-secondary border-opacity-25 m-0" />
                            </div>

                            {/* Sign In Form */}
                            <form>
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
                                    <div className="d-flex justify-content-between align-items-center mb-1">
                                        <label htmlFor="password" className="form-label text-secondary small mb-0">Password</label>
                                        <a href="#" className="text-info text-decoration-none small">Forgot password?</a>
                                    </div>
                                    <div className="input-group">
                                        <span className="input-group-text bg-dark border-secondary border-opacity-25 text-secondary">
                                            <i className="bi bi-lock"></i>
                                        </span>
                                        <input
                                            type="password"
                                            className="form-control bg-dark border-secondary border-opacity-25 text-light"
                                            id="password"
                                            placeholder="••••••••"
                                        />
                                    </div>
                                </div>

                                {/* Remember Me */}
                                <div className="mb-4 form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input bg-dark border-secondary border-opacity-25"
                                        id="rememberMe"
                                    />
                                    <label className="form-check-label text-secondary small" htmlFor="rememberMe">
                                        Remember me for 30 days
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="button"
                                    className="btn w-100 py-2 text-white fw-semibold border-0"
                                    style={{ background: 'linear-gradient(135deg, #0ea5e9, #6366f1)' }}
                                >
                                    Sign In
                                </button>
                            </form>
                        </div>

                        {/* Footer Sign Up Link */}
                        <p className="text-center text-secondary small mt-4">
                            Don't have an account?{' '}
                            <Link to="/register" className="text-info text-decoration-none fw-semibold">
                                Sign up
                            </Link>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}
