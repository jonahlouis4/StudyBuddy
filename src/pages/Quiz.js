import React, { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import QuizEnter from './quiz_pages/QuizEnter'
import QuizResult from './quiz_pages/QuizResult'
import QuizComplete from './quiz_pages/QuizComplete'
import Error from './quiz_pages/Error'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEasybase } from 'easybase-react';

/** Variant for main container */
const containerVariants = {
    visible: { 
        transition: { 
            staggerChildren: 0.1 
        } 
    },
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
}

/**
 * Start of the quiz implementation. Parent of the pages QuizEnter,
 * QuizResult, and QuizComplete.
 * @param {QA} mainQA - reference to the QA state from App.js 
 */
const Quiz = () => {
    /** Index of current question */
    const [currQuestion, setCurrQuestion] = useState(0);
    /** Stores every answer input */
    const [answer, setAnswer] = useState({answer: ""});
    /** Determines the render of the body */
    const [result, setResult] = useState(-1);
    /** Easybase db and useReturn to fetch data when changed */
    const { db, useReturn } = useEasybase();
    /** Frame created to fetch data when changed */
    const { frame } = useReturn(() => db("QUIZ CONTENT").return(), []);

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
    }, [frame.length, currQuestion, answer.answer])

    /**
     * Returns the correct functional component
     * @param {boolean} result - current state of result
     */
    function SetBody(props) {
        // Determine render result 
        if (props.result === -1) {
            return <Error containerVariantsChild={containerVariantsChild} 
                        fadeIn={fadeIn} buttonVariants={buttonVariants} />
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
        <div
        className="main--wrapper bg--container--1"
        >
            <Nav />
            <motion.div 
            className="container" 
            variants={containerVariants} 
            initial="hidden" 
            animate="visible" 
            exit="exit"
            >
                <ol 
                className="breadcrumb pl-0 mt-3"
                >
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Quiz</li>
                </ol>
                <SetBody result={result} />
            </motion.div>
            <Footer />
        </div>
    )
}

export default Quiz
