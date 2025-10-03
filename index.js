const express = require("express");
const app = express();
const port = 4000;
const cors = require(`cors`);
//minii buh huset cors npm packege ashiglan
app.use(cors());
app.get("/hello", (req, res) => {
  res.json("Hi~ World!");
});

//memeory dotor bichih ued refresh hiiwel alga boldog
const task = [];

const products = [
  { id: 6, name: "macbook" },
  { id: 6, name: "macbook" },
];

//awah
app.get("/tasks", (req, res) => {
  res.send([]);
});
//shineer awah
app.post("/tasks", (req, res) => {
  res.send([]);
});
//ustgah
app.delete("/tasks/:id", (req, res) => {
  const id = res.params.id;
  res.send([]);
});
//zasah
app.put("/tasks/:id", (req, res) => {
  const id = res.params.id;
  res.send([]);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
