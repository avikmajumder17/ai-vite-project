import { Link } from "react-router-dom";



export const Footer = () => {
    return (
        <footer className="border-top border-secondary border-opacity-10 py-5 bg-black bg-opacity-40">
            <div className="container">
                <div className="row g-4 justify-content-between mb-5">
                    <div className="col-lg-5 col-md-4">
                        <div className="d-flex align-items-center gap-2 mb-3">
                            <span
                                className="p-2 rounded-3 text-white d-inline-flex align-items-center justify-content-center"
                                style={{ background: 'linear-gradient(135deg, #0ea5e9, #6366f1)', width: '28px', height: '28px' }}
                            >
                                <i className="bi bi-stars"></i>
                            </span>
                            <span className="fw-bold text-white fs-5">AI.AI</span>
                        </div>
                        <p className="text-secondary small pe-lg-5">
                            Empowering developers globally with scalable, secure, and fast artificial intelligence infrastructure.
                        </p>
                    </div>

                    <div className="col-6 col-md-3">
                        <h6 className="text-white fw-bold small text-uppercase mb-3">Company</h6>
                        <ul className="list-unstyled text-secondary small d-flex flex-column gap-2 mb-0">
                            <li><a href="#" className="text-decoration-none text-secondary">About Us</a></li>
                            
                            <li><Link to="/blogs" className="text-decoration-none text-secondary">Blog</Link></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-3">
                        <h6 className="text-white fw-bold small text-uppercase mb-3">Legal</h6>
                        <ul className="list-unstyled text-secondary small d-flex flex-column gap-2 mb-0">
                            <li><a href="#" className="text-decoration-none text-secondary">Privacy Policy</a></li>
                            <li><a href="#" className="text-decoration-none text-secondary">Terms of Service</a></li>
                            <li><a href="#" className="text-decoration-none text-secondary">Security</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-4 border-top border-secondary border-opacity-10 d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3 text-secondary small">
                    <p className="mb-0">&copy; {new Date().getFullYear()} AI.AI Inc. All rights reserved.</p>
                    <div className="d-flex gap-3">
                        <a href="#" className="text-secondary"><i class="bi bi-twitter-x"></i></a>
                        <a href="#" className="text-secondary"><i class="bi bi-github"></i></a>
                        <a href="#" className="text-secondary"><i class="bi bi-discord"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}