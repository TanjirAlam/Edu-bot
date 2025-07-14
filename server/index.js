const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const askGemini = require("./gemini.js");
const askGemini2 = require("./pq_gemini.js")
const askGemini3 = require("./testgem.js")
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// API Endpoint to handle doubt input
app.get("/",async(req,res)=>{
  res.send("This is Eddy's Backend")
})
app.post("/ask-doubt", async (req, res) => {
  const { question } = req.body;
  console.log(question)
  if (!question || typeof question !== "string") {
    return res.status(400).json({ error: "Invalid question format" });
  }

  const answer = await askGemini(question);
  console.log(answer)
  res.json({answer});
});

app.post("/ask-topic", async (req, res) => {
  const { question } = req.body;
  console.log(question)
  if (!question || typeof question !== "string") {
    return res.status(400).json({ error: "Invalid question format" });
  }

  const answer = await askGemini2(question);
  console.log(answer)
  res.json({answer});
});

// test part
app.post("/ask-test", async (req, res) => {
  const { question } = req.body;
  console.log(question)
  if (!question || typeof question !== "string") {
    return res.status(400).json({ error: "Invalid question format" });
  }

  const answer = await askGemini3(question);
  console.log(answer)
  res.json({answer});
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
