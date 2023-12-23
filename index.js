const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const toursRouter = require("./routers/tours.router");
const usersRouter = require("./routers/users.router");
const middlewares = require("./middlewares/logger");

dotenv.config("./.env");

const app = express();
// console.log(app.get("env"));
// console.log(process.env);

app.use(express.json()); // middlewares
app.use(
  cors({
    origin: "*",
  })
);
app.use(morgan("dev"));
app.use(middlewares.mylogger);

app.use("/api/v1/tours", toursRouter);
app.use("/api/v1/auth", usersRouter);
app.use("/api/v1/users", usersRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
  // console.log(`Server is listening on port ${process.env.USERNAME}`);
  // console.log(`Server is listening on port ${process.env.PASSWORD}`);
});
