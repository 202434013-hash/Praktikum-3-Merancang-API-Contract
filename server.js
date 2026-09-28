const express = require("express");

const app = express();

app.use(express.json());

// Success response
app.get("/status/200", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Success",
  });
});

// Bad Request
app.get("/status/400", (req, res) => {
  res.status(400).json({
    status: 400,
    message: "Bad Request",
  });
});

// Not Found
app.get("/status/404", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "Not Found",
  });
});

// Too Many Requests
app.get("/status/429", (req, res) => {
  res.status(429).json({
    status: 429,
    message: "Too Many Requests",
  });
});

app.listen(3000, () => {
  console.log("API berjalan di http://localhost:3000");
});
