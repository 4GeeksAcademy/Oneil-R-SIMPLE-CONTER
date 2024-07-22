import React, { useState, useEffect } from 'react';
import SecondsCounter from './secondsCounter';
import '../../styles/index.css';

const Home = () => {
    const defaultTime = 60; // Default countdown time in seconds
    const [seconds, setSeconds] = useState(defaultTime);
    const [inputTime, setInputTime] = useState(defaultTime);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setSeconds((prevSeconds) => {
                    if (prevSeconds > 0) {
                        return prevSeconds - 1;
                    } else {
                        clearInterval(interval);
                        setIsRunning(false);
                        alert('Time’s up!');
                        return 0;
                    }
                });
            }, 1000);
        } else if (!isRunning && seconds !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isRunning, seconds]);

    const handleStart = () => {
        if (inputTime > 0) {
            setSeconds(inputTime);
            setIsRunning(true);
        }
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setIsRunning(false);
        setSeconds(inputTime);
    };

    const handleResume = () => {
        setIsRunning(true);
    };

    // Automatically start countdown if not running
    useEffect(() => {
        if (seconds <= 0) {
            setSeconds(defaultTime);
        }
    }, [seconds]);

    return (
        <div className="text-center">
            <h1 className="text-center mt-5">Hello Rigo!</h1>
            <input
                type="number"
                value={inputTime}
                onChange={(e) => setInputTime(Number(e.target.value))}
                placeholder="Enter time in seconds"
            />
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleResume}>Resume</button>
            <SecondsCounter seconds={seconds} />
        </div>
    );
};

export default Home;

