const yargs = require("yargs")
const chalk = require("chalk")
const validator = require("validator")

const notes = require("./notes")

// yargs
yargs.version("1.1.0")

// Actions: Add, remove, Read, List

// Create Add command
yargs.command({
    command : 'add',
    describe : 'Command to add a note!',
    builder: {
        title: {
            describe: "title of the note",
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: "content of the note",
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body)
    },
})

// Create Remove Command
yargs.command({
    command: 'remove',
    describe: 'Command to remove a note!',
    builder: {
        title: {
            describe: "Command to remove a note using title",
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Create List command
yargs.command({
    command: 'list',
    describe: 'Command to list all the notes! ;D',
    handler() {
        notes.listNotes()
    }
})

// Create Read command
yargs.command({
    command: 'read',
    describe: 'Command to read a note ;D',
    builder: {
        title: {
            describe: 'Command to read a note!',
            demandOption: true,
            type: 'string'
        }

    },
    handler(argv) {
        notes.readNote(argv.title)
    }

})

// yargs.parse()
// console.log(process.argv)
// console.log(typeof yargs.argv)
console.log(yargs.argv)




// console.log(validator.isURL("http://abc.com"))




// const fs = require("fs")

// fs.writeFileSync("notes.txt", "Let us test this")

// Task: Append some text to the notes.txt file

// fs.appendFileSync("notes.txt", "I am trying append the contents to the file\n")
