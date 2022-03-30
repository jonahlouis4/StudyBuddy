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

/* CONSTANTS */
const ERROR_PAGE = -1
const ENTER_PAGE = 0
const RESULT_PAGE = 1
const COMPLETE_PAGE = 2

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
    const [result, setResult] = useState(ERROR_PAGE);
    /** Easybase db and useReturn to fetch data when changed */
    const { db, useReturn } = useEasybase();
    /** Frame created to fetch data when changed */
    const { frame } = useReturn(() => db("QUIZ CONTENT").return(), []);
    /** Holds all question & answers */
    const [QA, setQA] = useState([...frame]);

    useEffect(() => {
        frame.map( element => {
            setQA(prev => [...prev, element])
        })
    }, [frame])

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
        if (QA.length === 0) { 
        setResult(ERROR_PAGE); 
        }
        // Shuffle questions 
        else if (currQuestion === 0 && answer.answer === "") { 
            QA.sort(function(a, b){ return 0.5 - Math.random() })
            setResult(ENTER_PAGE); 
        }
    }, [QA.length, currQuestion, answer.answer])

    /**
     * Returns the correct functional component
     * @param {boolean} result - current state of result
     */
    const SetBody = ({result}) => {
        // Determine render result 
        if (result === ERROR_PAGE) {
            return <Error containerVariantsChild={containerVariantsChild} 
                        fadeIn={fadeIn} buttonVariants={buttonVariants} />
        } 
        else if (result === ENTER_PAGE) {
            return <QuizEnter getResult={getResult} currQuestion={currQuestion} 
                        addAnswer={addAnswer} containerVariantsChild={containerVariantsChild} 
                        fadeIn={fadeIn} buttonVariants={buttonVariants} QA={QA}/>
        } 
        else if (result === RESULT_PAGE) {
            return <QuizResult getResult={getResult} currQuestion={currQuestion} answer={answer} 
                        setQuestionIndex={setQuestionIndex} containerVariantsChild={containerVariantsChild} 
                        buttonVariants={buttonVariants} fadeIn={fadeIn} QA={QA}/>
        } 
        else if (result === COMPLETE_PAGE) {
            return <QuizComplete containerVariantsChild={containerVariantsChild} fadeIn={fadeIn} addAnswer={addAnswer}
                        setQuestionIndex={setQuestionIndex} getResult={getResult} />
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
