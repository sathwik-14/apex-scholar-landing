import { BookOpen, Network, Briefcase, Quote, LayoutDashboard, Lock, Import } from 'lucide-react';

const features = [
    {
        icon: <BookOpen size={24} />,
        title: "Unified Papers Explorer",
        description: "Seamlessly search and import papers across ArXiv, Semantic Scholar, OpenAlex, Google Scholar, and PubMed simultaneously."
    },
    {
        icon: <Network size={24} />,
        title: "Knowledge Base & Gap ID",
        description: "Auto-extract insights using AI, and build an interactive 2D Force Graph to visualize relationships and identify novel research gaps."
    },
    {
        icon: <Briefcase size={24} />,
        title: "Grant & Funding Tracker",
        description: "Stay on top of proposal deadlines, checklist requirements, document links, and budget spending in one place."
    },
    {
        icon: <Quote size={24} />,
        title: "Citation Engine",
        description: "Quickly auto-generate correct, properly formatted citations for your saved literature without context switching."
    },
    {
        icon: <LayoutDashboard size={24} />,
        title: "Kanban Task Board",
        description: "A drag-and-drop integrated board to map out your literature review, analysis, and data collection phases."
    },
    {
        icon: <Lock size={24} />,
        title: "End-to-End Encryption",
        description: "Zero-knowledge security: your research data is encrypted client-side before storage. Only you hold the keys."
    },
    {
        icon: <Import size={24} />,
        title: "Zotero Integration",
        description: "Connect your Zotero library to import references seamlessly. Manage connection in Settings > Integrations and import directly into your Resource Library."
    }
];

export default function Features() {
    return (
        <section className="section features" id="features">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Key Features</h2>
                    <p className="section-subtitle">A highly customizable environment to discover literature and manage workflow.</p>
                </div>

                <div className="features-grid">
                    {features.map((feature, idx) => (
                        <div className="card-dark feature-card" key={idx}>
                            <div className="feature-icon">
                                {feature.icon}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-desc">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
