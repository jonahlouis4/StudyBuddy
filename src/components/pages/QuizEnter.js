import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Form } from 'react-bootstrap';

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
            className="quizenter--container-1">
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
            <motion.div
            className="quizenter--container-2 pt-5"
            variants={fadeIn} 
            >
                <Form
                onSubmit={handleSubmit}
                >
                  <Form.Group>
                    <Form.Label>
                            Enter the answer
                        </Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={3} 
                            onChange={handleChange}
                            id="answer"
                            style={{resize:'none'}}
                            />
                        <motion.div 
                        className="pt-3"
                        variants={fadeIn} 
                        >
                            <motion.input
                            variants={buttonVariants} 
                            animate ={lclAns.answer ? "active" : "inactive" }
                            type="submit" 
                            value="Submit" 
                            className="btn btn-primary"
                            />
                        </motion.div>
                  </Form.Group>
                </Form>
            </motion.div>
        </motion.div>
    )
}

export default QuizEnter
