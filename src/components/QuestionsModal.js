import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { motion } from 'framer-motion'

/* Variants for close button */
const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 }
  }

const QuestionsModal = (props) => {
    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
            <Modal.Header >
                <Modal.Title id="contained-modal-title-vcenter">My Questions</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div> { props.questionlist } </div>
            </Modal.Body>
            <Modal.Footer>
                <motion.button 
                variants={buttonVariants} 
                whileHover="hover" 
                whileTap="tap" 
                onClick={props.onHide} 
                className="main-btn">Close</motion.button>
            </Modal.Footer>
        </Modal>  
    )
}

export default QuestionsModal
