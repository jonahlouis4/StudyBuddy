import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

/**
 * Allows the user to exit (return home) or restart the quiz
 * @param {variants} containerVariantsChild - container variant for component
 * @param {variants} fadeIn - fade in for elements
 */
const QuizComplete = ({ addAnswer, setQuestionIndex, getResult, containerVariantsChild, fadeIn }) => {
    /** Stores empty answer input */
    const [emptyAnswer] = useState({answer: ""});
    
    /** Resets all data to restart the quiz */
    const restart = () => {
        // Reset & send info to parent (Quiz.js)...
        addAnswer(emptyAnswer);
        setQuestionIndex(0);
        getResult(0);
    }

    return (
        <motion.div variants={containerVariantsChild}
        initial="hidden" animate="visible" exit="exit"
        >
            <div className="quizComplete-header">
                <motion.h1 variants={fadeIn} >quiz complete</motion.h1>
                <motion.h2 variants={fadeIn}>select one of the following options</motion.h2>
            </div>
            <motion.div className="quizComplete-body" variants={fadeIn}>
                <Row>
                    <Col><button onClick={restart} id="btn-restart">restart</button></Col>
                    <Col><Link to="/"><button id="btn-exit">exit</button></Link></Col>
                </Row>
            </motion.div>

        </motion.div>
    )
}

export default QuizComplete
