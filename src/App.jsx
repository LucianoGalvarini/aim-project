import "./App.css";
import React, { useState } from "react";

function App() {
  const [difficult, setDifficult] = useState({
    dif: "normal",
    size: 50,
    time: 1500,
    delete: 500,
  });

  const [timer, setTimer] = useState({
    seconds: 60,
  });

  const [counter, setCounter] = useState({
    count: 0,
  });

  const [showButton, setShowButton] = useState(true);

  const randomCreateBall = () => {
    const div = document.createElement("div");
    const box = document.getElementById("box");
    div.style.cssText =
      "position: absolute; background-color: #ce6b5d; border-radius: 100%; cursor: pointer;";
    div.setAttribute("id", "ball");

    div.addEventListener("click", () => {
      deleteBall();
      setCounter({
        count: counter.count++,
      });
    });

    div.style.width = difficult.size + "px";
    div.style.height = difficult.size + "px";

    div.style.marginTop = Math.random() * (550 - difficult.size - 1) + 1 + "px";
    div.style.marginLeft =
      Math.random() * (1100 - difficult.size - 1) + 1 + "px";

    if (!box.hasChildNodes(document.getElementById("ball"))) {
      box.appendChild(div);
    }
  };

  const deleteBall = () => {
    const box = document.getElementById("box");
    const ball = document.getElementById("ball");
    box.removeChild(ball);
  };

  const handleStart = () => {
    setInterval(randomCreateBall, difficult.time);
    setInterval(deleteBall, difficult.time + difficult.delete);
    setInterval(
      () =>
        setTimer({
          seconds: timer.seconds--,
        }),
      1000
    );
  };

  const handleStop = () => {
    window.location.reload();
  };

  if (timer.seconds === 0) {
    window.location.reload();
  }

  return (
    <div className="app">
      {showButton && (
        <div className="box-buttons">
          <button
            id="start"
            className="buttons"
            onClick={() => {
              handleStart();
              setShowButton(!showButton);
            }}
          >
            Start
          </button>
          <div className="difficult">
            <p>Difficult</p>
            <button
              onClick={() => {
                setDifficult({
                  dif: "easy",
                  size: 75,
                  time: 2000,
                  delete: 800,
                });
              }}
            >
              Easy
            </button>
            <button
              onClick={() => {
                setDifficult({
                  dif: "normal",
                  size: 50,
                  time: 1500,
                  delete: 600,
                });
              }}
            >
              Normal
            </button>
            <button
              onClick={() => {
                setDifficult({
                  dif: "hard",
                  size: 25,
                  time: 1000,
                  delete: 400,
                });
              }}
            >
              Hard
            </button>
          </div>
        </div>
      )}

      {showButton === false && (
        <div className="box-buttons">
          <button
            id="stop"
            className="buttons"
            onClick={() => {
              handleStop();
              setShowButton(!showButton);
            }}
          >
            Stop
          </button>
          <div className="difficult">
            <p>Timer</p>
            <input className="clockInput" type="number" value={timer.seconds} />
          </div>
          <div className="difficult">
            <p>Shots</p>
            <input className="clockInput" type="number" value={counter.count} />
          </div>
        </div>
      )}
      <div id="box" className="box"></div>
    </div>
  );
}

export default App;
