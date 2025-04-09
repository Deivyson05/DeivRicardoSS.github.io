import styles from "./styles.module.css"
import React, { useState, useEffect } from "react";


export function Game() {
    const [playerY, setPlayerY] = useState(80);
    const [isJumping, setIsJumping] = useState(false);
    const [obstX, setObstX] = useState(400);
    const [score, setScore] = useState(0);
    const [speed, setSpeed] = useState(5);
    const [started, setStarted] = useState(false);

    const jump = () => {
        if(!isJumping) {
            setIsJumping(true);
            setPlayerY(150);
            setTimeout(() => {
                setPlayerY(80);
                setIsJumping(false);
            }, 500);
        }
    }

    const checkColision = () => {
        if(obstX < 110 && obstX > 80 && playerY === 80) {
            setSpeed(5);
            setScore(0);
            setObstX(400);
            setStarted(false);
        }
    }

    useEffect(() => {
        const gameInterval = setInterval(() => {
            if(started){
                setObstX(obstX - speed);

                if (obstX < 0) {
                    setObstX(400);
                    setScore(score + 1);
                    if(score % 5 == 0) {
                        setSpeed(speed + 1);
                    }
                }

                checkColision();
            }
            
        }, 20);

        return () => clearInterval(gameInterval);
    }, [obstX, score, playerY]);

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.keyCode === 87) {
                if(started == false) {
                    setStarted(true);
                }
                jump();
            }
        };

        const handleTouch = (e) => {
            e.preventDefault();
            jump();
        };

        window.addEventListener("keydown", handleKeyPress);

        window.addEventListener("touchstart", handleTouch);
    }, []);

    return(
        <div className={styles.container}>
            <span>Score: {score}</span>
            <div className={styles.obst} style={{left: `${obstX}px`}}></div>
            <div className={styles.player} style={{bottom: `${playerY}px`}}></div>
            <div className={styles.chao}></div>
        </div>
    );
}