import React from 'react'
import { motion } from 'framer-motion'

const QuizResult = ({QAcopy, answer, getResult, currQuestion, setQuestionIndex, containerVariantsChild, fadeIn, buttonVariants}) => {
    const handleNext = () => {
        // Send info to parent (Quiz.js)...
        getResult(false);
        setQuestionIndex(currQuestion + 1);
    }
    return (
        <motion.div className="quiz-body" variants={containerVariantsChild} initial="hidden" animate="visible" exit="exit">
            {/* QUESTION */}
            <div className="quiz-questionBox">
                <motion.p variants={fadeIn}>{currQuestion+1}/{QAcopy.length}</motion.p>
                <motion.p variants={fadeIn} className="label">{QAcopy[currQuestion].question}</motion.p>
            </div>
                {/* ANSWERS */}
            <div className="quiz-answerBox">
                {/* The answer */}
                <motion.p variants={fadeIn} className="label">The answer</motion.p>
                <motion.p variants={fadeIn} >{ QAcopy[currQuestion].answer }</motion.p>
                {/* 'Your' answer */}
                <motion.p variants={fadeIn} className="label">Your answer</motion.p>
                <motion.p variants={fadeIn} >{ answer.answer }</motion.p>
                {/* Next */}
                <motion.div variants={fadeIn} className="Q-btnContainer">
                    <motion.button variants={buttonVariants} whileHover="hover" 
                    whileTap="tap" className="main-btn" onClick={handleNext}>next</motion.button>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default QuizResult
