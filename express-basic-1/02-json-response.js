import express from "express";

const app = express();
const port = 3000;

app.get("/json-example", (req, res) => {
  res.json({
    topic: "JSON Response in Express",
    description: "Returning a JSON object from a GET route",
    status: true
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/json-example`);
});
