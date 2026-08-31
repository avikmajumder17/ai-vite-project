import { useLayoutEffect, useState } from "react";

import api from "../../api/axios";
import { Loader } from "../../components/Loader";



export default function About() {
    const [aboutUsPage, setAboutUsPage] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useLayoutEffect(() => {
        const fetchAboutUsPage = async () => {
            try {
                setIsLoading(true);

                const response = await api.get("/aboutPage");

                setAboutUsPage(response?.data?.data?.aboutPage);
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAboutUsPage();
    }, []);



    return (
        <>
            {isLoading && <Loader />}

            <div className="about-page">

                {/* Hero Section */}
                <section className="py-5 bg-dark text-white">
                    <div className="container py-5">
                        <div className="row align-items-center">

                            <div className="col-lg-7">
                                <span className="badge bg-primary px-3 py-2 mb-3">{aboutUsPage?.heroSubHeading}</span>

                                <h1 className="display-4 fw-bold mb-4">
                                    {aboutUsPage?.heroHeading}
                                    {/* Building the Future with
                                    <span className="text-primary"> Artificial Intelligence</span> */}
                                </h1>

                                <p className="lead text-light mb-4">{aboutUsPage?.heroDescription}</p>

                                <button className="btn btn-primary btn-lg px-4">
                                    Explore Our Solutions
                                </button>
                            </div>

                            <div className="col-lg-5 mt-5 mt-lg-0 text-center">
                                <div className="p-5 bg-primary rounded-4 shadow-lg">
                                    {/* <i className="bi bi-cpu display-1"></i>

                                    <h3 className="mt-4 fw-bold">
                                        AI-Powered Innovation
                                    </h3>

                                    <p className="mb-0">
                                        Turning complex problems into intelligent solutions.
                                    </p> */}

                                    <img src={aboutUsPage?.heroImage} alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                {/* Who We Are */}
                <section className="py-5">
                    <div className="container py-5">

                        <div className="row align-items-center g-5">

                            <div className="col-lg-6">
                                <span className="text-primary fw-semibold">{aboutUsPage?.whoWeAreSubHeading}</span>

                                <h2 className="display-6 fw-bold mt-2 mb-4">{aboutUsPage?.whoWeAreHeading}</h2>

                                <p className="text-secondary">
                                    Our mission is to make artificial intelligence practical
                                    and accessible for businesses of every size.
                                </p>

                                <p className="text-secondary">{aboutUsPage?.whoWeAreDescription}</p>
                            </div>

                            <div className="col-lg-6">
                                <div className="row g-3">
                                    {aboutUsPage?.whoWeAreCards?.map((whoWeAreCard) => (
                                        <div className="col-6">
                                            <div className="p-4 bg-light rounded-4 h-100">
                                                <i className={`bi ${whoWeAreCard?.icon} text-primary fs-1`}></i>
                                                
                                                <h5 className="fw-bold text-secondary mt-3 mb-0">{whoWeAreCard?.title}</h5>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* What We Do */}
                <section className="py-5 bg-dark">
                    <div className="container py-5">

                        <div className="text-center mb-5">
                            <span className="text-primary fw-semibold">{aboutUsPage?.whatWeDoSubHeading}</span>

                            <h2 className="display-6 fw-bold mt-2">{aboutUsPage?.whatWeDoHeading}</h2>

                            <p className="text-secondary mx-auto" style={{ maxWidth: "650px" }}>{aboutUsPage?.whatWeDoDescription}</p>
                        </div>

                        <div className="row g-4">
                            {aboutUsPage?.whatWeDoCards?.map((whatWeDoCard) => (
                                <div className="col-md-6 col-lg-4">
                                    <div className="card shadow-sm rounded-4 h-100 p-4">
                                        <i className={`bi ${whatWeDoCard?.icon} bi-chat-dots text-primary fs-1`}></i>

                                        <h4 className="fw-bold mt-4">{whatWeDoCard?.title}</h4>

                                        <p className="text-secondary">{whatWeDoCard?.description}</p>
                                    </div>
                                </div>
                            ))}                            
                        </div>
                    </div>
                </section>


                {/* Mission */}
                <section className="py-5">
                    <div className="container py-5">

                        <div className="row justify-content-center">
                            <div className="col-lg-9 text-center">

                                <span className="text-primary fw-semibold">{aboutUsPage?.ourMissionSubHeading}</span>

                                <h2 className="display-6 fw-bold mt-3 mb-4">{aboutUsPage?.ourMissionHeading}</h2>

                                <p className="fs-5 text-secondary">{aboutUsPage?.ourMissionDescription}</p>

                            </div>
                        </div>

                    </div>
                </section>


                {/* Stats */}
                <section className="py-5 bg-dark text-white">
                    <div className="container py-4">
                        <div className="row text-center g-4">
                            {aboutUsPage?.ourMissionStats?.map((ourMissionStat) => (
                                <div className="col-6 col-lg-3">
                                    <h2 className="display-5 fw-bold text-primary">
                                        {ourMissionStat?.stat}+
                                    </h2>
                                    <p className="mb-0 text-light">{ourMissionStat?.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* CTA */}
                <section className="py-5">
                    <div className="container py-5">

                        <div className="bg-primary text-white rounded-4 p-5 text-center">

                            <h2 className="display-6 fw-bold">
                                Ready to Build with AI?
                            </h2>

                            <p className="lead mt-3 mb-4">
                                Let's turn your ideas into intelligent solutions.
                            </p>

                            <button className="btn btn-light btn-lg px-4">
                                Get Started
                            </button>

                        </div>

                    </div>
                </section>

            </div>
        </>
    )
}