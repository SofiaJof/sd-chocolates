const express = require("express");
const app = express();

const path = require('path');

app.set("view engine", "ejs");
app.set ("views", path.resolve(__dirname, "views"));

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

const indexRouter = require("./routes/index");

app.use("/", indexRouter); 


app.listen(3000, ()=>{
    console.log("Servidor corriendo!!!")
})