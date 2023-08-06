//Options of the world time api
const Timeoptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd6f378846fmshb213179bcf3c6bfp1dfa69jsn90fd13caf163',
		'X-RapidAPI-Host': 'world-time-by-api-ninjas.p.rapidapi.com'
	}
}

let getTime = async(city)=>{
    try {
        const url = `https://world-time-by-api-ninjas.p.rapidapi.com/v1/worldtime?city=${city} `;
        const response = await fetch(url, Timeoptions);
        const result = await response.json();
        hour.innerHTML = result.hour
        minutes.innerHTML = result.minute
        day.innerHTML  =result.day_of_week
        date.innerHTML = result.date

    } catch (error) {
        console.error(error);
    }
}

// options of the weather api
const weatherOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd6f378846fmshb213179bcf3c6bfp1dfa69jsn90fd13caf163',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

let getWeather = async(city)=>{
    try {
        const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
        const response = await fetch(url, weatherOptions);
        const result = await response.json();
        temp.innerHTML = `${result.temp} ℃`
        cloudy.innerHTML = result.cloud_pct
        humidity.innerHTML = `${result.humidity}%`
        wind.innerHTML = `${result.wind_speed} km/h`
        feels_like.innerHTML = `${result.feels_like}`
    } catch (error) {
        console.error(error);
    }
}

// Running the both function because when user open the website it will show the kathmandu weather as default
getWeather("kathmandu")
getTime('kathmandu')


// Run when user give the input in the search box and press keyboard enter button
let input = document.getElementById("input")
input.addEventListener('keydown', ()=>{
    if(event.keyCode === 13){
        getWeather(input.value)    //Take user given input as the input parameter for the function
        getTime(input.value)
        place.innerHTML = input.value
        input.value = ''
    }
})
