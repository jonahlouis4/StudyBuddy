import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { motion } from 'framer-motion'

/**
 * Allows the user to exit (return home) or restart the quiz
 * @param {variants} containerVariantsChild - container variant for component
 * @param {variants} fadeIn - fade in for elements
 */
const QuizComplete = ({ addAnswer, setQuestionIndex, getResult, containerVariantsChild, fadeIn }) => {
    /** Stores empty answer input */
    const [emptyAnswer] = useState({answer: ""});
    /** Used to redirect user to '/' */
    const history = useHistory();
    
    /** Resets all data to restart the quiz */
    const restart = () => {
        // Reset & send info to parent (Quiz.js)...
        addAnswer(emptyAnswer);
        setQuestionIndex(0);
        getResult(0);
    }

    /** Redirect the user to the homepage */
    const exit = () => {
        history.push('/');
    }

    return (
        <motion.div 
        variants={containerVariantsChild}
        initial="hidden" 
        animate="visible" 
        exit="exit"
        >
            <div 
            className="mt-5 text-center"
            >
                <motion.h2 variants={fadeIn} className="text-primary">Quiz Complete!</motion.h2>
                <motion.h4 variants={fadeIn}>Select one of the following options</motion.h4>
            </div>
            <motion.div 
            className="btn-group justify-content-center mt-4" 
            variants={fadeIn}
            style={{width: '100%'}}
            >
                <div
                className="btn-group"
                >
                    <button onClick={restart} className="btn btn-lg btn-primary">Restart</button>
                    <button onClick={exit} className="btn btn-lg btn-danger">Leave</button>
                </div>
            </motion.div>

        </motion.div>
    )
}

export default QuizComplete
