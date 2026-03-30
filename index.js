const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Flying Rocket</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          overflow: hidden;
          background: linear-gradient(to bottom, #020111, #191970, #000);
          height: 100vh;
          font-family: Arial, sans-serif;
        }

        .sky {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        .star {
          position: absolute;
          width: 3px;
          height: 3px;
          background: white;
          border-radius: 50%;
          opacity: 0.8;
          animation: twinkle 2s infinite ease-in-out alternate;
        }

        @keyframes twinkle {
          from {
            opacity: 0.2;
            transform: scale(1);
          }
          to {
            opacity: 1;
            transform: scale(1.5);
          }
        }

        .rocket {
          position: absolute;
          left: -200px;
          top: 50%;
          width: 180px;
          height: 80px;
          animation: flyAcross 6s linear infinite;
          transform-origin: center;
        }

        @keyframes flyAcross {
          0% {
            left: -220px;
            top: 60%;
            transform: rotate(-10deg) scale(1);
          }
          25% {
            top: 45%;
            transform: rotate(-5deg) scale(1.03);
          }
          50% {
            top: 35%;
            transform: rotate(0deg) scale(1.05);
          }
          75% {
            top: 25%;
            transform: rotate(5deg) scale(1.03);
          }
          100% {
            left: 110%;
            top: 10%;
            transform: rotate(10deg) scale(1);
          }
        }

        .body {
          position: absolute;
          left: 30px;
          top: 15px;
          width: 90px;
          height: 50px;
          background: #d9d9d9;
          border-radius: 50px 20px 20px 50px;
          border: 2px solid #999;
        }

        .nose {
          position: absolute;
          left: 115px;
          top: 15px;
          width: 0;
          height: 0;
          border-top: 25px solid transparent;
          border-bottom: 25px solid transparent;
          border-left: 45px solid #ff4d4d;
        }

        .window {
          position: absolute;
          left: 70px;
          top: 25px;
          width: 18px;
          height: 18px;
          background: #87ceeb;
          border: 3px solid #444;
          border-radius: 50%;
        }

        .fin-top,
        .fin-bottom {
          position: absolute;
          left: 35px;
          width: 25px;
          height: 20px;
          background: #ff4d4d;
        }

        .fin-top {
          top: 5px;
          clip-path: polygon(0 100%, 100% 0, 100% 100%);
        }

        .fin-bottom {
          top: 55px;
          clip-path: polygon(0 0, 100% 0, 100% 100%);
        }

        .flame {
          position: absolute;
          left: 0;
          top: 25px;
          width: 35px;
          height: 20px;
          background: radial-gradient(circle, yellow 0%, orange 50%, red 100%);
          clip-path: polygon(100% 0, 0 50%, 100% 100%);
          animation: flameFlicker 0.15s infinite alternate;
        }

        @keyframes flameFlicker {
          from {
            transform: scaleX(1) scaleY(1);
            opacity: 0.9;
          }
          to {
            transform: scaleX(1.3) scaleY(0.8);
            opacity: 1;
          }
        }

        .title {
          position: absolute;
          top: 20px;
          width: 100%;
          text-align: center;
          color: white;
          font-size: 2rem;
          letter-spacing: 2px;
          text-shadow: 0 0 10px rgba(255,255,255,0.7);
        }
      </style>
    </head>
    <body>
      <div class="sky">
        <div class="title">🚀 Rocket Flight</div>

        <div class="star" style="top: 10%; left: 15%; animation-delay: 0s;"></div>
        <div class="star" style="top: 20%; left: 70%; animation-delay: 0.4s;"></div>
        <div class="star" style="top: 35%; left: 40%; animation-delay: 0.8s;"></div>
        <div class="star" style="top: 50%; left: 80%; animation-delay: 1.2s;"></div>
        <div class="star" style="top: 65%; left: 25%; animation-delay: 1.6s;"></div>
        <div class="star" style="top: 75%; left: 55%; animation-delay: 0.7s;"></div>
        <div class="star" style="top: 15%; left: 90%; animation-delay: 1.1s;"></div>
        <div class="star" style="top: 85%; left: 10%; animation-delay: 1.8s;"></div>

        <div class="rocket">
          <div class="flame"></div>
          <div class="body"></div>
          <div class="nose"></div>
          <div class="window"></div>
          <div class="fin-top"></div>
          <div class="fin-bottom"></div>
        </div>
      </div>
    </body>
    </html>
  `);
});

