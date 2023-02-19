const note = require('express').Router();



note.get("/notes", function(req, res) {
    res.sendFile(path.json(__dirname), "./develope/public/note.html")
});
 
    note.get("*", function(req, res) {
        res.sendFile(path.json(__dirname, "./develope/public/ndex.html"));
    })

    module.exports = note;