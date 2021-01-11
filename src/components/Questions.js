import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

/* Variant for main container */
const containerVariants = {
    hidden: { x: 300, opacity: 0,},
    visible: { x: 0, opacity: 1 },
    exit: { x: -300, opacity: 0 }
  };


const Questions = ({addQA, mainQA}) => { 
    /* Local state declaration for 'Questions' */
    const [QA, setQA] = useState({question:null, answer:null})
    /* Sets value to show or hide modal */
    const [modalShow, setModalShow] = React.useState(false);
    /* Changes state for 'Questions' from user input  */
    const handleChange = (e) => { setQA((prevQA) => ({...prevQA, [e.target.id]: e.target.value})) }
    /* Submits new state data to parent */
    const handleSubmit = (e) => { e.preventDefault(); addQA(QA.question, QA.answer); }
    /* Stores all the questions current active in list */
    const QAlist = mainQA.map(QA => {
        return (
            <div> {QA.question} </div>
        )
    })

    /* Modal for "View Questions" button */  
    function MyVerticallyCenteredModal(props) {
        return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">My Questions</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{QAlist}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
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
                <Link to="/">Return Home</Link>
                <button onClick={() => setModalShow(true)}>view questions</button>
            </div>
            {/* Form */}
            <form className="Questions-Form" onSubmit={(handleSubmit)}>
                {/* Question input */}
                <p className="qLabel">enter a question</p>
                <textarea className="qTextarea" id="question" name="question" onChange={handleChange}></textarea>
                {/* Answer input */}
                <p className="qLabel" id="qLabelAnswer">enter the answer</p>
                <textarea className="qTextarea" id="answer" name="answer" onChange={handleChange}></textarea>
                {/* Submit button */}
                <div className="Q-btnContainer"><input type="submit" value="add" id="Questions-btn"/></div>
            </form>
        </motion.div>
    )
}

export default Questions