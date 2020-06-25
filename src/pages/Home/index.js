import React from "react";
import { useCanvas } from "../../components/canvas/index.js";
import "./style.css";
import { Link } from "react-router-dom";

function App() {
  const [
    coordinates,
    setCoordinates,
    canvasRef,
    canvasWidth,
    canvasHeight,
  ] = useCanvas();

  return (
    <div className="Behind">
      <canvas
        className="canvas2"
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
      />
      <div className="infoCard">
        <h1>Hello, I'm Tyler Collins.</h1>
        <h2>A FullStack Web Developer</h2>
        <Link to="/about" className=" btn btn-primary">
          View My Work
        </Link>
      </div>
    </div>
  );
}

export default App;
