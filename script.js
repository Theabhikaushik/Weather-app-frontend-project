const cityName = document.getElementById('cityname')
const submitBtn = document.getElementById('submit')
console.log(cityName);


const options = {


    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '865481565dmsh8056aca7bd3e512p129154jsn240f68d5d32f',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city) =>
 {
    cityName.innerText = city;

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {


            console.log(response)
          // cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            Sunrise.innerHTML = response.sunrise
            Sunset.innerHTML = response.sunset


        })
        .catch(err => console.error(err));
}
submitBtn.addEventListener("click",(e)=> 
{
    console.log(e);
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")