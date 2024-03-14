// routes/answerRoutes.js
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authentMiddleware");
const dbConnection = require("../db/dbConfig"); // Correct import

// Import the controller functions
const {
  createAnswer,
  allAnswers,
  getTopQuestion,
} = require("../controler/answercontroler");

// Route for creating an answer
router.post("/createAnswer/:questionId", authMiddleware, createAnswer);

// Route for fetching all answers
router.get("/allAnswers", authMiddleware, async (req, res) => {
  try {
    const query = `
      SELECT answer.*, users.username
      FROM answer
      JOIN users ON answer.userid = users.userid
    `;
    const result = await dbConnection.query(query); // Correct usage of dbConnection

    const rows = result[0]; // Access the first element of the result array

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Route for fetching the top question
router.get("/getTopQuestion", authMiddleware, getTopQuestion);

module.exports = router;
