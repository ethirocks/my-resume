import React, { useRef, useState } from 'react';
import './GamesSection.css';

const GamesSection = () => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    setGameOver(false);
    setGameStarted(true);
    setScore(0);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let ballX = canvas.width / 2;
    let ballY = canvas.height - 30;
    let ballSpeedX = 2;
    let ballSpeedY = -2;
    const ballRadius = 10;

    const paddleHeight = 10;
    const paddleWidth = 75;
    let paddleX = (canvas.width - paddleWidth) / 2;

    const drawBall = () => {
      ctx.beginPath();
      ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
      ctx.fillStyle = '#0095DD';
      ctx.fill();
      ctx.closePath();
    };

    const drawPaddle = () => {
      ctx.beginPath();
      ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
      ctx.fillStyle = '#0095DD';
      ctx.fill();
      ctx.closePath();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBall();
      drawPaddle();

      if (ballX + ballSpeedX > canvas.width - ballRadius || ballX + ballSpeedX < ballRadius) {
        ballSpeedX = -ballSpeedX;
      }
      if (ballY + ballSpeedY < ballRadius) {
        ballSpeedY = -ballSpeedY;
      } else if (ballY + ballSpeedY > canvas.height - ballRadius) {
        if (ballX > paddleX && ballX < paddleX + paddleWidth) {
          ballSpeedY = -ballSpeedY;
          setScore(score => score + 1);
        } else {
          setGameOver(true);
          setGameStarted(false);
          return;
        }
      }

      ballX += ballSpeedX;
      ballY += ballSpeedY;

      if (!gameOver) {
        requestAnimationFrame(draw);
      }
    };

    const mouseMoveHandler = (e) => {
      const relativeX = e.clientX - canvas.offsetLeft;
      if (relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth / 2;
      }
    };

    document.addEventListener('mousemove', mouseMoveHandler, false);

    draw();

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
    };
  };

  return (
    <div className="games-section">
      <h2>Enjoy this game for visiting my website!</h2> {/* Fun and whimsical title */}
      <canvas ref={canvasRef} width={400} height={300} style={{ display: gameStarted ? 'block' : 'none' }} />
      <div className="score" style={{ display: gameStarted ? 'block' : 'none' }}>Score: {score}</div>
      {gameOver && <div className="game-over">Game Over! Your Score: {score}</div>}
      {!gameStarted && !gameOver && <button onClick={startGame}>Start Game</button>}
    </div>
  );
};

export default GamesSection;
