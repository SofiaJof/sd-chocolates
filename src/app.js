const express = require("express");
const app = express();

const path = require('path');

app.set("view engine", "ejs");
app.set ("views", path.resolve(__dirname, "views"));

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

const indexRouter = require("./routes/index");
const chocolatesRouter = require("./routes/chocolates");
const presentacionRouter = require("./routes/presentacion");
const aboutRouter = require("./routes/about");
const contactRouter = require("./routes/contact");

app.use("/", indexRouter); 
app.use("/chocolates", chocolatesRouter);
app.use("/presentacion",presentacionRouter);
app.use("/about", aboutRouter); 
app.use("/contact", contactRouter); 



app.listen(3000, ()=>{
    console.log("Servidor corriendo!!!")
})