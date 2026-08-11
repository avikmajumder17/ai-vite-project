export const PricingPlan = () => {
    return (
        <div className="card h-100 p-4 bg-black bg-opacity-40 border-secondary border-opacity-25 rounded-4 d-flex flex-column justify-content-between">
            <div>
                <h5 className="fw-bold text-white">Developer</h5>
                <p className="text-secondary small">For side projects and testing.</p>
                <div className="my-4">
                    <span className="display-5 fw-bold text-white">$0</span>
                    <span className="text-secondary"> / month</span>
                </div>
                <ul className="list-unstyled text-secondary small d-flex flex-column gap-2 mb-4">
                    <li><i className="bi bi-check-lg text-info me-2"></i> 100k API Tokens / month</li>
                    <li><i className="bi bi-check-lg text-info me-2"></i> Access to Base Models</li>
                    <li><i className="bi bi-check-lg text-info me-2"></i> Community Support</li>
                </ul>
            </div>
            <button className="btn btn-outline-secondary text-light w-100 border-opacity-25">
                Get Started Free
            </button>
        </div>
    )
}
