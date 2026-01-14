import express from "express";
import cors from "cors";

type Route = string;
type PORT = number;

function setup() {
  const app = express();
  app.use(cors());

  app.get("/", (req, res) => {
    res.send("Hello World");
  });

  app.listen(3000, () => {
    console.log(`Server Running at: http://localhost:${3000} `);
  });
}

setup();
