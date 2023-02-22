const express = require("express");
const path = require("path");
const fs = require("fs");
const util = require("util");
const { json } = require("express");
//these are the dependecies

//setting and using express
const app = express()
const PORT = process.env.PORT || 8000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//asynchronous Processes
const {
    readFromFile,
    readAndAppend,
    writeToFile,
  } = require('./helpers/fsUtils');




//route app
// app.get('/'), (req, res) =>
//     res.sendFile(path.join('/notes'))


//creating api route from a requeest  notes to  db.jSon for response
// fs.appendFile.get("api/notes", function(req, res){
//     readFileAsync("Develope/.db/db.json")
// })
//get request
app.get("/api/notes", function (req, res) {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
})

//API post request
app.post("/api/notes", function (req, res) {
    // readFileAsync('./db/db.json', "uft8").then(function (data) {
    //     notes = [].concat(JSON.parse(data))
    //     // add new note
    //     writeFileAsync("./db/db.json", JSON.stringify(notes))
    //     res.Json(notes);
    // })
    // note.id = notes.length + 1
    // notes.push(notes);
    // return notes
})




//route to html
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
})

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname), "./public/note.html")
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
})







//delete request
app.delete("/api/notes/:id", function (req, res) {
    const idDelete = parseInt(req.param.id);
    readFileAsync("./db/db.json", "uft8").then(function (data) {
        const notes = [].concat(json.parse(data));
        const newNotes = []
        for (let i = 0; i < notes.length; i++) {
            if (idDelete !== notes[i].id) {
                newNotes.push(notes[i])
            }
        }
        return newNotes
    }).then(function (notes) {
        writeFileAsync("./db/db.json", json.stringify(notes))
        res.send("saved change has been sucessfull")
    })
})

app.listen(PORT, function () {
    console.log("app is now listening to PORT")
}
)