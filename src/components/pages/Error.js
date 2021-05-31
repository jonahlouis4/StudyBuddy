import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Error = ({containerVariantsChild, fadeIn, buttonVariants}) => {
    return (
        <motion.div
        variants={containerVariantsChild}
        initial="hidden" animate="visible" exit="exit"
        className="quiz-questionBox"
        style={{textAlign:'center'}}
        >
            <motion.h2 variants={fadeIn}>Ooops! You forgot to add questions.</motion.h2> 
            <motion.p variants={fadeIn}>Please add a minimum of one question before starting the quiz.</motion.p>
            <motion.div
            className="Q-btnContainer"
            variants={fadeIn}
            >
                <motion.button 
                className="main-btn"
                variants={buttonVariants} 
                whileHover="hover" 
                whileTap="tap" 
                >
                    <Link to="/questions" style={{color:'white'}}>add questions</Link>
                </motion.button>
            </motion.div>
           
        </motion.div>
    )
}

export default Error
