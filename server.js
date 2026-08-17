const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

app.get("/api/status", (req, res) => {
  res.json({
    app: "NovaVest",
    status: "online",
    mode: "production",
    message: "NovaVest API is running"
  });
});

app.get("/", (req, res) => {
  res.send("NovaVest server is running 🚀");
});

app.listen(PORT, () => {
  console.log(`NovaVest running on port ${PORT}`);
});
