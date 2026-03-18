import { ArrowRight, BookMarked, BrainCircuit, Users, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../animations';

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
        icon: <Wrench size={20} />,
        title: "Planned Improvements",
        features: [
            "Composr module UI/UX enhancements for mobile.",
            "Supabase integration using the new wrapper libraries.",
            "Expand unified search to more sources.",
            "Enhanced mobile navigation and responsive layouts."
        ]
    }
];

export default function Roadmap() {
    return (
        <motion.section
            className="section roadmap"
            id="roadmap"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <div className="container">
                <motion.div variants={containerVariants} className="section-header">
                    <motion.h2 variants={itemVariants} className="section-title">Roadmap</motion.h2>
                    <motion.p variants={itemVariants} className="section-subtitle">We are constantly growing to meet the needs of the academic community.</motion.p>
                </motion.div>

                <motion.div variants={containerVariants} className="roadmap-grid">
                    {roadmapCategories.map((category, idx) => (
                        <motion.div variants={itemVariants} className="card-dark roadmap-card" key={idx}>
                            <div className="roadmap-card-header">
                                {category.icon}
                                <p className="roadmap-title">{category.title}</p>
                            </div>
                            <ul className="roadmap-list">
                                {category.features.map((feature, fIdx) => (
                                    <li key={fIdx}>
                                        <ArrowRight size={14} className="list-icon" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}
