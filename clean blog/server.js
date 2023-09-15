const express = require("express");
const mainRoute = require('./routes/mainRoute')

const app = express();

port = process.env.PORT || 3000;

//Static Middleware
app.use(express.static(__dirname + "/public"))
// Set view engine
app.set('view engine' , 'ejs');

app.use(mainRoute)


app.listen(port , ()=>{
    console.log(`server listening ${port}`);
})