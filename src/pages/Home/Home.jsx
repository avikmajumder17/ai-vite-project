import { PricingPlan } from "../../components/PricingPlan"

export const Home = () => {
    return (
        <>
            {/* SECTION 1: HERO */}
            <section className="py-5 my-lg-5 text-center position-relative overflow-hidden">
                <div className="container position-relative z-1 my-4">
                    <span className="badge rounded-pill bg-info bg-opacity-10 text-info border border-info border-opacity-25 px-3 py-2 mb-4">
                        <i className="bi bi-stars me-1"></i> Introducing AI 3.0 Engine
                    </span>

                    <h1 className="display-3 fw-bold text-white mb-4 mx-auto" style={{ maxWidth: '850px' }}>
                        Build Next-Generation{' '}
                        <span style={{ background: 'linear-gradient(135deg, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            AI Applications
                        </span>
                    </h1>

                    <p className="lead text-secondary mx-auto mb-5" style={{ maxWidth: '650px' }}>
                        Automate complex workflows, deploy autonomous agents, and scale your LLM infrastructure using a unified visual pipeline.
                    </p>

                    <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-5">
                        <button
                            className="btn btn-lg px-4 py-3 fw-semibold text-white border-0 shadow-lg"
                            style={{ background: 'linear-gradient(135deg, #0ea5e9, #6366f1)' }}
                        >
                            Start Free Trial <i className="bi bi-arrow-right ms-2"></i>
                        </button>
                        <button className="btn btn-outline-secondary text-light btn-lg px-4 py-3 border-opacity-25">
                            Book Interactive Demo
                        </button>
                    </div>

                    {/* Social Proof */}
                    <div className="pt-4 border-top border-secondary border-opacity-10 d-flex flex-wrap align-items-center justify-content-center gap-4 text-secondary small">
                        <div>
                            <span className="text-warning">★ ★ ★ ★ ★</span>
                            <strong class="text-light ms-1">4.9/5</strong> from 2,000+ developers
                        </div>
                        <div className="d-none d-sm-block">•</div>
                        <div>Trusted by engineering teams at 500+ tech companies</div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: CORE CAPABILITIES */}
            <section id="features" className="py-5 bg-black bg-opacity-20 border-top border-bottom border-secondary border-opacity-10">
                <div className="container py-4">
                    <div className="text-center mb-5">
                        <span className="text-info text-uppercase fw-bold small">Core Capabilities</span>
                        <h2 className="display-6 fw-bold text-white mt-1">Engineered for autonomous precision</h2>
                    </div>

                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card h-100 p-4 bg-black bg-opacity-40 border-secondary border-opacity-25 rounded-4">
                                <div className="p-3 bg-info bg-opacity-10 text-info rounded-3 d-inline-block mb-4" style={{ width: 'fit-content' }}>
                                    <i className="bi bi-robot fs-3"></i>
                                </div>
                                <h4 className="fw-bold text-white mb-2">Autonomous Agents</h4>
                                <p className="text-secondary small mb-0">
                                    Deploy multi-step agents capable of executing external API calls, complex reasoning, and automated error corrections.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card h-100 p-4 bg-black bg-opacity-40 border-secondary border-opacity-25 rounded-4">
                                <div className="p-3 bg-primary bg-opacity-10 text-primary rounded-3 d-inline-block mb-4" style={{ width: 'fit-content' }}>
                                    <i className="bi bi-cpu fs-3"></i>
                                </div>
                                <h4 className="fw-bold text-white mb-2">Neural Fine-Tuning</h4>
                                <p className="text-secondary small mb-0">
                                    Fine-tune foundational LLMs on private datasets using Low-Rank Adaptation (LoRA) without data exposure risks.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card h-100 p-4 bg-black bg-opacity-40 border-secondary border-opacity-25 rounded-4">
                                <div className="p-3 bg-primary bg-opacity-10 text-info rounded-3 d-inline-block mb-4" style={{ width: 'fit-content' }}>
                                    <i className="bi bi-lightning-charge fs-3"></i>
                                </div>
                                <h4 className="fw-bold text-white mb-2">Ultra-Low Latency</h4>
                                <p className="text-secondary small mb-0">
                                    Edge routing infrastructure delivers token streaming speeds up to 3x faster than traditional gateways.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: WORKFLOW */}
            <section id="workflow" className="py-5">
                <div className="container py-5">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <span className="text-info text-uppercase fw-bold small">Simple Integration</span>
                            <h2 className="display-6 fw-bold text-white mt-2 mb-4">From raw data to active intelligence in minutes</h2>
                            <p className="text-secondary mb-4">
                                Connect vector databases, select base models, and deploy production endpoints without managing GPU clusters.
                            </p>

                            <div className="d-flex flex-column gap-4">
                                <div className="d-flex gap-3">
                                    <span className="badge bg-secondary bg-opacity-20 text-info border border-secondary border-opacity-20 rounded-circle d-flex align-items-center justify-content-center p-3" style={{ width: '36px', height: '36px' }}>1</span>
                                    <div>
                                        <h6 className="fw-bold text-white mb-1">Connect Datasets</h6>
                                        <p className="text-secondary small mb-0">Sync PDFs, SQL instances, or webhooks seamlessly into vector indexes.</p>
                                    </div>
                                </div>

                                <div className="d-flex gap-3">
                                    <span className="badge bg-secondary bg-opacity-20 text-info border border-secondary border-opacity-20 rounded-circle d-flex align-items-center justify-content-center p-3" style={{ width: '36px', height: '36px' }}>2</span>
                                    <div>
                                        <h6 className="fw-bold text-white mb-1">Configure Guardrails</h6>
                                        <p className="text-secondary small mb-0">Define context windows, output schemas, and automated safety policies.</p>
                                    </div>
                                </div>

                                <div className="d-flex gap-3">
                                    <span className="badge bg-secondary bg-opacity-20 text-info border border-secondary border-opacity-20 rounded-circle d-flex align-items-center justify-content-center p-3" style={{ width: '36px', height: '36px' }}>3</span>
                                    <div>
                                        <h6 className="fw-bold text-white mb-1">Deploy Endpoint</h6>
                                        <p className="text-secondary small mb-0">Export a secure REST or gRPC endpoint ready for high-concurrency traffic.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="p-4 rounded-4 bg-black border border-secondary border-opacity-25 shadow-lg">
                                <div className="d-flex align-items-center gap-2 mb-3">
                                    <span className="bg-danger rounded-circle d-inline-block" style={{ width: '10px', height: '10px' }}></span>
                                    <span className="bg-warning rounded-circle d-inline-block" style={{ width: '10px', height: '10px' }}></span>
                                    <span className="bg-success rounded-circle d-inline-block" style={{ width: '10px', height: '10px' }}></span>
                                    <span className="text-secondary font-monospace ms-2 small">agent_pipeline.js</span>
                                </div>
                                <pre className="font-monospace text-light small mb-0">
                                    <code>{`import { AIClient } from '@AI-ai/sdk';

                                    const client = new AIClient({ apiKey: process.env.AI_KEY });

                                    const agent = await client.agents.create({
                                    model: 'AI-3-turbo',
                                    tools: ['web_search', 'code_interpreter'],
                                    guardrails: { strictSafety: true }
                                    });

                                    const response = await agent.run({
                                    prompt: 'Analyze quarterly revenue and generate insights.'
                                    });`}</code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: METRICS */}
            <section id="stats" className="py-5 bg-black bg-opacity-40 border-top border-bottom border-secondary border-opacity-10">
                <div className="container py-4">
                    <div className="row text-center g-4">
                        <div className="col-6 col-md-3">
                            <h2 className="display-5 fw-bold text-white">99.99%</h2>
                            <p className="text-secondary small mb-0">API Uptime SLA</p>
                        </div>
                        <div className="col-6 col-md-3">
                            <h2 className="display-5 fw-bold text-white">12M+</h2>
                            <p className="text-secondary small mb-0">Daily Predictions</p>
                        </div>
                        <div className="col-6 col-md-3">
                            <h2 className="display-5 fw-bold text-white">&lt; 40ms</h2>
                            <p className="text-secondary small mb-0">Average Latency</p>
                        </div>
                        <div className="col-6 col-md-3">
                            <h2 className="display-5 fw-bold text-white">SOC-2</h2>
                            <p className="text-secondary small mb-0">Type II Certified</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: PRICING */}
            <section id="pricing" className="py-5">
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <span className="text-info text-uppercase fw-bold small">Pricing Plans</span>
                        <h2 className="display-6 fw-bold text-white mt-1">Scale seamlessly from prototype to enterprise</h2>
                    </div>

                    <div className="row g-4 align-items-stretch">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <div
                                key={index}
                                className="col-md-4"
                            >
                                <PricingPlan />
                            </div>
                        ))}

                        {/* <div className="col-md-4">
                            <div className="card h-100 p-4 bg-black bg-opacity-40 border-info rounded-4 position-relative d-flex flex-column justify-content-between shadow-lg">
                                <span className="position-absolute top-0 start-50 translate-middle badge bg-info text-dark uppercase fw-bold px-3 py-1">
                                    Most Popular
                                </span>
                                <div>
                                    <h5 className="fw-bold text-white mt-2">Pro Team</h5>
                                    <p className="text-secondary small">For growing startups building products.</p>
                                    <div className="my-4">
                                        <span className="display-5 fw-bold text-white">$49</span>
                                        <span className="text-secondary"> / month</span>
                                    </div>
                                    <ul className="list-unstyled text-secondary small d-flex flex-column gap-2 mb-4">
                                        <li><i className="bi bi-check-lg text-info me-2"></i> 5M API Tokens / month</li>
                                        <li><i className="bi bi-check-lg text-info me-2"></i> Custom Fine-Tuning</li>
                                        <li><i className="bi bi-check-lg text-info me-2"></i> Priority Agent Execution</li>
                                        <li><i className="bi bi-check-lg text-info me-2"></i> Email Support</li>
                                    </ul>
                                </div>
                                <button
                                    className="btn w-100 text-white fw-semibold border-0"
                                    style={{ background: 'linear-gradient(135deg, #0ea5e9, #6366f1)' }}
                                >
                                    Upgrade to Pro
                                </button>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card h-100 p-4 bg-black bg-opacity-40 border-secondary border-opacity-25 rounded-4 d-flex flex-column justify-content-between">
                                <div>
                                    <h5 className="fw-bold text-white">Enterprise</h5>
                                    <p className="text-secondary small">Custom setups with dedicated hardware.</p>
                                    <div className="my-4">
                                        <span className="display-5 fw-bold text-white">Custom</span>
                                    </div>
                                    <ul className="list-unstyled text-secondary small d-flex flex-column gap-2 mb-4">
                                        <li><i className="bi bi-check-lg text-info me-2"></i> Unlimited Throughput</li>
                                        <li><i className="bi bi-check-lg text-info me-2"></i> Dedicated VPC Deployment</li>
                                        <li><i className="bi bi-check-lg text-info me-2"></i> 24/7 Dedicated SLA</li>
                                        <li><i className="bi bi-check-lg text-info me-2"></i> Custom Security Audits</li>
                                    </ul>
                                </div>
                                <button className="btn btn-outline-secondary text-light w-100 border-opacity-25">
                                    Contact Sales
                                </button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}