import React from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

/** Variant for main container */
const containerVariants = {
    visible: { 
        transition: { 
            staggerChildren: 0.1 
        } 
    },
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
        className="main--wrapper bg--container--1"
        variants={containerVariants} 
        initial="hidden" 
        animate="visible"
        exit="exit">
            <Nav />
            <div
            className="container home--container-1 pt-5"
            >
                <motion.h2
                className="text-primary text-center"
                variants={fadeIn}
                >
                    Time to study!
                </motion.h2>
                <motion.h4 
                className="text-center"
                variants={fadeIn}
                >
                    Select one of the following options
                </motion.h4>
                <motion.div 
                className="pt-5"
                variants={fadeIn}
                >
                    <div 
                    className="d-grid text-center"
                    >
                        <motion.div
                        variants={fadeIn}
                        >
                            <Link to="/questions" className="home--links">
                                <motion.button 
                                className="btn btn-lg btn-primary col-12 col-md-8 col-lg-6" 
                                type="button"
                                whileHover={{ scale: 1.1 }}
                                >
                                    Add Questions
                                </motion.button>
                            </Link>
                        </motion.div>
                        <motion.div
                        variants={fadeIn}
                        className="mt-5"
                        >
                            <Link to="/quiz" className="home--links">
                                <motion.button 
                                className="btn btn-lg btn-primary col-12 col-md-8 col-lg-6" 
                                type="button"
                                whileHover={{ scale: 1.1 }}
                                >
                                    Start Quiz
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </motion.div>
    )
}

export default Home