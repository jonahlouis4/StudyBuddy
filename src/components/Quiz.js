import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

/* Variant for main container */
const containerVariants = {
    hidden: { x: 300, opacity: 0,},
    visible: { x: 0, opacity: 1, 
        transition: { staggerChildren: 0.1 } },
    exit: { x: 300, opacity: 0 }
  };
/* Fade in variant */
const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}

const Quiz = () => {
    return (
        <motion.div className="container" 
        variants={containerVariants} 
        initial="hidden"
        animate="visible"
        exit="exit"
        >
            <motion.div className="quiz-header" variants={fadeIn}>
                <Link to="/"><FontAwesomeIcon icon={faChevronLeft} size="2x" className="return-btn"/></Link>
            </motion.div>
        </motion.div>
    )
}

export default Quiz
