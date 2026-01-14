import express from "express";

type Route = string;
type PORT = number;

export namespace Server {
  export function setup(route: Route, serverPort: PORT) {
    const app = express();

    app.get(route, (req, res) => {
      res.send("Hello World");
    });

    app.listen(serverPort, () => {
      console.log(`Server Running at: http://localhost:${serverPort} `);
    });
  }

  export function getServerUp() {
    Server.setup("/", 3000);
  }
}
