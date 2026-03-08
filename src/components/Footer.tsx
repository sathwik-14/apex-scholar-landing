import { Github } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-top">
                    <div className="footer-brand">
                        <h3>Apex Scholar</h3>
                        <p className="footer-desc">A unified, AI-powered workspace for academic researchers.</p>
                        <div className="footer-socials">
                            <a href="https://github.com/sathwik-14/apex-scholar.git" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <Github size={20} />
                            </a>
                        </div>
                    </div>
                    <div className="footer-links">
                        <div className="link-col">
                            <h4>Product</h4>
                            <a href="#features">Features</a>
                            <a href="#overview">Overview</a>
                            <a href="#roadmap">Roadmap</a>
                        </div>
                        <div className="link-col">
                            <h4>Resources</h4>
                            <a href="https://apexscholar-docs.pages.dev" target="_blank" rel="noopener noreferrer">Documentation</a>
                            <a href="https://buymeacoffee.com/kywagle" target="_blank" rel="noopener noreferrer">Buy Me A Coffee</a>
                            <a href="https://github.com/sathwik-14/apex-scholar.git" target="_blank" rel="noopener noreferrer">Contribute</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>Built with ❤️ for the research community.</p>
                    <p className="license-text">This project is open-source. Released under the respective License.</p>
                </div>
            </div>
        </footer>
    );
}
