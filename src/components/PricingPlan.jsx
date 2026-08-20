export const PricingPlan = ({ pricingPlan }) => {

    

    return (
        <div className="card h-100 p-4 bg-black bg-opacity-40 border-secondary border-opacity-25 rounded-4 d-flex flex-column justify-content-between">
            <div>
                <h5 className="fw-bold text-white">{pricingPlan?.planName}</h5>
                <p className="text-secondary small">{pricingPlan?.planPurpose}</p>
                <div className="my-4">
                    <span className="display-5 fw-bold text-white">${pricingPlan?.price}</span>
                    <span className="text-secondary"> / {pricingPlan?.duration}</span>
                </div>
                <ul className="list-unstyled text-secondary small d-flex flex-column gap-2 mb-4">
                    {pricingPlan?.planDetails.map(detail => (
                        <li><i className="bi bi-check-lg text-info me-2"></i> {detail}</li>
                    ))}                    
                </ul>
            </div>
            <button className="btn btn-outline-secondary text-light w-100 border-opacity-25">
                Get Started Free
            </button>
        </div>
    )
}
