import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../animations';

export default function Overview() {
    return (
        <motion.section
            className="section overview"
            id="overview"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <div className="container">
                <motion.div variants={containerVariants} className="overview-content">
                    <motion.div variants={containerVariants} className="overview-text">
                        <motion.h2 variants={itemVariants} className="section-title">Bridging the Gap</motion.h2>
                        <motion.p variants={itemVariants}>
                            <strong>Apex Scholar</strong> bridges the gap between general data management and the specialized workflows of academic researchers.
                        </motion.p>
                        <motion.p variants={itemVariants}>
                            It provides a structured, highly customizable environment to discover literature, visualize conceptual gaps, manage citations, and track funding in a centralized dashboard constraint-free.
                        </motion.p>
                    </motion.div>
                    <motion.div
                        variants={itemVariants}
                        className="overview-image-wrapper"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            src={`${import.meta.env.BASE_URL}screenshot-of-explore-screen.png`}
                            alt="App Dashboard Screenshot"
                            className="overview-image"
                        />
                        <div className="image-glow"></div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}
