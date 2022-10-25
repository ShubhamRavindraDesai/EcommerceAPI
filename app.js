const express = require("express");
const productRouter = require("./routes/productRoutes");
const userRouter = require('./routes/userRoutes');

const cors = require("cors");
const app = express();
const dotenv = require("dotenv");

const mongoose = require("mongoose");
// let mysql = require('mysql');

const path = require("path");
dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);
mongoose.connect(DB,{
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
}).then((con) => {
  // console.log(con.connections)
  console.log("DB connection successful");
});

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: process.env.PASSWORD,
//   database: 'test'
// });

// connection.connect(function(err) {
//   if (err) {
//     return console.error('error: ' + err.message);
//   }

//   console.log('Connected to the MySQL server.');
// });

app.use(express.json({ limit: '10kb' }));
app.use(cors());
app.use("/api/v1/products", productRouter);
app.use('/api/v1/users', userRouter);
const port = 8000 || process.env.PORT;
app.listen(port, () => {
  console.log("server is running on port 8000");
});

// exports.module = connection