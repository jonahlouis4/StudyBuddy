import React from 'react'
import { motion } from 'framer-motion'
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const QuizResult = ({QAcopy, answer, getResult, currQuestion, setQuestionIndex, containerVariantsChild, fadeIn, buttonVariants, QA}) => {
    
    /** Handle event for next button */
    const handleNext = () => {
        // Increment index 
        setQuestionIndex(currQuestion + 1);

        // IF went through all the questions 
        if (currQuestion >= QA.length-1) {  getResult(2); return;  }

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
                    {currQuestion+1}/{QA.length}
                </motion.h6>
                <motion.h6 variants={fadeIn} style={{fontWeight:500}} className="mt-0 pt-0">
                    {QA[currQuestion].question}
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
                    { QA[currQuestion].answer }
                </motion.h6>
                {/* 'Your' answer */}
                <motion.h6 variants={fadeIn} className="mt-5" style={{fontWeight:600}}>
                    Your answer
                </motion.h6>
                <motion.h6 variants={fadeIn} style={{fontWeight:400}}>
                    { answer.answer }
                </motion.h6>
                <motion.div variants={fadeIn} class="form-check mt-5 mb-3">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        Mark as incorrect
                    </label>
                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">This will mark a question as incorrect so you can review it later.</Tooltip>}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-2" style={{height: 20}} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </OverlayTrigger>
                </motion.div>
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
