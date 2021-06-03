import React, { useState } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import QuestionsModal from './QuestionsModal'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Form } from 'react-bootstrap'

/** Variant for main container */
const containerVariants = {
    visible: { 
        transition: { 
            staggerChildren: 0.1 
        } 
    },
};
/** Fade in variant */
const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}

/**
 * Operates the addition of questions + answers and the ability
 * to view and remote them.
 * @param {function} addQA - Reference to function that adds a question + answer
 * @param {function} delQA - Reference to function that removes a question + answer
 * @param {function} mainQA - Reference to the QA state from App.js 
 */
const Questions = ({addQA, delQA, frame}) => { 
    /** Local useStates for questions and answers */
    const [QA, setQA] = useState({question:"", answer:""})
    /** Sets value to show or hide modal */
    const [modalShow, setModalShow] = React.useState(false);
    /** State of form - valid or invalid */
    const [validated, setValidated] = useState(false);

    /**
     * Handles Submit button
     * @param {event} e - event that user triggerred 
     */
    const handleSubmit = (event) => {
        const form = event.currentTarget;

        event.preventDefault();

        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            // Can now copy paste instead of typing evertime 
            addQA(document.getElementById('question').value, document.getElementById('answer').value);  
            setQA({question: "", answer: ""}) 

            // Timeout required for question to be added to serverless database
            setTimeout(() => {
                window.location.reload();
              }, 1000);
        }
        setValidated(true);
    };

    /**
     * Handles every user change
     * @param {event} e - event that user triggerred
     */
    const handleChange = (e) => { 
        // Add every input value to local useState QA
        setQA((prevQA) => ({...prevQA, [e.target.id]: e.target.value})) 
    }

    return (
        <motion.div 
        className="main--wrapper"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
            <Nav />
            <QuestionsModal 
            show={modalShow} 
            onHide={() => setModalShow(false)} 
            frame={frame}
            delQA={delQA}
            />
            <div
            className="container questions--container-1"
            >
                <motion.div 
                variants={fadeIn}
                >
                    <div
                    className="row mt-3"
                    >
                        <div
                        className="col-6 text-left"
                        >
                            <ol 
                            className="breadcrumb pl-0"
                            >
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Questions</li>
                            </ol>
                        </div>
                        <div
                        className="col-6 text-right"
                        >
                            <motion.button 
                            onClick={() => setModalShow(true)} 
                            className="btn btn-primary"
                            >view questions
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                variants={fadeIn}
                >
                <Form
                className="mt-5"
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                >
                    <Form.Group
                    controlId="question"
                    xxl="12"
                    >
                        <Form.Label>Enter a question</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Type your question"
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter a question.
                        </Form.Control.Feedback>
                    </Form.Group>     
                    <Form.Group
                    controlId="answer"
                    xxl="12"
                    >
                        <Form.Label>Enter the answer</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Type your answer"
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter an answer.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <button 
                    className="btn btn-primary"
                    type="submit"
                    >
                        Add
                    </button>
                </Form>
                </motion.div>
            </div>
            <Footer />
        </motion.div>
    )
}

export default Questions