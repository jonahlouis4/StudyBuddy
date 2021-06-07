import React, { useState } from 'react'
import Home from './pages/Home'
import LogIn from './pages/LogIn'
import Questions from './pages/Questions'
import Quiz from './pages/Quiz'
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
  /** User authentication */
  const { isUserSignedIn } = useEasybase();

  const SetHome = () => {
    if (!isUserSignedIn()) {
      return <LogIn />
    } else {
      return <Home />
    }
  }

  const SetQuiz = () => {
    if (!isUserSignedIn()) {
      return <LogIn />
    } else {
      return <Quiz mainQA={QA} frame={frame}/>
    }
  }

  const SetQuestions = () => {
    if (!isUserSignedIn()) {
      return <LogIn />
    } else {
      return <Questions />
    }
  }

  return (
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key} >
          <Route exact path="/" component={SetHome} />
          <Route path="/questions" component={SetQuestions} />
          <Route path="/quiz" component={SetQuiz} />
        </Switch>
      </AnimatePresence>
  );
}

export default App;