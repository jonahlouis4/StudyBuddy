import React from 'react'
import { motion } from 'framer-motion'

const QuizResult = ({QAcopy, answer, getResult, currQuestion, setQuestionIndex, containerVariantsChild, fadeIn, buttonVariants, frame}) => {
    
    /** Handle event for next button */
    const handleNext = () => {
        // Increment index 
        setQuestionIndex(currQuestion + 1);

        // IF went through all the questions 
        if (currQuestion >= frame.length-1) {  getResult(2); return;  }

        // IF NOT Send 0 as result instead of 2
        getResult(0);  
    }

    return (
        <motion.div 
        className="" 
        variants={containerVariantsChild} 
        initial="hidden" 
        animate="visible" 
        exit="exit"
        >
            {/* QUESTION */}
            <div 
            className="quiz--container-1"
            >
                <motion.h6 variants={fadeIn} style={{fontWeight:400}} className="text-primary">
                    {currQuestion+1}/{frame.length}
                </motion.h6>
                <motion.h6 variants={fadeIn} style={{fontWeight:500}} className="mt-0 pt-0">
                    {frame[currQuestion].question}
                </motion.h6>
            </div>
                {/* ANSWERS */}
            <div 
            className="mt-5 quizresult--container-1"
            >
                {/* The answer */}
                <motion.h6 variants={fadeIn} style={{fontWeight:600}} >
                    The answer
                </motion.h6>
                <motion.h6 variants={fadeIn} style={{fontWeight:400}} >
                    { frame[currQuestion].answer }
                </motion.h6>
                {/* 'Your' answer */}
                <motion.h6 variants={fadeIn} className="mt-5" style={{fontWeight:600}}>
                    Your answer
                </motion.h6>
                <motion.h6 variants={fadeIn} style={{fontWeight:400}}>
                    { answer.answer }
                </motion.h6>
                {/* Next */}
                <motion.div variants={fadeIn}>
                    <motion.button 
                    variants={buttonVariants} 
                    className="btn btn-primary mt-3" 
                    onClick={handleNext}
                    >
                        next
                    </motion.button>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default QuizResult
