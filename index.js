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
      <link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500&display=swap" rel="stylesheet">
      <style>
        body {
          margin: 0;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8f9fa;
          font-family: 'Google Sans', Arial, sans-serif;
          color: #202124;
        }

        .container {
          text-align: center;
          padding: 40px 60px;
          border-radius: 16px;
          background: #ffffff;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        h1 {
          font-size: 28px;
          font-weight: 500;
          margin: 0;
        }

        .dot {
          color: #34a853;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1> Amme.... Mn awaaa amme<span class="dot">!</span></h1>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
