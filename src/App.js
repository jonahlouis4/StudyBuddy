import React, { useState, useEffect } from 'react'
import Home from './components/Home'
import Questions from './components/Questions'
import Quiz from './components/Quiz'
import { Route, Switch, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEasybase } from 'easybase-react';

/**
 * Main function component of Study Buddy
 */
function App() {
  /** Used to store the current location of the present page */
  const location = useLocation();
  /** State that holds all questions and answers */
  const [QA, setQA] = useState([]);
  /** Easybase database */
  const { db } = useEasybase();

  const mounted = async() => {
    const qaData = await db("QUIZ CONTENT").return().all();
    setQA(qaData);
  }

  useEffect(() => {
    mounted();
  }, [])

  /**
   * Adds a question + answer attached
   * @param {string} question - question entered by user
   * @param {string} answer - answer to question entered by user
   */
  const addQA = (question, answer) => {
    setQA(prevQA => [...prevQA, {
      id: prevQA.length,
      question: question,
      answer: answer
    }])
  }

  /**
   * Deletes a question + answer attached
   * @param {number} id - id represents the question + answer that will be deleted
   */
  const delQA = (id) => {
    let mainQA = QA.filter(currQA => {
      return currQA.id !== id
    });
    setQA([...mainQA])
  }

  return (
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key} >
          <Route exact path="/" component={Home} />
          <Route path="/questions"><Questions addQA={addQA} delQA={delQA} mainQA={QA} /></Route>
          <Route path="/quiz"><Quiz mainQA={QA} /></Route>
        </Switch>
      </AnimatePresence>
  );
}

export default App;