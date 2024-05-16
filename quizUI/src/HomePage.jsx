import React from 'react';

const HomePage = ({ onStartQuiz }) => {
    return (
        <div className="container">
            <button className="play-button" onClick={onStartQuiz}> 
                <span>Play Now</span>
                <i className="fas fa-gamepad"></i>
            </button>
        </div>
    );
};

export default HomePage;

