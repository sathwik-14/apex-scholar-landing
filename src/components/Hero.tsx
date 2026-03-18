import { Lock } from "lucide-react";
import { motion } from "framer-motion";
import { heroVariants, fadeInUpVariants, scaleInVariants } from '../animations';

export default function Hero() {
    return (
        <section className="section hero">
            <motion.div
                className="container hero-content"
                initial="hidden"
                animate="visible"
                variants={heroVariants}
            >
                <motion.p variants={fadeInUpVariants} className="hero-security-badge">
                    <Lock size={20} /> Your research stays private.
                </motion.p>
                <motion.img
                    variants={scaleInVariants}
                    src={`${import.meta.env.BASE_URL}logo-transparent.png`}
                    alt="Apex Scholar Logo"
                    className="hero-logo"
                />
                <motion.h1 variants={fadeInUpVariants} className="hero-title">Apex Scholar</motion.h1>
                <motion.p variants={fadeInUpVariants} className="hero-subtitle">
                    A unified, AI-powered workspace for academic researchers to explore literature, manage grants, and track knowledge.
                </motion.p>
                <motion.div variants={heroVariants} className="hero-actions">
                    <motion.a variants={fadeInUpVariants} href="https://apexscholar.vercel.app" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                        Live Demo
                    </motion.a>
                    <motion.a variants={fadeInUpVariants} href="https://apexscholar-docs.pages.dev" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                        Read the Docs
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
}
