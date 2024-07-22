import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/index.css';
import './home'
import { FaClock } from 'react-icons/fa';



const SecondsCounter = ({ seconds }) => {
    const formatTime = (num) => {
        return String(num).padStart(6, '0').split('');
    };

    const timeArray = formatTime(seconds);

    return (
        <div className="counter-container">
            <FaClock className="clock-icon" />
            {timeArray.map((digit, index) => (
                <div key={index} className="counter-item">
                    {digit}
                    {index === 5 && <span className="dot"></span>}
                </div>
            ))}
        </div>
    );
};

SecondsCounter.propTypes = {
    seconds: PropTypes.number.isRequired,
};

export default SecondsCounter;
