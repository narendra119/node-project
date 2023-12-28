console.log("Executing Client Script!")


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const errorParagraph = document.querySelector('#message-1')
const dataParagraph = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e)=> {
    e.preventDefault()
    const location = search.value

    weatherApi = `http://localhost:3001/weather?address=${location}`
    fetch(weatherApi).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log("in listener")
                console.log(data.error)
                errorParagraph.textContent = data.error
            } else {
                console.log("in else listener")
                dataParagraph.textContent = data.forecast
            }
        })
    })

    console.log(location)
})
