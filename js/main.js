function getData(){
    let city = document.querySelector('#city').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=5db7ec94bcfdaca1eac4f2b7a112cd7b`)
    .then(response => response.json())
    .then(weatherdata => {
        console.log(weatherdata)
        let location = weatherdata.name
        document.querySelector(`#location`).innerHTML = location
        let high = weatherdata.main.temp_max
        document.querySelector(`#high`).innerHTML = high
        let low = weatherdata.main.temp_min
        document.querySelector(`#low`).innerHTML = low
        let forecast = weatherdata.weather[0].description
        document.querySelector(`#forecast`).innerHTML = forecast
        let humidity = weatherdata.main.humidity
        document.querySelector(`#humidity`).innerHTML = humidity
        let heading = weatherdata.main.temp
        document.querySelector(`#heading`).innerHTML = heading    
    })
}

