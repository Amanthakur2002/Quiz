import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './QuizQuestion.css'; 

const QuizQuestion = ({ question, options, onSelect }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        onSelect(option);
    };

    return (
        <div className="question-container">
            <h2>{question}</h2>
            <ul className="options-list">
                {options.map((option, index) => (
                    <li
                        key={index}
                        className={option === selectedOption ? 'selected-option' : ''}
                        onClick={() => handleOptionClick(option)}
                    >
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    );
};

QuizQuestion.propTypes = {
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onSelect: PropTypes.func.isRequired,
};

export default QuizQuestion;





