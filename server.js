const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/generate", (req, res) => {
  const { name, skills, experience } = req.body;

  const summary = `Highly motivated professional named ${name} with strong skills in ${skills}. Experienced in ${experience}.`;

  res.json({ summary });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});