
// NOTE: This is off-topic.
// We don't create promises. Rather we functions that return Promises.
// This pattern is more prevalent. So, we should be well equipped to handle promises

// Below is an example of a function that returns a promise.
const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(a + b)
        }, 2000)
    })
}

// Problem: How to pass the result of one promise to another???

// Solution 1: Call one more add within the add

// add(1,2).then((sum) => {
//     console.log(sum)
//     add(sum, 5).then((sum2) => {
//         console.log(sum2)
//     }).catch((error) => {
//         console.log(error)
//     })
// }).catch((error) => {
//     console.log(error)
// })

// Solution 2: Promise Chaining

add(1,2).then((sum) => {
    console.log(sum)
    return add(sum, 6)
}).then((sum2) => {
    console.log(sum2)
}).catch((error) => {
    console.log(error)
})
