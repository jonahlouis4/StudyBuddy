import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

/** Variant for main container */
const containerVariants = {
    hidden: { x: -300, opacity: 0,},
    visible: { x: 0, opacity: 1, 
        transition: { staggerChildren: 0.1 } },
    exit: { x: -300, opacity: 0 }
  };
/** Fade in variant */
const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}

/** Home page of Study Buddy */
const Home = () => {
    return (
        <motion.div 
        className="homeC container" 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible"
        exit="exit">
            {/* Header */}
            <div className="home-header">
                <motion.h1 variants={fadeIn} >study buddy</motion.h1>
                <motion.h2 variants={fadeIn} >, a simple flash card web application designed for studying.</motion.h2>
            </div>
            {/* Body */}
            <div className="Home-Content">
                <motion.div variants={fadeIn}><Link to="/questions" className="home-links">add a question</Link></motion.div>
                <br />
                <motion.div variants={fadeIn}><Link to="/quiz" className="home-links">start the quiz</Link></motion.div> 
            </div>
        </motion.div>
    )
}

export default Home