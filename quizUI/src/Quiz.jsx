import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuizQuestion from './QuizQuestion';
import QuizStats from './QuizStats';
import './Quiz.css';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [showStats, setShowStats] = useState(false);

    useEffect(() => {
        fetchQuestions();
    }, []);

    const fetchQuestions = async () => {
        try {
            const response = await axios.get('http://localhost:3000/getposts');
            setQuestions(response.data.questions);

            const transformedData = questions.map(item => ({
                question: item.que_text,
                options: [item.option_a, item.option_b, item.option_c, item.option_d],
                answer: item.correct_answer.substring(7)
            }));
            console.log(transformedData);

            setQuestions(transformedData)

        } catch (error) {
            console.error('Error fetching questions:', error);
        }
    };

    const handleSelectOption = (option) => {
        const updatedSelectedOptions = [...selectedOptions];
        updatedSelectedOptions[currentQuestionIndex] = option;
        setSelectedOptions(updatedSelectedOptions);
    };

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    const handlePlayAgain = () => {
        setCurrentQuestionIndex(0);
        setSelectedOptions([]);
        setShowStats(false);
    };

    const handleGoToHomePage = () => {
        window.location.href = '/';
    };

    return (
        <div className="quiz-container">
            {showStats ? (
                <QuizStats
                    questions={questions}
                    selectedOptions={selectedOptions}
                    onPlayAgain={handlePlayAgain}
                    onGoToHomePage={handleGoToHomePage}
                />
            ) : (
                <>
                    <h2 className="quiz-header">Quiz</h2>
                    <QuizQuestion
                        question={questions[currentQuestionIndex]}
                        onSelect={handleSelectOption}
                    />
                    {currentQuestionIndex < questions.length - 1 && (
                        <button className="quiz-button" onClick={handleNextQuestion}>Next Question</button>
                    )}
                </>
            )}
        </div>
    );
};

export default Quiz;
