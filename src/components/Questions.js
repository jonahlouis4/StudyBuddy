import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import QuestionsModal from './QuestionsModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useEasybase } from 'easybase-react';

/** Variant for main container */
const containerVariants = {
    hidden: { x: 300, opacity: 0,},
    visible: { x: 0, opacity: 1, 
        transition: { staggerChildren: 0.1 } },
    exit: { x: 300, opacity: 0 }
  };
  /** Vairants for buttons */
  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 }
  }
  /** Variants for message */ 
  const msgVariants = { 
    active: { opacity: 1, x: 10 },
    inactive: { opacity: 0, x: 0  }
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
const Questions = ({addQA, delQA, mainQA}) => { 
    /** Stores the valid ID for success message */
    const validId = "q-msg-valid";   
    /** Stores the error ID for error message */                   
    const errId = "q-msg-error"; 
    /** Stores the normal class colour for text area */
    const tNormClass = "textArea areaNormal";
    /** Stores the error class colour for text area */
    const tErrClass = "textArea areaError";
    /** Local useStates for questions and answers */
    const [QA, setQA] = useState({question:"", answer:""})
    /** Local useStates for TextArea class (Sets the colour) */
    const [textAreaClass, setTextAreaClass] = useState({questionClass:tNormClass, answerClass: tNormClass})
    /** Sets value to show or hide modal */
    const [modalShow, setModalShow] = React.useState(false);
    /** Determines if message is shown or not */
    const [msgValidation, setMsgValidation] = useState({success: false, errQuestion: false, errAnswer: false})
    /** Stores the message for below the form */
    const [msg, setMsg] = useState({message:"", id:""})
    /** Easybase db and useReturn to fetch data when changed */
    const { db, useReturn } = useEasybase();
    /** Frame created to fetch data when changed */
    const { frame } = useReturn(() => db("QUIZ CONTENT").return(), []);

    /**
     * Handles every user change
     * @param {event} e - event that user triggerred
     */
    const handleChange = (e) => { 
        // Hide all messages 
        setMsgValidation({success: false, errQuestion: false, errAnswer: false})
        // Add every input value to local useState QA
        setQA((prevQA) => ({...prevQA, [e.target.id]: e.target.value})) 
    }

    /**
     * Handles Submit button
     * @param {event} e - event that user triggerred 
     */
    const handleSubmit = (e) => { 
        const isValid = validate();
        e.preventDefault();
        e.target.reset();

        // Check if form is valid 
        if (isValid) {       
            setMsgValidation(prevMsg => { return {...prevMsg, success: true }}); 
            setMsg({message: "question has been added!", id:validId});        
            addQA(QA.question, QA.answer);               
        } else {
            setMsgValidation(prevMsg => { return {...prevMsg, success: false } }) 
        }
        setQA({question: "", answer: ""}) 
    }

    /** Verifies if fields are empty */
    const validate = () => {
        // false if user did not fill fields 
        var valid = true;

        // Both questions are empty 
        if (QA.question === "" && QA.answer === "") {
            setMsg({message: "*please enter a question and a answer", id:errId})
            setTextAreaClass({questionClass: tErrClass, answerClass: tErrClass });
            setMsgValidation(prevMsg => { return {...prevMsg, errQuestion: true, errAnswer: true } })
            return valid = false; 
        }
        // Question is empty only 
        if (QA.question === "") { 
            setMsg({message: "*please enter a question", id:errId})
            setTextAreaClass(prevClass => { return {...prevClass, questionClass: tErrClass }})
            setMsgValidation(prevMsg => { return {...prevMsg, errQuestion: true } })
            valid = false; 
        } else { 
            setTextAreaClass(prevClass => { return {...prevClass, questionClass: tNormClass }}) 
        }
        // Answer is empty only 
        if (QA.answer === "") {
            setMsg({message: "*please enter a answer", id:errId})
            setTextAreaClass(prevClass => { return {...prevClass, answerClass: tErrClass }}); 
            setMsgValidation(prevMsg => { return {...prevMsg, errAnswer: true } })
            valid = false; 
        } else { 
            setTextAreaClass(prevClass => { return {...prevClass, answerClass: tNormClass }}); 
        }
        return valid;
    }

    /** Returns true if message is active, false if no message is active */
    function messageActive() {
        if (msgValidation.success || msgValidation.errQuestion || msgValidation.errAnswer) { return true; } 
        return false;
    }

    /** Stores all the questions current active in list */
    const questionList = frame.map(QA => { return ( 
    <div className="myQuestions" key={QA.id}>
        {QA.question} 
        <motion.button variants={buttonVariants} whileHover={{ scale: 1.2 }} whileTap="tap" >
            <FontAwesomeIcon icon={faTrash} size="sm" className="remove-btn" onClick={() => {delQA(QA.id)}}/>
        </motion.button>
    </div>
    )})

    return (
        <motion.div className="container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
            {/* Modal */}
            <QuestionsModal show={modalShow} onHide={() => setModalShow(false)} questionlist={questionList} />
            {/* Header */}
            <motion.div variants={fadeIn} className="questions-header">
                <Link to="/"><FontAwesomeIcon icon={faChevronLeft} size="2x" className="return-btn"/></Link>
                <motion.button 
                variants={buttonVariants} 
                whileHover="hover" 
                whileTap="tap" onClick={() => setModalShow(true)} className="main-btn">view questions</motion.button>
            </motion.div>
            {/* Form */}
            <form className="myForm" onSubmit={(handleSubmit)}>
                {/* Question input */}
                <motion.p variants={fadeIn} className="label">enter a question</motion.p>
                <motion.textarea variants={fadeIn} className={textAreaClass.questionClass} id="question" name="question" onChange={handleChange} ></motion.textarea>
                {/* Answer input */}
                <motion.p variants={fadeIn} className="label" id="qLabelAnswer">enter the answer</motion.p>
                <motion.textarea variants={fadeIn} className={textAreaClass.answerClass} id="answer" name="answer" onChange={handleChange} ></motion.textarea>
                {/* Submit button */}
                <motion.div variants={fadeIn} className="Q-btnContainer">
                    <motion.input variants={buttonVariants} whileHover="hover" whileTap="tap" type="submit" value="add" className="main-btn"/>
                </motion.div>
            </form>
            {/* Form messages */}
            <div className="q-message">
                <motion.p variants={msgVariants} animate={messageActive() ? "active" : "inactive"} id={msg.id}>{msg.message}</motion.p>
            </div>
        </motion.div>
    )
}

export default Questions