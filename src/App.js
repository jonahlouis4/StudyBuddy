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
  /** Easybase db and useReturn to fetch data when changed */
  const { db, useReturn } = useEasybase();
  /** Frame created to fetch data when changed */
  const { frame } = useReturn(() => db("QUIZ CONTENT").return(), []);

  const mounted = async() => {
    const qaData = await db('QUIZ CONTENT').return().all();
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
  const addQA = async(question, answer) => {
    // Add question + answer to db table "QUIZ CONTENT"
    await db('QUIZ CONTENT').insert({
      question: question,
      answer: answer
    }).one();
  }

  /**
   * Deletes a question + answer attached
   * @param {number} id - id represents the question + answer that will be deleted
   */
  const delQA = async(key) => {
    await db('QUIZ CONTENT', false).delete().where({ _key: key }).one();
  }

  return (
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key} >
          <Route exact path="/" component={Home} />
          <Route path="/questions"><Questions addQA={addQA} delQA={delQA} mainQA={QA} frame={frame}/></Route>
          <Route path="/quiz"><Quiz mainQA={QA} frame={frame}/></Route>
        </Switch>
      </AnimatePresence>
  );
}

export default App;