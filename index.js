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
      <title>PreProdSE</title>
      <link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap" rel="stylesheet">
      <style>
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at center, #1f2937 0%, #111827 45%, #030712 100%);
          font-family: 'Google Sans', Arial, sans-serif;
          overflow: hidden;
        }

        .container {
          text-align: center;
          padding: 50px 70px;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          box-shadow:
            0 0 25px rgba(255, 255, 255, 0.08),
            0 0 60px rgba(52, 168, 83, 0.12),
            inset 0 0 20px rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          animation: containerPulse 3s ease-in-out infinite;
        }

        h1 {
          margin: 0;
          font-size: clamp(2rem, 5vw, 4rem);
          font-weight: 700;
          letter-spacing: 1px;
          line-height: 1.2;
          color: #ffffff;
          display: inline-block;
          position: relative;
          animation:
            textPulse 1.8s ease-in-out infinite,
            floatText 3.5s ease-in-out infinite;
          text-shadow:
            0 0 8px rgba(255, 255, 255, 0.35),
            0 0 16px rgba(255, 255, 255, 0.2),
            0 0 30px rgba(52, 168, 83, 0.18);
        }

        h1::before {
          content: "";
          position: absolute;
          inset: -8px -14px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.18),
            transparent
          );
          transform: translateX(-130%);
          animation: shine 2.8s linear infinite;
          pointer-events: none;
          filter: blur(6px);
        }

        .dot {
          color: #34a853;
          display: inline-block;
          animation:
            dotBounce 0.9s ease-in-out infinite,
            dotGlow 1.4s ease-in-out infinite;
          text-shadow:
            0 0 10px rgba(52, 168, 83, 0.8),
            0 0 22px rgba(52, 168, 83, 0.6),
            0 0 40px rgba(52, 168, 83, 0.45);
        }

        @keyframes textPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.88;
            text-shadow:
              0 0 8px rgba(255, 255, 255, 0.25),
              0 0 18px rgba(255, 255, 255, 0.16),
              0 0 28px rgba(52, 168, 83, 0.12);
          }
          50% {
            transform: scale(1.08);
            opacity: 1;
            text-shadow:
              0 0 14px rgba(255, 255, 255, 0.6),
              0 0 28px rgba(255, 255, 255, 0.35),
              0 0 42px rgba(52, 168, 83, 0.35);
          }
        }

        @keyframes floatText {
          0%, 100% {
            translate: 0 0;
          }
          50% {
            translate: 0 -8px;
          }
        }

        @keyframes dotBounce {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.2);
          }
        }

        @keyframes dotGlow {
          0%, 100% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-130%);
          }
          100% {
            transform: translateX(130%);
          }
        }

        @keyframes containerPulse {
          0%, 100% {
            box-shadow:
              0 0 25px rgba(255, 255, 255, 0.08),
              0 0 60px rgba(52, 168, 83, 0.12),
              inset 0 0 20px rgba(255, 255, 255, 0.05);
          }
          50% {
            box-shadow:
              0 0 35px rgba(255, 255, 255, 0.12),
              0 0 80px rgba(52, 168, 83, 0.24),
              inset 0 0 26px rgba(255, 255, 255, 0.09);
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Hello Miss, Hi<span class="dot">!</span></h1>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
});
