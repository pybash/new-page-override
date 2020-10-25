window.addEventListener("load", resp => {
    // https://www.weather.gov/documentation/services-web-api
    let weatherLink = ""
    let textbox = document.getElementById("textbox")
    let allButtons = document.getElementById("buttonsBar").childNodes
    textbox.addEventListener("keypress", buttonPress => {
        if(buttonPress.key == "Enter") {
            location.href = "https://www.google.com/search?q=" + textbox.value
        }
    })

    fetch(weatherLink).then(resp => {
        resp.json().then(jsonData => {
            console.log(jsonData)
            let weatherTemp = document.getElementById("weatherTextTemp")
            let forecastFor = document.getElementById("forecastFor")
            forecastFor.innerText = jsonData["properties"]["periods"][0]["shortForecast"]
            weatherTemp.innerText = jsonData["properties"]["periods"][0]["temperature"]
        })
    })

    for(let button of allButtons) {
        button.onclick = function() {
            location.href = this.getAttribute("linkTo")
        }
    }
})