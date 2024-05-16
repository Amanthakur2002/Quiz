import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import HomePage from './HomePage';
import Quiz from './Quiz'; 

const App = () => {
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  const handleStartQuiz = () => {
    setIsQuizStarted(true);
  };

  return (
    <>
      {!isQuizStarted ? (
        <HomePage onStartQuiz={handleStartQuiz} /> 
      ) : (
        <Quiz />
      )}
    </>
  );
};

export default App;
