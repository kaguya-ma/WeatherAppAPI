function weather() {
  let cityName = document.querySelector("input").value
  let apiKey = ""
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
  .then(function(resp) { return resp.json()})
  .then(function(data) {
    console.log(data);
     draw(data)
  })

  .catch(function() {

  })

 
}


function draw(data) {
  let celsius = Math.round(parseFloat(data.main.temp)-273.15);
  document.querySelector("#temp").innerHTML=`Temp: ${celsius} &deg;`;
  document.querySelector("#location").innerHTML=`City: ${data.name}`
  document.querySelector("#pressure").innerHTML=`Pressure: ${data.main.pressure} hPa`;
  document.querySelector("#description").innerHTML=`Description: ${data.weather[0].main}`;
  document.querySelector("#country").innerHTML=`Country: ${data.sys.country}`;

}