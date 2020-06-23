import React from "react";
import { useCanvas } from "../../components/animation/index.js";
import "./style.css";

function App() {
  const [
    coordinates,
    setCoordinates,
    canvasRef,
    canvasWidth,
    canvasHeight,
  ] = useCanvas();

  return (
    <>
      <canvas
        className="canvas2"
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
      />
      <div className="infoCard">
        <h1>Hello, I'm Tyler Collins.</h1>
        <h2>A FullStack Web Developer</h2>
        <button>View My Work</button>
      </div>
    </>
  );
}

export default App;
