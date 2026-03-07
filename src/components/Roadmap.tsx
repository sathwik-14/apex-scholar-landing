import { ArrowRight, BookMarked, BrainCircuit, Users, Shield } from 'lucide-react';

const roadmapCategories = [
    {
        icon: <BookMarked size={20} />,
        title: "Literature & Citation Management",
        features: [
            "Reference Syncing: Native integrations with Zotero, Mendeley, and EndNote.",
            "PDF Workspace: Upload papers, highlight text, and link annotations.",
            "Scopus Integration: Expand unified paper explorer sources.",
            "Unified Search: Query ArXiv, Semantic Scholar, OpenAlex, Google Scholar, PubMed at once."
        ]
    },
    {
        icon: <BrainCircuit size={20} />,
        title: "Deep AI Integrations",
        features: [
            "Document Q&A (RAG): Chat with PDFs to summarize methodologies.",
            "Auto-Extraction: AI-assisted extraction of tables and statistics.",
            "Smart Recommendations: Context-aware literature discovery.",
            "AI Knowledge Graphs: Visualize research gaps and connections."
        ]
    },
    {
        icon: <Users size={20} />,
        title: "Collaboration & Editor",
        features: [
            "Real-time Collaborative Editor (Overleaf-style) with LaTeX support",
            "Reference insertion from your library (APA, MLA, Chicago)",
            "Export to PDF, Word, and LaTeX (.tex)",
            "Version history, rollback, and commenting",
            "AI writing assistant: sentence completions, grammar, research-aware suggestions"
        ]
    },
    {
        icon: <Shield size={20} />,
        title: "Security & Privacy",
        features: [
            "End-to-end encryption (E2EE) for all cloud-synced data",
            "Zero-knowledge architecture: server never sees your keys",
            "Client-side AES-256-GCM encryption before storage",
            "Encrypted backups and cross-device key sync"
        ]
    }
];

export default function Roadmap() {
    return (
        <section className="section roadmap" id="roadmap">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Roadmap</h2>
                    <p className="section-subtitle">We are constantly growing to meet the needs of the academic community.</p>
                </div>

                <div className="roadmap-grid">
                    {roadmapCategories.map((category, idx) => (
                        <div className="card-dark roadmap-card" key={idx}>
                            <div className="roadmap-card-header">
                                {category.icon}
                                <h3>{category.title}</h3>
                            </div>
                            <ul className="roadmap-list">
                                {category.features.map((feature, fIdx) => (
                                    <li key={fIdx}>
                                        <ArrowRight size={14} className="list-icon" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
