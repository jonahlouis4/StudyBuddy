import React, { useState } from 'react'
import { motion } from 'framer-motion'

const QuizEnter = ({ getResult, currQuestion, addAnswer, containerVariantsChild, fadeIn, buttonVariants, frame}) => {
    /** Stores local answer input */
    const [lclAns, setLclAns] = useState({answer: ""});

    /**
     * Handles every user change
     * @param {event} e - event that user triggerred
     */
    const handleChange = (e) => { 
        setLclAns((prevAnswer) => ({...prevAnswer, [e.target.id]: e.target.value})) 
    }

    /**
     * Handles Submit button
     * @param {event} e - event that user triggerred 
     */
    const handleSubmit = (e) => { 
        e.preventDefault();
        e.target.reset();
        // Send info to parent (Quiz.js)...
        addAnswer(lclAns);
        getResult(1);        
    }

    return (
        <motion.div 
        variants={containerVariantsChild} 
        initial="hidden" 
        animate="visible" 
        exit="exit"
        >
            {/* QUESTION */}
            <div 
            className="quiz--container-1">
                <motion.h6 
                variants={fadeIn}
                style={{fontWeight:400}}
                >
                    {currQuestion+1}/{frame.length}
                </motion.h6>
                <motion.h6 
                variants={fadeIn} 
                className="my-0 py-0"
                style={{fontWeight:500}}
                >
                    {frame[currQuestion].question}
                </motion.h6>
            </div>
                {/* ENTER ANSWER */}
            <div>
                <form 
                className="myForm" id="quizResult-form" onSubmit={handleSubmit}>
                    <motion.p variants={fadeIn} className="label">Enter the answer</motion.p>
                    <motion.textarea variants={fadeIn} className="textArea areaNormal" id="answer" name="answer" onChange={handleChange}></motion.textarea>
                    <motion.div variants={fadeIn} className="Q-btnContainer">
                        <motion.input
                        variants={buttonVariants} 
                        animate ={lclAns.answer ? "active" : "inactive" }
                        whileHover="hover" 
                        whileTap="tap" 
                        type="submit" 
                        value="Submit" 
                        className="main-btn"/>
                    </motion.div>
                </form>
            </div>
        </motion.div>
    )
}

export default QuizEnter
