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
    {id: 0, question: "What language is React written in?", answer: "JavaScript"},
    {id: 1, question: "What company created React?", answer: "Facebook"},
    {id: 2, question: "What does DOM stand for?", answer: "Document Object Model"}
  ]);

  /* Add question and answer */
  const addQA = (question, answer) => {
    setQA(prevQA => [...prevQA, {
      id: prevQA.length,
      question: question,
      answer: answer
    }])
  }

  /* Delete question and answer */
  const delQA = (id) => {
    let mainQA = QA.filter(currQA => {
      return currQA.id !== id
    });
    setQA([...mainQA])
  }

  return (
    <AnimatePresence>
      <Switch location={location} key={location.key} >
        <Route exact path="/" component={Home} />
        <Route path="/questions"><Questions addQA={addQA} delQA={delQA} mainQA={QA} /></Route>
      </Switch>
    </AnimatePresence>
  );
}

export default App;