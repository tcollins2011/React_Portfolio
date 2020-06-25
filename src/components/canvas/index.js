import React, { useState, useEffect, useRef } from "react";

export const canvasWidth = window.innerWidth;
export const canvasHeight = window.innerHeight;
let particleArray = [];
const numberOfParticles = 150;
const mouse = {
  x: null,
  y: null,
};
window.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
});
setInterval(function () {
  mouse.x = undefined;
  mouse.y = undefined;
}, 200);

export function useCanvas() {
  const canvasRef = useRef(null);
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    const canvasObj = canvasRef.current;
    const ctx = canvasObj.getContext("2d");
    class Particle {
      constructor(x, y, size, color, weight) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.weight = weight;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
      update() {
        this.size -= 0.05;
        if (this.size < 0) {
          this.x = mouse.x + (Math.random() * 20 - 10);
          this.y = mouse.y + (Math.random() * 20 - 10);
          this.size = Math.random() * 5 + 5;
          this.weight = Math.random() * 2 - 0.5;
        }
        this.y += this.weight;
        this.weight += 0.2;

        if (this.y > canvasHeight - this.size) {
          this.weight *= -0.4;
        }
      }
    }
    function init() {
      particleArray = [];
      for (let i = 0; i < numberOfParticles; i++) {
        let x = Math.random() * canvasWidth;
        let y = Math.random() * canvasHeight;
        let size = Math.random() * 5 + 5;
        let color = "white";
        let weight = 1;
        particleArray.push(new Particle(x, y, size, color, weight));
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
      }
      connect();
      requestAnimationFrame(animate);
    }
    init();
    animate();

    function connect() {
      let opacityValue = 1;
      for (let a = 0; a < particleArray.length; a++) {
        for (let b = a; b < particleArray.length; b++) {
          let distance =
            (particleArray[a].x - particleArray[b].x) *
              (particleArray[a].x - particleArray[b].x) +
            (particleArray[a].y - particleArray[b].y) *
              (particleArray[a].y - particleArray[b].y);
          if (distance < (canvasWidth / 12) * (canvasHeight / 12)) {
            opacityValue = 1 - distance / 10000;
            ctx.strokeStyle = "rgba(255,255,255," + opacityValue + ")";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particleArray[a].x, particleArray[a].y);
            ctx.lineTo(particleArray[b].x, particleArray[b].y);
            ctx.stroke();
          }
        }
      }
    }
  });

  return [coordinates, setCoordinates, canvasRef, canvasWidth, canvasHeight];
}
