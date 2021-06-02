import React, { useState } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import QuestionsModal from './QuestionsModal'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Form } from 'react-bootstrap'

    /** Variant for main container */
    const containerVariants = {
        visible: { 
            transition: { 
                staggerChildren: 0.1 
            } 
        },
    };
    /** Vairants for buttons */
    const buttonVariants = {
        hover: { scale: 1.1 },
        tap: { scale: 0.9 }
    }
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

    /** Stores all the questions current active in list */
    const questionList = frame.map(QA => { return ( 
    <div className="myQuestions" key={QA._key}>
        {QA.question} 
        <motion.button variants={buttonVariants} whileHover={{ scale: 1.2 }} whileTap="tap" >
            <FontAwesomeIcon icon={faTrash} size="sm" className="remove-btn" onClick={() => {delQA(QA._key)}}/>
        </motion.button>
    </div>
    )})

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
            questionlist={questionList} 
            />
            <div
            className="container"
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
                            variants={buttonVariants} 
                            whileHover="hover" 
                            whileTap="tap" 
                            onClick={() => setModalShow(true)} 
                            className="btn btn-primary"
                            >view questions
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
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
            </div>
            <Footer />
        </motion.div>
    )
}

export default Questions