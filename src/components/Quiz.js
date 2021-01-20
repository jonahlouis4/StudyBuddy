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
/** Fade in variant */
const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}

/**
 * In charge of starting the quiz in a random order
 * @param {QA} mainQA - reference to the QA state from App.js 
 */
const Quiz = ({mainQA}) => {
    /** Copy of the main QA state */
    const [QAcopy] = useState([...mainQA]);
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

    /** Sets the state of the result (true or false) */
    const getResult = (result) => {
        setResult(result)
    }

    /** Returns the correct functional component */
    function setBody (result) {
        if (!result) {
            return <QuizEnter QAcopy={QAcopy} fadeIn={fadeIn} getResult={getResult}/>
        } else {
            return <QuizResult getResult={getResult} />
        }
    }

    return (
        <motion.div className="container" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
            {/* Call to shuffle state */}
            {shuffle()}
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
