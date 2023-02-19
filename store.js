const util = require("util")
const fs = require("fs")
const readFileAsync = until.promsfile(fs.readFile)
const writeFile = until.promsfile(fs.writeFile)

const writeFile = util.promisify(fs.writeFile)
const readFileAsync = util.promisify(fs.readFile)

class store {
    readMethod(){
        return readFileAsync
        ('./db/db.json', "utf8")
    }
    writeMethod(){
        return fs.writeFile
    }
    getNotes()
    addNotes()
}