import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

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
            className="row border-bottom border-secondary py-4"
            >
                <div
                className="col-10 "
                >
                    Q: {QA.question} 
                    <br />
                    A: {QA.answer}
                </div>
                <div
                className="col-2"
                >
                    <button 
                    className="bg-white"
                    >
                        <FontAwesomeIcon 
                        icon={faTrash} 
                        size="sm" 
                        onClick={() => {props.delQA(QA._key)}}
                        className="text-danger"
                        />
                    </button>
                </div>
            </div>
        </div>
        )})

    /** Returns list if questions exists or a message if it's empty */
    const verifyEmpty = () => {
        if (props.frame.length === 0) { 
            return "No questions exists."
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
                <button 
                onClick={props.onHide} 
                className="btn btn-primary"
                >
                    Close
                </button>
            </Modal.Footer>
        </Modal>  
    )
}

export default QuestionsModal
