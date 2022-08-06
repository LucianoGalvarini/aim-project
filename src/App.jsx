import "./App.css";
import React, { useState } from "react";

function App() {
  const [difficult, setDifficult] = useState("normal");

  const handleCreateBall = () => {
    const box = document.getElementById("box");
    const ball = document.createElement("div");
    ball.setAttribute("id", "ball");
    ball.classList.add("ball");

    ball.addEventListener("click", () => {
      box.removeChild(document.getElementById("ball"));
    });

    // ball.click

    switch (difficult) {
      case "easy":
        box.classList.add("easy");
        ball.classList.add("easyBall");
        break;
      case "normal":
        box.classList.add("normal");
        ball.classList.add("normalBall");
        break;
      case "hard":
        box.classList.add("hard");
        ball.classList.add("hardBall");
        break;
      default:
    }

    box.appendChild(ball);
  };

  const randomCreateBall = () => {
    handleCreateBall();
  };

  const handleStart = () => {
    randomCreateBall();
  };

  return (
    <div className="app">
      <div className="box-buttons">
        <button className="buttons" onClick={handleStart}>
          Start
        </button>
        <button className="buttons">Reset</button>
        <div className="difficult">
          <p>Difficult</p>
          <button
            onClick={() => {
              setDifficult("easy");
            }}
          >
            Easy
          </button>
          <button
            onClick={() => {
              setDifficult("normal");
            }}
          >
            Normal
          </button>
          <button
            onClick={() => {
              setDifficult("hard");
            }}
          >
            Hard
          </button>
        </div>
      </div>
      <div id="box" className="box"></div>
    </div>
  );
}

export default App;
