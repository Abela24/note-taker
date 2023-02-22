const note = require('express').Router();
note.get("/api/notes", function(req, res) {
    readFileAsync('./Develop/db/db.json', "uft8").then(function(data) {
        notes = [] .concat(JSON.parse(data))
        res.Json(notes);
    })
})

//API post request
note.post("", function(req, res) {
    ('./db/db.json', "uft8").then(function(data) {
        notes = [] .concat(JSON.parse(data))
        res.Json(notes);
    })
    note.id = notes.length + 1
    notes.push(notes);
    return notes
    .then(function(notes){
        writeFileAsync("./db/db.json", JSON.stringify(notes))
        res.Json(notes);
    })
    
})




//route to html
 note.get("/notes", function(req, res) {
    res.sendFile(path.json(__dirname), "./develope/public/note.html")
});
 
    note.get("*", function(req, res) {
        res.sendFile(path.json(__dirname, "./develope/public/ndex.html"));
    })

    
    // note.get("/", function(req, res) {
    //     res.sendFile(path.json(__dirname, "./develope/public/ndex.html"));
    // })




//delete request
note.delete("/api/notes/:id", function(req, res ){
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

module.exports= note;