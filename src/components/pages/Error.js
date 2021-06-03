import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Error = ({containerVariantsChild, fadeIn, buttonVariants}) => {
    return (
        <motion.div
        variants={containerVariantsChild}
        initial="hidden" 
        animate="visible" 
        exit="exit"
        className="error--wrapper mt-5 text-center"
        >
            <motion.h2 
            className="text-primary"
            variants={fadeIn}
            >
                Ooops! You forgot to add questions.
            </motion.h2> 
            <motion.h4
            variants={fadeIn}
            >
                Please make sure to add at least one question before starting a quiz.
            </motion.h4>
            <motion.div
            variants={fadeIn}
            >
                <motion.button 
                className="btn btn-lg btn-primary mt-4"
                variants={buttonVariants} 
                >
                    <Link to="/questions" className="error--btn--link">Add Questions</Link>
                </motion.button>
            </motion.div>
           
        </motion.div>
    )
}

export default Error
