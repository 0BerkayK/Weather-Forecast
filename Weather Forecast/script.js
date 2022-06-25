const url ='https://api.openweathermap.org/data/2.5/'
const key ='e17875fb18dc82a2719bc08e71f4deb6'

const setQuery = (e) =>{
    if(e.keyCode == '13')
    getResult(searchBox.value)
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
}

const displayResult = (result) => {
    let city = document.querySelector('.city')
    city.innerText = `${result.name},${result.sys.country}`

    let temp = document.querySelector('.temp')
    temp.innerText = `${Math.round(result.main.temp)} °C`

    let description = document.querySelector('.description')
    description.innerText = result.weather[0].description

    let maxmin =document.querySelector('.maxmin')
    maxmin.innerText= `${Math.round(result.main.temp_max)} °C /
    ${Math.round(result.main.temp_min)} °C`
}

const searchBox = document.getElementById('searchBox')
searchBox.addEventListener('keypress',setQuery)



