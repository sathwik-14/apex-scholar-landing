import { Github, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { itemVariants } from '../animations';

export default function Footer() {
    return (
        <motion.footer
            className="footer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
        >
            <div className="container footer-content">
                <motion.div variants={itemVariants} className="footer-top">
                    <motion.div variants={itemVariants} className="footer-brand">
                        <h3>Apex Scholar</h3>
                        <p className="footer-desc">A unified, AI-powered workspace for academic researchers.</p>
                        <div className="footer-socials">
                            <a href="https://github.com/sathwik-14/apex-scholar.git" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <Github size={20} />
                            </a>
                        </div>
                    </motion.div>
                    <motion.div variants={itemVariants} className="footer-links">
                        <div className="link-col">
                            <h4>Product</h4>
                            <a href="#features">Features</a>
                            <a href="#overview">Overview</a>
                            <a href="#roadmap">Roadmap</a>
                        </div>
                        <div className="link-col">
                            <h4>Documentation</h4>
                            <a href="https://apexscholar-docs.pages.dev" target="_blank" rel="noopener noreferrer">Read the Docs</a>
                        </div>
                        <div className="link-col">
                            <h4>Support</h4>
                            <a href="https://buymeacoffee.com/kywagle" target="_blank" rel="noopener noreferrer">Buy Me a Coffee</a>
                            <a href="https://github.com/scholarkit/apexscholar" target="_blank" rel="noopener noreferrer">Contribute</a>
                        </div>
                    </motion.div>
                </motion.div>
                <motion.div variants={itemVariants} className="footer-bottom">
                    <p>Built with <Heart size={14} className="inline-icon" style={{ color: '#ef4444', verticalAlign: 'middle' }} /> for the research community.</p>
                    <p className="license-text">This project is open-source. Released under the MIT License.</p>
                </motion.div>
            </div>
        </motion.footer>
    );
}
