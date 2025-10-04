import express, { Application, Request, Response } from 'express'
import cors from "cors"

// const express = require("express");
const app:Application = express();
const port = 4000;
// const cors = require(`cors`);
//minii buh huset cors npm packege ashiglan
app.use(cors());
app.get("/hello", (req:Request, res:Response) => {
  res.json("Hi~ World!");
});

//memory dotor bichih ued refresh hiiwel alga boldog
const task = [];

const products = [
  { id: 6, name: "macbook" },
  { id: 6, name: "macbook" },
];

//awah
app.get("/tasks", (req:Request, res:Response) => {
  res.send([]);
});
//shineer awah
app.post("/tasks", (req:Request, res:Response) => {
  res.send([]);
});
//ustgah
app.delete("/tasks/:id", (req:Request, res:Response) => {
  const id = req.params.id;
  res.send([]);
});

//zasah
app.put("/tasks/:id", (req:Request, res:Response) => {
  const id = req.params.id;
  res.send([]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
