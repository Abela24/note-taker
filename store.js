const util = require("util")
const fs = require("fs")
const writeFileAsync = util.promisify(fs.writeFile)
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