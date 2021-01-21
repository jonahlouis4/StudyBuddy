import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const QuizComplete = ({ containerVariantsChild, fadeIn }) => {
    const restart = () => {

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
                    <Col><button id="btn-restart">restart</button></Col>
                    <Col><Link to="/"><button id="btn-exit">exit</button></Link></Col>
                </Row>
            </motion.div>

        </motion.div>
    )
}

export default QuizComplete
