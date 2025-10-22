import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<b>Hello World!<b>");
});

app.get("/route-handler", (req, res) => {
  res.json({
    name:"Dhanu",
    age: 21,
    married : false
  });
});

app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});
