import "./Loader.css";



export const Loader = () => {
    return (
        <div className="ai-loader bg-dark bg-opacity-75 backdrop-blur">
            <div className="ai-loader-icon">
                ✨
            </div>

            <div className="ai-loader-text d-flex">
                AI is getting the site ready<span className="dots">...</span>
            </div>
        </div>
    )
}