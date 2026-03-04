export default function Hero() {
    return (
        <section className="section hero">
            <div className="container hero-content">
                <img
                    src={`${import.meta.env.BASE_URL}logo-transparent.png`}
                    alt="Apex Scholar Logo"
                    className="hero-logo"
                />
                <h1 className="hero-title">Apex Scholar</h1>
                <p className="hero-subtitle">
                    A unified, AI-powered workspace for academic researchers to explore literature, manage grants, and track knowledge.
                </p>
                <div className="hero-actions">
                    <a href="https://apex-scholar.vercel.app" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                        Live Demo
                    </a>
                    <a href="https://buymeacoffee.com/kywagle" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                        Support Project
                    </a>
                </div>
            </div>
        </section>
    );
}
