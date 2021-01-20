import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

/** Vairants for buttons */
const buttonVariants = {
    active: { opacity: 1, x: 0 },
    inactive: { opacity: 0, x: -10  },
    hover: { scale: 1.1 },
    tap: { scale: 0.9 }
}

const QuizEnter = ({QAcopy, getResult, fadeIn}) => {
    /** Index of current question */
    const [currQuestion, setCurrQuestion] = useState(0);
    /** Stores every answer input */
    const [answer, setAnswer] = useState({answer: ""});

    /**
     * Handles every user change
     * @param {event} e - event that user triggerred
     */
    const handleChange = (e) => { 
        setAnswer((prevAnswer) => ({...prevAnswer, [e.target.id]: e.target.value})) 
    }

    /**
     * Handles Submit button
     * @param {event} e - event that user triggerred 
     */
    const handleSubmit = (e) => { 
        e.preventDefault();
        e.target.reset();
        getResult(true);        
    }



    return (
        <div>
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
                        <motion.input variants={fadeIn} 
                        variants={buttonVariants} 
                        animate ={answer.answer ? "active" : "inactive" }
                        whileHover="hover" 
                        whileTap="tap" 
                        type="submit" 
                        value="Submit" 
                        className="main-btn"/>
                        </motion.div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default QuizEnter
