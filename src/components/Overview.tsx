export default function Overview() {
    return (
        <section className="section overview" id="overview">
            <div className="container">
                <div className="overview-content">
                    <div className="overview-text">
                        <h2 className="section-title">Bridging the Gap</h2>
                        <p>
                            <strong>Apex Scholar</strong> bridges the gap between general data management and the specialized workflows of academic researchers.
                        </p>
                        <p>
                            It provides a structured, highly customizable environment to discover literature, visualize conceptual gaps, manage citations, and track funding in a centralized dashboard constraint-free.
                        </p>
                    </div>
                    <div className="overview-image-wrapper">
                        <img
                            src={`${import.meta.env.BASE_URL}screenshot-of-explore-screen.png`}
                            alt="App Dashboard Screenshot"
                            className="overview-image"
                        />
                        <div className="image-glow"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
