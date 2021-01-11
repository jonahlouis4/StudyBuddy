import React, {useState} from 'react'
import Home from './components/Home'
import Questions from './components/Questions'
import { Route, Switch, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

function App() {
  /* Used to store the current location of the present page */
  const location = useLocation();
  /* useState for App */
  const [QA, setQA] = useState([
    {question: "Question 1", answer: "Answer1"},
    {question: "Question 2", answer: "Answer2"},
    {question: "Question 3", answer: "Answer3"}
  ]);

  /* Add question and answer */
  const addQA = (question, answer) => {
    setQA(prevQA => [...prevQA, {
      id: prevQA.length,
      question: question,
      answer: answer
    }])
  }

  return (
    <AnimatePresence>
      <Switch location={location} key={location.key} >
        <Route exact path="/" component={Home} />
        <Route path="/questions"><Questions addQA={addQA} mainQA={QA} /></Route>
      </Switch>
      {console.log(QA)}
    </AnimatePresence>
  );
}

export default App;