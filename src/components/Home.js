import React from 'react'
import Nav from './Nav'
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
        variants={containerVariants} 
        initial="hidden" 
        animate="visible"
        exit="exit">
            {/* Navbar */}
            <Nav />
            {/* Home Content */}
            <div
            className="container py-5"
            >
                <motion.h2 
                variants={fadeIn}
                style={{textAlign:'center'}}
                >
                    Select one of the following options
                </motion.h2>
                <motion.div 
                className="pt-5"
                variants={fadeIn}
                >
                    <div 
                    className="d-grid"
                    >
                        <button 
                        className="btn btn-lg btn-primary col-12" 
                        type="button"
                        variants={fadeIn}
                        >
                            <Link to="/questions" className="home--links">Add Questions</Link>
                        </button>
                        <button 
                        className="btn btn-lg btn-primary col-12 mt-5" 
                        type="button"
                        variants={fadeIn}
                        >
                            <Link to="/quiz" className="home--links">Start Quiz</Link>
                        </button>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Home