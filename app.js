const express = require("express");
const tasks = require("./routes/tasks");
require("dotenv").config();

/**
 * Initialize express app
 */
const app = express();
app.use(express.static('./public'));
app.use(express.json());

/**
 * Spin up the server
 */
const spinUpServer = async () => {
  const port = process.env.PORT;

  app.listen(port, console.log(`Server is listening on port ${port}...`));
};

/**
 * Connect to the database and start the app
 * if database connection is successful
 */

const connectDB = require("./config/database/connect");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Connected to the DB successfully");

    spinUpServer();
  } catch (error) {
    console.log(error);
  }
};

/**
 * routes
 */

app.use("/api/v1/tasks", tasks);

start();
