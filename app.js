const express = require('express')
const productRouter = require('./routes/productRoutes')
const cors = require('cors')
const app = express()
const dotenv = require('dotenv');

const mongoose = require('mongoose');
const path = require('path')
dotenv.config({ path: './config.env' });


const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB)
  .then((con) => {
    // console.log(con.connections)
    console.log('DB connection successful');
  });





app.use(cors())
app.use('/api/v1/products', productRouter)

app.listen(8000, ()=> {
    console.log('server is running on port 8000')
})