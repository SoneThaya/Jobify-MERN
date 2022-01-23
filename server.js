import express from "express";
import notFoundMiddleware from "./middleware/not-found.js";

const app = express();

// middleware
notFoundMiddleware;

app.get("/", (req, res) => {
  res.send("welcome");
});

app.use(notFoundMiddleware);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
