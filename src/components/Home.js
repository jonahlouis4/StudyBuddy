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
        className="container"
        variants={containerVariants} 
        initial="hidden" 
        animate="visible"
        exit="exit">
            {/* Navbar */}
            <Nav />
            <div>
                <motion.h4 variants={fadeIn} >A simple flash card web application designed for studying.</motion.h4>
            </div>
            {/* Body */}
            <div>
                <motion.div variants={fadeIn}><Link to="/questions" >add questions</Link></motion.div>
                <br />
                <motion.div variants={fadeIn}><Link to="/quiz">start the quiz</Link></motion.div> 
            </div>
        </motion.div>
    )
}

export default Home