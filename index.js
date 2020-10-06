require("dotenv").config();
const express = require("express");
const { connect: connectToDB } = require("./db");
const routes = require("./routes");

const app = express();
app.use(express.json());
app.use("/api", routes);

async function startServer(isConnected) {
  const { PORT: port = 3000 } = process.env;
  if (isConnected)
    app.listen(port, console.log(`Server running on port ${port}`));
}

connectToDB().then(startServer);
