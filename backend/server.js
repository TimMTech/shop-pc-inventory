const express = require("express");
const path = require('path')
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const routerUrls = require("./Routes/routes");
const app = express();

const PORT = process.env.PORT || 5000;

dotenv.config({path: path.resolve( __dirname, '../.env')})

mongoose.connect(process.env.DATABASE_ACCESS, () => {
  console.log("DB Connected");
});
  
app.use(express.json());
app.use(cors());
app.use("/api", routerUrls);

app.get("/", (req, res) => {
  res.send("API IS RUNNING");
});

app.post("/", (req, res) => {
  res.send("API IS RUNNING")
})

app.listen(PORT, () => console.log(`Server connected on port ${PORT}`));
