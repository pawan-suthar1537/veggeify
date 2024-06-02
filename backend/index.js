const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./utils/db");
dotenv.config();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});


const itemRouter = require("./routes/itemroute")
const categoryRouter = require("./routes/categoryroute")

app.use("/api/items", itemRouter);
app.use("/api/category", categoryRouter);

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to database:", err);
  });