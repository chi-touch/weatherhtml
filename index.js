// https://www.weatherapi.com/my/
const API_KEY = "&appid=6b76294b8189abedc3827f2b8cace4bc";
const GEO_URL = "https://api.openweathermap.org/geo/1.0/direct?q=";
const FIRST_PART = "https://api.open-meteo.com/v1/forecast?";
const LAST_PART = "&current_weather=true&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m";


// const images = ['sun ', 'cloud', 'rain']
// const image = ''
// const response = 'sunny'
// if(response = 'sunny'){
//     image = images[0]
// }


const weatherForm = document.getElementById("input-form");
const submitButton = document.getElementById("submit-btn");
const freeTag = document.getElementById("free");
const domImage = document.getElementById("imageId");
const myTemp = document.getElementById("temp")
const myTemp1 = document.getElementById("temp1")
const myHumity = document.getElementById("humity")
// domImage.src = image

// weatherForm.addEventListener("submit",activateSearch);

const activateSearch = (event) => {
    console.log("log ...");

    const cityName = document.getElementsByName("city")[0].value;
    // const URL = `${GEO_URL}${cityName}&limit=1${API_KEY}`;
    console.log(URL);
    getGeoLocation(cityName);
    
}

// function displayWeather(data) {
//     console.log(data.current_weather);
//     const currentWeather = data.current_weather;
//     document.getElementById("submit-btn").value = `
//     Temperature: ${currentWeather.temperature}°C
//     Time: ${currentWeather.time}
//     Wind speed: ${currentWeather.windspeed} m/s`;
//     console.log(currentWeather);
// }

const getWeather = (url) => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayWeather(data);
        })
        .catch(error => console.log(error));
};

const getGeoLocation = (location) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=cf3c31da15d743c880300608241705&q=${location}&aqi=no`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let current = data.current
            freeTag.innerHTML = data.current.condition.text
            myTemp.innerHTML = current.temp_c
            myTemp1.innerHTML = current.temp_f
            myHumity.innerHTML = current.humidity

        })
        .catch(error => console.log(error));
};



            
            // console.log(data[0]);
            // const { lat, lon } = data[0];
            // console.log(lat, lon);
            // const weatherURL = `${FIRST_PART}latitude=${lat}&longitude=${lon}${LAST_PART}`;
            // getWeather(weatherURL);

// const API_KEY = "&appid=6b76294b8189abedc3827f2b8cace4bc";
// const GEO_URL = "https://api.openweathermap.org/geo/1.0/direct?q=";
// const FIRST_PART = "https://api.open-meteo.com/v1/forecast?";
// const LAST_PART = "&current_weather=true&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m";

// const weather = document.getElementById("input-form");
// const submitButton = document.getElementById("input-form");
// weather.addEventListener("submit", (event) => {
//     event.preventDefault();

//     const cityName = document.getElementsByName("city")[0].value;
//     const URL = `${GEO_URL}${cityName}&limit=1${API_KEY}`;
//     console.log(URL);
//     getGeoLocation(URL);
// });

// submitButton.addEventListener("click",() =>{
//     weather.dispatchEvent(new Event("submit"));
// });

// function displayWeather(data) {
//     console.log(data.current_weather);
//     const currentWeather = data.current_weather;
//     document.getElementById("submit").innerHTML = `
//     Temperature: ${currentWeather.temperature}°C
//     Time: ${currentWeather.time}
//     Wind speed: ${currentWeather.windspeed} m/s`;
//     console.log(currentWeather);
// }

// const getWeather = (url) => {
//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             displayWeather(data);
//         })
//         .catch(error => console.log(error));
// };

// const getGeoLocation = (url) => {
//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data[0]);
//             const { lat, lon } = data[0];
//             console.log(lat, lon);
//             const weatherURL = `${FIRST_PART}latitude=${lat}&longitude=${lon}${LAST_PART}`;
//             getWeather(weatherURL);
//         })
//         .catch(error => console.log(error));
// };

