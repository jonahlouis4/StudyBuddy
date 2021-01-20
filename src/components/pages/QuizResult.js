import React from 'react'

const QuizResult = ({getResult}) => {
    const test = () => {
        getResult(false);
    }
    return (
        <div>
            This is from QuizResult.js
            <button onClick={test}>press me!</button>
        </div>
    )
}

export default QuizResult
