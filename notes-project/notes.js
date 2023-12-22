const chalk = require('chalk')
const fs = require('fs')


const addNotes = (title, body) => {
    // 1. Load the notes from file
    const notes = loadNotes()

    // 2. Push the new notes into the loaded notes conditionally
    duplicateNote = notes.find((note) => title === note.title)

    debugger;

    if (! duplicateNote){
        notes.push({
            title: title,
            body: body,
        })
        console.log(chalk.bgGreen("Note added successfully!"))
    } else {
        console.log(chalk.bgRed("Title already taken!"))
    }

    // 3. Save it back to the file
    saveNotes(notes)

}

const removeNote = (title) => {
    notes = loadNotes()
    matchNote = notes.filter((note) => title === note.title)

    if(matchNote.length >= 1) {
        noteAfterDelete = notes.filter(x => !matchNote.includes(x))
        console.log("noteAfterDelete -->", noteAfterDelete)
        saveNotes(noteAfterDelete)
        console.log(chalk.bgGreen("Note removed!"))
    } else {
        console.log(chalk.bgRed("No note found!"))
    }
}

const listNotes = () => {
    notes = loadNotes()
    console.log(chalk.bgGreen("Your notes\n"))
    console.log(notes)
}

const readNote = (title) => {
    const notes = loadNotes()
    noteFound = notes.find((note) => title === note.title)
    if (noteFound) {
        console.log("Note Found!")
        console.log(chalk.green.inverse('Title: ', noteFound.title))
        console.log(chalk.green.inverse('Body: ', noteFound.body))
    } else {
        console.log(chalk.red.inverse("Note not found!"))
    }

}

const loadNotes = () => {
    try{
        const notesBuffer = fs.readFileSync('./notes.json')
        const notesString = notesBuffer.toString()
        const notesJson = JSON.parse(notesString)

        return notesJson
    } catch(e) {
        console.log("No file found")
        return []
    }
}

const saveNotes = (notes) => {
    notesStringified = JSON.stringify(notes)
    fs.writeFileSync('./notes.json', notesStringified)
}


module.exports = {
    'addNotes': addNotes,
    'removeNote': removeNote,
    'listNotes': listNotes,
    'readNote': readNote
}