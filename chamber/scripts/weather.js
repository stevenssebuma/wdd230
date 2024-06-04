const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastContainer = document.getElementById('forecast');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=32.2903&lon=1.3733&appid=d11ce00ac2839e198c4afb709dff6499&units=imperial';

const forecast = 'https://api.openweathermap.org/data/2.5/weather?lat=32.2903&lon=1.3733&appid=d11ce00ac2839e198c4afb709dff6499&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
    }catch (error) {
        console.log(error);
    }
}


function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;

    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);

    captionDesc.innerHTML = `${data.weather[0].description}`;
}
apiFetch();

async function apiForecast() {
    try {
        const forecastResponse = await fetch(forecast);
        if (forecastResponse.ok) {
            const forecastData = await forecastResponse.json();
            console.log(forecastData)
            displayForecast(forecastData);
        }
        else {
            throw Error(await forecastResponse.text());
        }
    }catch (error) {
        console.log(error);
    }
}
function displayForecast(forecastData) {
    forecastContainer.innerHTML = '';
    
    let dailyForecast = {};
    forecastData.list.forEach(entry => {
        const date = entry.dt_txt.split(' ')[0];
        if (!dailyForecast[date]) {
            dailyForecast[date] = entry;
        }
    });
    const dates = Object.keys(dailyForecast);
    dates.slice(0, 3).forEach(date => {
        const forecastItem = document.createElement('div');
        forecastItem.className = 'forecast-item';
        forecastItem.innerHTML = `<strong>${date}</strong><br>Temp: ${dailyForecast[date].main.temp} °C<br>${dailyForecast[date].weather[0].description}`;
        forecastContainer.appendChild(forecastItem);
    });
} 

apiFetch();
apiForecast();
