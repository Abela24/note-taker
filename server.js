const express = require("express");
const path = require("path");
const fs = require("fs");
const util = require("util");
const { json } = require("express");
//these are the dependecies

//setting and using express
const app = express ()
const PORT = process.env.PORT || 8000;


app.use(express.json());


//asynchronous Processes
const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.writeFile)

app.use(express.urlencoded({ extended: true}));
app.use(express.json());


//route app
fs.appendFile.get('/'),(req,res) =>
res.sendFile(path.join('/notes'))


//creating api route from a requeest  notes to  db.jSon for response
fs.appendFile.get("api/notes", function(req, res){
    readFileAsync("Develope/.db/db.json")
})
//get request
app.get("/api/notes", function(req, res) {
    readFileAsync('./Develop/db/db.json', "uft8").then(function(data) {
        notes = [] .concat(JSON.parse(data))
        res.Json(notes);
    })
})

//API post request
app.post("/api/notes", function(req, res) {
    readFileAsync('./develop/db/db.json', "uft8").then(function(data) {
        notes = [] .concat(JSON.parse(data))
        res.Json(notes);
    })
    note.id = notes.length + 1
    notes.push(notes);
    return notes
})
.then(function(notes){
    writeFileAsync("./Develop/db/db.json", JSON.stringify(notes))
    res.Json(notes);
})



//route to html
 app.get("/notes", function(req, res) {
    res.sendFile(path.json(__dirname), "./develope/public/note.html")
});
 
    app.get("*", function(req, res) {
        res.sendFile(path.json(__dirname, "./develope/public/ndex.html"));
    })

    
    app.get("/", function(req, res) {
        res.sendFile(path.json(__dirname, "./develope/public/ndex.html"));
    })




//delete request
app.delete("/api/notes/:id", function(req, res ){
    const idDelete = parseInt(req.param.id);
    readFileAsync("./Develope/db/db.json", "uft8").then(function(data){
        const notes = [].concat(json.parse(data));
        const newNotes = []
        for (let i = 0; i<notes.length; i++) {
            if(idDelete !== notes[i].id) {
                newNotes.push(notes[i])
            }
        }
        return newNotes
    })
    .then(function(notes) {
        writeFileAsync("./develop/db/db.json", json.stringify(notes))
        res.send("saved change has been sucessfull")
    })
})

app.listen(PORT, function () {
    console.log("app is now listening to PORT")
})