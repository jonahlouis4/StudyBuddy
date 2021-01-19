import React, { useState } from 'react'
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
/** Fade in variant */
const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}
/** Vairants for buttons */
const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 }
}

/**
 * In charge of starting the quiz in a random order
 * @param {QA} mainQA - reference to the QA state from App.js 
 */
const Quiz = ({mainQA}) => {
    /** Copy of the main QA state */
    const [QAcopy] = useState([...mainQA]);
    /** Index of current question */
    const [currQuestion, setCurrQuestion] = useState(0);
    /** Stores every answer input */
    const [answer, setAnswer] = useState("");

    /**
     * Handles every user change
     * @param {event} e - event that user triggerred
     */
    const handleChange = (e) => { 
        setAnswer((prevAnswer) => ({...prevAnswer, [answer]: e.target.value})) 
    }

    /**
     * Handles Submit button
     * @param {event} e - event that user triggerred 
     */
    const handleSubmit = (e) => { 
        e.preventDefault();
        e.target.reset();

        setCurrQuestion(currQuestion + 1);          
    }

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

    return (
        <motion.div className="container" 
        variants={containerVariants} 
        initial="hidden"
        animate="visible"
        exit="exit"
        >
            {/* Header */}
            <motion.div className="quiz-header" variants={fadeIn}>
                <Link to="/" ><FontAwesomeIcon icon={faChevronLeft} size="2x" className="return-btn"/></Link>
            </motion.div>
            {/* Body */}
            <div className="quiz-body">
                {/* QUESTION */}
                <div className="quiz-questionBox">
                    <motion.p variants={fadeIn}>{currQuestion+1}/{QAcopy.length}</motion.p>
                    <motion.p variants={fadeIn} className="label">{QAcopy[currQuestion].question}</motion.p>
                </div>
                 {/* ENTER ANSWER */}
                <div className="quiz-answerBox">
                    <form className="questions-form" onSubmit={handleSubmit}>
                        <motion.p variants={fadeIn} className="label">Enter the answer</motion.p>
                        <motion.textarea variants={fadeIn} className="textArea areaNormal" id="answer" name="answer" onChange={handleChange}></motion.textarea>
                        <motion.div variants={fadeIn} className="Q-btnContainer">
                            <motion.input variants={fadeIn} variants={buttonVariants} whileHover="hover" whileTap="tap" type="submit" value="Submit" className="main-btn"/>
                        </motion.div>
                    </form>
                </div>
            </div>
        </motion.div>
    )
}

export default Quiz
