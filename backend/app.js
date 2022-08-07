const express = require("express");
const connectDB = require("./db/connect");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const newsRoutes = require("./routes/news");
const productsRoutes = require("./routes/products");
const instaRoutes = require("./routes/insta");
const officesRoutes = require("./routes/offices");

app.use(`/api/v1/news`, newsRoutes);
app.use(`/api/v1/products`, productsRoutes);
app.use(`/api/v1/insta`, instaRoutes);
app.use(`/api/v1/offices`, officesRoutes);

const port = 5000;
const start = async () => {
  try {
    await connectDB(
      "mongodb+srv://lepre:lepre123@cluster0.k3rffwa.mongodb.net/?retryWrites=true&w=majority"
    );
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};
start();
