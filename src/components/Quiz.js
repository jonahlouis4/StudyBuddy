import React, { useState } from 'react'
import QuizEnter from './pages/QuizEnter'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import QuizResult from './pages/QuizResult'

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
const Quiz = ({mainQA}) => {
    /** Copy of the main QA state */
    const [QAcopy] = useState([...mainQA]);
    /** Index of current question */
    const [currQuestion, setCurrQuestion] = useState(0);
    /** Stores every answer input */
    const [answer, setAnswer] = useState({answer: ""});
    /** Determines the render of the body */
    const [result, setResult] = useState(false);

    /* 
    * This function shuffles the copy version of the main QA state array
    * Part of the solution is from:
    * https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    */
    const shuffle = () => {
        var currentIndex = QAcopy.length, temporaryValue, randomIndex;

        // While there remains elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element
            temporaryValue = QAcopy[currentIndex];
            QAcopy[currentIndex] = QAcopy[randomIndex];
            QAcopy[randomIndex] = temporaryValue;
        }         
    }

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
     * Sets the state of the result (true or false)
     * @param {boolean} result - result controlled by child components
     */
    const getResult = (result) => { setResult(result) }

    /**
     * Returns the correct functional component
     * @param {boolean} result - current state of result
     */
    function setBody (result) {
        // Went through all questions
        
        // Still have questions to go through...
        if (!result) {
            return <QuizEnter QAcopy={QAcopy} getResult={getResult} currQuestion={currQuestion} 
                        addAnswer={addAnswer} containerVariantsChild={containerVariantsChild} 
                        fadeIn={fadeIn} buttonVariants={buttonVariants} />
        } else {
            return <QuizResult QAcopy={QAcopy} getResult={getResult} currQuestion={currQuestion} answer={answer} 
                        setQuestionIndex={setQuestionIndex} containerVariantsChild={containerVariantsChild} 
                        buttonVariants={buttonVariants} fadeIn={fadeIn} />
        }
    }

    return (
        <motion.div className="container" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
            {/* Call to shuffle state */}
            
            {/* Header */}
            <motion.div className="quiz-header" variants={fadeIn}>
                <Link to="/" ><FontAwesomeIcon icon={faChevronLeft} size="2x" className="return-btn"/></Link>
            </motion.div>
            {/* Call to determine render */}
            {setBody(result)}
        </motion.div>
    )
}

export default Quiz
