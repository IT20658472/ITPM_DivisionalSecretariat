const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app =express();
require("dotenv").config();


const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
   
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
} );

// mongoose.connect(process.env.MONGO_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
  
// })
// .then(console.log("Connected to MongoDB"))
// .catch((err) => console.log(err));

// mongoose.connect(`mongodb://username:${process.env.MONGODB_PASSWORD}@localhost:27017/database`, {
//   useNewUrlParser: true, // Use the new `useNewUrlParser` option instead of `useCreateIndex`
//   useUnifiedTopology: true, // Use the new `useUnifiedTopology` option
//   useFindAndModify: false, // Use the `useFindAndModify` option (set to `false` to disable)
//   createIndexes: true // Use the new `createIndexes` option
// })
// .then(() => {
//   console.log('Connected to MongoDB');
// })
// .catch((error) => {
//   console.error('Error connecting to MongoDB:', error);
// });

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("mongodb Connection success!");

})

app.listen(PORT, () =>{
    console.log(`server is up and running on port number: ${PORT}`)
})