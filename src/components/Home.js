import React from 'react'
import { useEasybase } from 'easybase-react';
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
    const { isUserSignedIn, signOut } = useEasybase();

    const signOutUser = () => {
        if (isUserSignedIn()) {
          signOut();
        } 
      }

    return (
        <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible"
        exit="exit">
            <nav 
            className="navbar navbar-light"
            >
                <div 
                className="container-fluid"
                >
                    <span className="navbar-brand mb-0 h1">
                        StudyBuddy
                    </span>
                    <button 
                    onClick={signOutUser} 
                    className="btn btn-primary"
                    >
                        Sign Out
                    </button>
                </div>
            </nav>
            <div>
                <motion.h1 variants={fadeIn} >study buddy</motion.h1>
                <motion.h2 variants={fadeIn} >, a simple flash card web application designed for studying.</motion.h2>
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