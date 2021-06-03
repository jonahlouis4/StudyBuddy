import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

/** Variants for close button */
const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 }
  }

  /**
   * Modal for viewing and deleting questions + answers that exists
   * @param {prop} props - props passed from Question.js
   */
const QuestionsModal = (props) => {
    /** Stores all the questions current active in list */
    const QuestionList = props.frame.map(QA => { return ( 
        <div 
        className="myQuestions" 
        key={QA._key}
        >
            <div
            className="row"
            >
                <div
                className="col-10"
                >
                    {QA.question} 
                </div>
                <div
                className="col-2"
                >
                    <motion.button>
                        <FontAwesomeIcon icon={faTrash} size="sm" className="remove-btn" onClick={() => {props.delQA(QA._key)}}/>
                    </motion.button>
                </div>
            </div>
        </div>
        )})

    /** Returns list if questions exists or a message if it's empty */
    const verifyEmpty = () => {
        if (props.frame.length === 0) { 
            return <p>No questions exists.</p> 
        } 
        else { 
            return QuestionList 
        }   
    }
    
    return (
        <Modal 
        {...props} 
        size="lg" 
        aria-labelledby="contained-modal-title-vcenter" 
        centered 
        scrollable="true"
        >
            <Modal.Header>
                <Modal.Title 
                id="contained-modal-title-vcenter"
                >
                    My Questions
                </Modal.Title>
            </Modal.Header>
            <Modal.Body 
            className="modal-body"
            >
                <> 
                { verifyEmpty() } 
                </>
            </Modal.Body>
            <Modal.Footer>
                <motion.button 
                variants={buttonVariants} 
                whileHover="hover" 
                whileTap="tap" 
                onClick={props.onHide} 
                className="main-btn"
                >
                    Close
                </motion.button>
            </Modal.Footer>
        </Modal>  
    )
}

export default QuestionsModal
