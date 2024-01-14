doAsyncOperation = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const value = Math.random()
            if (value > 0.5) {
                resolve(`you gotta print it out, bro ${value}}`)
            } else {
                reject(`you need more prep, bro ${value}`)
            }
        }, 1000)
    })
}

doAsyncOperation()
    .then((message) => {
        console.log(message)
    })
    .catch((message) => {
        console.log(message)
    })
    .finally(() => {
        console.log("executing finally!")
    })