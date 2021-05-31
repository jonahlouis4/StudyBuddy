import React, { useState, useEffect } from 'react'
import QuizEnter from './pages/QuizEnter'
import QuizResult from './pages/QuizResult'
import QuizComplete from './pages/QuizComplete'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

/** Variant for main container */
const containerVariants = {
    hidden: { x: 300, opacity: 0,},
    visible: { x: 0, opacity: 1, 
        transition: { staggerChildren: 0.1 } },
    exit: { x: 300, opacity: 0 }
};
/** Variant for child component containers */
const containerVariantsChild = {
    hidden: { opacity: 0,},
    visible: { opacity: 1, 
        transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0 }
};
/** Fade in variant */
const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}
/** Vairants for buttons */
const buttonVariants = {
    active: { opacity: 1, x: 0 },
    inactive: { opacity: 0, x: -10  },
    hover: { scale: 1.1 },
    tap: { scale: 0.9 }
}

/**
 * Start of the quiz implementation. Parent of the pages QuizEnter,
 * QuizResult, and QuizComplete.
 * @param {QA} mainQA - reference to the QA state from App.js 
 */
const Quiz = ({mainQA, frame}) => {
    /** Index of current question */
    const [currQuestion, setCurrQuestion] = useState(0);
    /** Stores every answer input */
    const [answer, setAnswer] = useState({answer: ""});
    /** Determines the render of the body */
    const [result, setResult] = useState(-1);

    /**
     * Sets the answer state
     * @param {string} answer - answer entered from QuizEnter 
     */
    const addAnswer = (answer) => { setAnswer(answer); }

    /**
     * Sets the incremented index of the current question
     * @param {number} indexNum - new index number of currQuestion state
     */
    const setQuestionIndex = (indexNum) => { setCurrQuestion(indexNum); }

    /**
     * Sets the state of the result (0 = enter, 1 = result, 2 = complete, -1 empty state)
     * @param {boolean} result - result controlled by child components
     */
    const getResult = (result) => { setResult(result) }

    useEffect(() => {
        // No questions in database
        if (frame.length === 0) { 
        setResult(-1); 
        }
        // Shuffle questions 
        else if (currQuestion === 0 && answer.answer === "") { 
            setResult(0); 
        }
    })

    /**
     * Returns the correct functional component
     * @param {boolean} result - current state of result
     */
    function SetBody(props) {
        // Determine render result 
        if (props.result === -1) {
            return "No questions currently exists."
        } 
        else if (props.result === 0) {
            return <QuizEnter getResult={getResult} currQuestion={currQuestion} 
                        addAnswer={addAnswer} containerVariantsChild={containerVariantsChild} 
                        fadeIn={fadeIn} buttonVariants={buttonVariants} frame={frame}/>
        } 
        else if (props.result === 1) {
            return <QuizResult getResult={getResult} currQuestion={currQuestion} answer={answer} 
                        setQuestionIndex={setQuestionIndex} containerVariantsChild={containerVariantsChild} 
                        buttonVariants={buttonVariants} fadeIn={fadeIn} frame={frame}/>
        } 
        else if (props.result === 2) {
            return <QuizComplete containerVariantsChild={containerVariantsChild} fadeIn={fadeIn} addAnswer={addAnswer}
                        setQuestionIndex={setQuestionIndex} getResult={getResult} frame={frame}/>
        } 
    }

    return (
        <motion.div className="container" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
            {/* Header */}
            <motion.div className="quiz-header" variants={fadeIn}>
                <Link to="/" ><FontAwesomeIcon icon={faChevronLeft} size="2x" className="return-btn"/></Link>
            </motion.div>
            {/* Call to determine render */}
            <SetBody result={result} />
        </motion.div>
    )
}

export default Quiz
