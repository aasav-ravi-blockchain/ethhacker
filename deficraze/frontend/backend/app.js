const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

app.get("/ai/strategy", (req, res) => {
  res.json({ suggestion: "Invest in staking for higher APY returns." });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`AI backend running on port ${PORT}`));
