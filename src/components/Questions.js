import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Modal from 'react-bootstrap/Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

/* Variant for main container */
const containerVariants = {
    hidden: { x: 300, opacity: 0,},
    visible: { x: 0, opacity: 1 },
    exit: { x: -300, opacity: 0 }
  };


const Questions = ({addQA, delQA, mainQA}) => { 
    /* Local useState for questions and answers */
    const [QA, setQA] = useState({question:"", answer:""})

    /* Local useStates for TextArea class */
    const [areaClassQ, setAreaClassQ] = useState({class:"q-textArea q-areaNormal"})
    const [areaClassA, setAreaClassA] = useState({class:"q-textArea q-areaNormal"})

    /* Local userState for message */
    const [message, setMessage] = useState({validMsg:"", errMsgQ:"", errMsgA:""})
    
    /* Sets value to show or hide modal */
    const [modalShow, setModalShow] = React.useState(false);

    /* Changes state for 'Questions' from user input  */
    const handleChange = (e) => { 
        // Empty message 
        setMessage(prevMsg => {
            return { ...prevMsg, validMsg:"", errMsgQ: "", errMsgA: ""}
        });
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
            // set message 
            setMessage(prevMsg => {
                return { ...prevMsg, validMsg:"question has been added!"}
            });
            
            addQA(QA.question, QA.answer);               
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
            setMessage(prevMsg => {
                return { ...prevMsg, errMsgQ:"*please enter a question"}
            });

            valid = false; 
        } else { 
            setAreaClassQ({class:"q-textArea q-areaNormal"}); 
        }

        // Answer 
        if (QA.answer === "" || null) {
             setAreaClassA({class:"q-textArea q-areaError"}); 
             setMessage(prevMsg => {
                return { ...prevMsg, errMsgA:"*please enter a answer"}
            });

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
        <button><FontAwesomeIcon icon={faTrash} size="sm" className="remove-btn" onClick={() => {delQA(QA.id)}}/></button>
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
                <button onClick={props.onHide} className="main-btn">Close</button>
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
                <button onClick={() => setModalShow(true)} className="main-btn">view questions</button>
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
                    <input type="submit" value="add" className="main-btn"/>
                </div>
            </form>
            {/* Form messages */}
            <div className="q-message">
                <p id="q-msg-valid">{ message.validMsg }</p>
                <p id="q-msg-error">{ message.errMsgQ }</p>
                <p id="q-msg-error">{ message.errMsgA }</p>
            </div>
        </motion.div>
    )
}

export default Questions