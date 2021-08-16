/**
 * API key from weather below
 * 8ad65ef7fcebb168e78688d7b777da35
 * 
 * For calling current weather data, use the API key above, plug that into the
 * website address below, as well as the city name og where you want to look
 * api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
 * https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=8ad65ef7fcebb168e78688d7b777da35
 * 
 * Converting from Kelvin to Fahrenheit
 * 
 * from the API, the high: main, temp_max
 * from the API, the low: main, temp_min
 * from the API, the forecast: Weather, main
 * From the API, the humidity: main, humidity
 * From the API, the name: sys, name
 */



let form = document.querySelector('#weatherForm');

form.addEventListener('submit', async(event) => {
    event.preventDefault()
    getJson()
})

// JS Starts here
let table = document.getElementById('table-body');

// Capitalizing first letter
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
// Grab the Data 

let getJson = async () =>{
    let city = document.querySelector('#city').value;

    // go fetch
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ad65ef7fcebb168e78688d7b777da35`)


    // This is the data for the high, low, and humidity
    city_data = response.data.main

    // Creating City
    document.querySelector("#table5").innerHTML = city.capitalize()


    // Creating the High
    let high = city_data.temp_max
    let high_f = Math.round(((high-273.15)*1.8) + 32)
    let high_something = document.createElement("th")
    high_something.innerHTML=high_f + "°F"
    document.querySelector("#table1").innerHTML = high_something.innerHTML

    // Creating the Low
    let low = city_data.temp_min
    let low_f = Math.round(((low-273.15)*1.8) + 32)
    let low_temp = document.createElement('th')
    low_temp.innerHTML=low_f + "°F"
    document.querySelector("#table2").innerHTML = low_temp.innerHTML

    // Creating the Humidity
    let humidity = city_data.humidity
    let humidity_value = document.createElement('th')
    humidity_value.innerHTML=humidity + "%"
    document.querySelector("#table4").innerHTML = humidity_value.innerHTML

    // Creating the Forecast
    forcast_data = response.data.weather[0]
    let forcast = forcast_data.main
    let forcast_value = document.createElement('th')
    forcast_value.innerHTML=forcast
    document.querySelector("#table3").innerHTML = forcast_value.innerHTML
} 



