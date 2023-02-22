const note = require('express').Router();
const path = require('path');


note.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname), "../note.html")
});
 
    note.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../index.html"));
    })

    module.exports = note;