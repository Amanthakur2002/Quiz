import React from 'react';
import PropTypes from 'prop-types';
import './QuizStats.css';

const QuizStats = ({ totalQuestions, correctAnswers, onPlayAgain, onGoToHomePage }) => {
    const passingScore = 60; 
    const score = (correctAnswers / totalQuestions) * 100;

    const handlePlayAgainClick = () => {
        onPlayAgain();
    };

    const handleGoToHomePageClick = () => {
        onGoToHomePage();
    };

    return (
        <div className="quiz-stats-container">
            <h2 className="quiz-stats-title">Quiz Statistics</h2>
            <div className="quiz-stats-item">
                <p>Total Number of Questions: {totalQuestions}</p>
                <p>Correct Answers: {correctAnswers}</p>
                <p>Your Score: {score.toFixed(2)}%</p>
                <p>Passing Score: {passingScore}%</p>
                <p>{score >= passingScore ? 'Congratulations! You passed the quiz.' : 'Sorry, you did not pass the quiz.'}</p>
            </div>
            <div className="quiz-stats-button-container">
                <button className="quiz-stats-button" onClick={handlePlayAgainClick}>Play Again</button>
                <button className="quiz-stats-button" onClick={handleGoToHomePageClick}>Go to Home Page</button>
            </div>
        </div>
    );
};

QuizStats.propTypes = {
    totalQuestions: PropTypes.number.isRequired,
    correctAnswers: PropTypes.number.isRequired,
    onPlayAgain: PropTypes.func.isRequired,
    onGoToHomePage: PropTypes.func.isRequired,
};

export default QuizStats;
