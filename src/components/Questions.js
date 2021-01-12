import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useAnimation } from 'framer-motion'
import Modal from 'react-bootstrap/Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

/* Variant for main container */
const containerVariants = {
    hidden: { x: 300, opacity: 0,},
    visible: { x: 0, opacity: 1 },
    exit: { x: 300, opacity: 0 }
  };
  /* Vairants for buttons */
  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 }
  }
  /* Variants for message */ 
  const msgVariants = { 
    active: { opacity: 1, x: 10 },
    inactive: { opacity: 0, x: 0  }
}

const Questions = ({addQA, delQA, mainQA}) => { 
    /* Local useState for questions and answers */
    const [QA, setQA] = useState({question:"", answer:""})

    /* Local useStates for TextArea class */
    const [areaClassQ, setAreaClassQ] = useState({class:"q-textArea q-areaNormal"})
    const [areaClassA, setAreaClassA] = useState({class:"q-textArea q-areaNormal"})
    
    /* Sets value to show or hide modal */
    const [modalShow, setModalShow] = React.useState(false);

    /* Determines if message is shown or not */
    const [validActive, setValid] = useState(false);
    const [errQActive, setErrQ] = useState(false);
    const [errAActive, setErrA] = useState(false);

    /* Changes state for 'Questions' from user input  */
    const handleChange = (e) => { 
        // Hide all messages 
        setValid(false); setErrQ(false); setErrA(false);

        // Add typed value to local useState QA
        setQA((prevQA) => ({...prevQA, 
            [e.target.id]: e.target.value
        })) }

    /* Submits new state data to parent */
    const handleSubmit = (e) => { 
        const isValid = validate();
        e.preventDefault();
        e.target.reset();

        // Check if form is valid 
        if (isValid) {      
            setValid(true);            
            addQA(QA.question, QA.answer);               
        } else {
            setValid(false);
        }
        setQA({question: "", answer: ""}) 
    }

    /* Verifies if fields are empty */
    const validate = () => {
        var valid = true;

        // Check if fields are empty 
        // Question
        if (QA.question === "" || null) { 
            setAreaClassQ({class:"q-textArea q-areaError"}); 
            setErrQ(true);
            valid = false; 
        } else { 
            setAreaClassQ({class:"q-textArea q-areaNormal"}); 
        }

        // Answer 
        if (QA.answer === "" || null) {
             setAreaClassA({class:"q-textArea q-areaError"}); 
            setErrA(true);
            valid = false; 
        } else { 
            setAreaClassA({class:"q-textArea q-areaNormal"}); 
        }
        return valid;
    }

    /* Stores all the questions current active in list */
    const questionList = mainQA.map(QA => { return ( 
    <div className="myQuestions" key={QA.id}>
        {QA.question} 
        <motion.button variants={buttonVariants} whileHover={{ scale: 1.2 }} whileTap="tap" >
            <FontAwesomeIcon icon={faTrash} size="sm" className="remove-btn" onClick={() => {delQA(QA.id)}}/>
        </motion.button>
    </div>
    )})

    /* Modal for "View Questions" button */  
    function MyVerticallyCenteredModal(props) {
        return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">My Questions</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>{questionList}</div>
            </Modal.Body>
            <Modal.Footer>
                <motion.button variants={buttonVariants} whileHover="hover" whileTap="tap" onClick={props.onHide} className="main-btn">Close</motion.button>
            </Modal.Footer>
        </Modal>
        );
    }

    return (
        <motion.div className="questionC container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
            {/* Modal */}
            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
            {/* Header */}
            <div className="questions-header">
                <Link to="/"><FontAwesomeIcon icon={faChevronLeft} size="2x" className="return-btn"/></Link>
                <motion.button 
                variants={buttonVariants} 
                whileHover="hover" 
                whileTap="tap" onClick={() => setModalShow(true)} className="main-btn">view questions</motion.button>
            </div>
            {/* Form */}
            <form className="questions-form" onSubmit={(handleSubmit)}>
                {/* Question input */}
                <p className="q-label">enter a question</p>
                <textarea className={areaClassQ.class} id="question" name="question" onChange={handleChange} ></textarea>
                {/* Answer input */}
                <p className="q-label" id="qLabelAnswer">enter the answer</p>
                <textarea className={areaClassA.class} id="answer" name="answer" onChange={handleChange} ></textarea>
                {/* Submit button */}
                <div className="Q-btnContainer">
                    <motion.input variants={buttonVariants} whileHover="hover" whileTap="tap" type="submit" value="add" className="main-btn"/>
                </div>
            </form>
            {/* Form messages */}
            <div className="q-message">
                <motion.p variants={msgVariants} animate={validActive ? "active" : "inactive"} id="q-msg-valid">question has been added!</motion.p>
                <motion.p variants={msgVariants} animate={errQActive ? "active" : "inactive"} id="q-msg-error">*please enter a question</motion.p>
                <motion.p variants={msgVariants} animate={errAActive ? "active" : "inactive"} id="q-msg-error">*please enter a answer</motion.p>
            </div>
        </motion.div>
    )
}

export default Questions