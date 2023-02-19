const express = require("express");
const apiroutes = require("./routes/apiroutes")
const htmlroutes =require("./routes/htmlroutes")
//these are the dependecies

//setting and using express
const app = express ()
const PORT = process.env.PORT || 8000;


app.use(express.json());




app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'))


app.use('/api', apiroutes)
app.use('/', htmlroutes)






app.listen(PORT, function () {
    console.log("app is now listening to PORT")
})