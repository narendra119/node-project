const doWorkCallback = (inputString, callback) => {
    if (inputString == "error") {
        callback(inputString, undefined)
    } else {
        callback(undefined, inputString)
    }
}

inp = process.argv
input = inp[inp.length - 1]
console.log("Input provided", input)

doWorkCallback(input, (error, result) => {
    if (error) {
        console.log("Error!")
        console.log(error)
    } else {
        console.log("Success!")
        console.log(result)
    }
})
