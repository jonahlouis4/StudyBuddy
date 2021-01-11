import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

/* Variant for main container */
const containerVariants = {
    hidden: { x: 300, opacity: 0,},
    visible: { x: 0, opacity: 1 },
    exit: { x: -300, opacity: 0 }
  };

const Home = () => {
    return (
        <motion.div 
        className="homeC container" 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible"
        exit="exit">
            {/* Header */}
            <div className="Home-Header">
                <h1>study buddy</h1>
                <h2>, a simple flash card web application made for studying.</h2>
            </div>
            {/* Body */}
            <div className="Home-Content">
                <Link to="/questions" className="Home-links">add a question</Link>
                <br />
                {/* <Link to="/quiz" className="Home-links">start the quiz</Link> */}
            </div>
        </motion.div>
    )
}

export default Home