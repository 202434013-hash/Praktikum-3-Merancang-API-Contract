const express = require("express");

const app = express();

app.use(express.json());

// ========================================
// DATA BOOKS
// ========================================

const books = [
  {
    id: 1,
    title: "Laskar Pelangi",
    author: "Andrea Hirata"
  },
  {
    id: 2,
    title: "Bumi",
    author: "Tere Liye"
  }
];

// ========================================
// BOOKS API
// ========================================

// GET semua books
app.get("/api/books", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Books retrieved successfully",
    data: books
  });
});

// GET book berdasarkan ID
app.get("/api/books/:id", (req, res) => {
  const id = Number(req.params.id);

  const book = books.find((book) => book.id === id);

  if (!book) {
    return res.status(404).json({
      status: 404,
      message: "Book not found"
    });
  }

  res.status(200).json({
    status: 200,
    message: "Book retrieved successfully",
    data: book
  });
});

// ========================================
// STATUS API
// ========================================

app.get("/status/200", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Success"
  });
});

app.get("/status/400", (req, res) => {
  res.status(400).json({
    status: 400,
    message: "Bad Request"
  });
});

app.get("/status/404", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "Not Found"
  });
});

app.get("/status/429", (req, res) => {
  res.status(429).json({
    status: 429,
    message: "Too Many Requests"
  });
});

// ========================================
// START SERVER
// ========================================

app.listen(3000, () => {
  console.log("API berjalan di http://localhost:3000");
});