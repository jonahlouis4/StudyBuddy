import React from 'react'
import { motion } from 'framer-motion'

const QuizResult = ({QAcopy, answer, getResult, currQuestion, setQuestionIndex, containerVariantsChild, fadeIn, buttonVariants, frame}) => {
    
    /** Handle event for next button */
    const handleNext = () => {
        // Increment index 
        setQuestionIndex(currQuestion + 1);

        // IF went through all the questions 
        if (currQuestion >= QAcopy.length-1) {  getResult(2); return;  }

        // IF NOT Send 0 as result instead of 2
        getResult(0);  
    }

    return (
        <motion.div className="quiz-body" variants={containerVariantsChild} initial="hidden" animate="visible" exit="exit">
            {/* QUESTION */}
            <div className="quiz-questionBox">
                <motion.p variants={fadeIn}>{currQuestion+1}/{frame.length}</motion.p>
                <motion.p variants={fadeIn} className="label">{frame[currQuestion].question}</motion.p>
            </div>
                {/* ANSWERS */}
            <div className="quiz-answerBox">
                {/* The answer */}
                <motion.p variants={fadeIn} className="label">The answer</motion.p>
                <motion.p variants={fadeIn} >{ frame[currQuestion].answer }</motion.p>
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
