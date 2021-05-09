function weather() {
  let cityName = document.querySelector("input").value

  let apiKey = "9cf99e77444fe80d43c39141f4b8321e"
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
  document.querySelector("#temp").innerHTML=`${celsius}`;
  document.querySelector("#location").innerHTML=`${data.name}`
  document.querySelector("#pressure").innerHTML=`${data.main.pressure} hPa`;
  document.querySelector("#description").innerHTML=`${data.weather[0].main}`;
  document.querySelector("#country").innerHTML=`${data.sys.country}`;
  if (data.weather[0].main === "Clouds") {
    document.querySelector("img").setAttribute("src", "cloudy.svg")
  }

  else if (data.weather[0].main === "Clear") {
    document.querySelector("img").setAttribute("src", "sunny.svg")

  }

  else if (data.weather[0].main === "Snow") {
    document.querySelector("img").setAttribute("src", "snow.svg")

  }

  else if (data.weather[0].main === "Rain") {
    document.querySelector("img").setAttribute("src", "rain.svg")

  }

}

function startWeather() {
  let cityName = "London"

  let apiKey = "9cf99e77444fe80d43c39141f4b8321e"
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
      .then(function(resp) { return resp.json()})
      .then(function(data) {
        console.log(data);
        draw(data)
      })

      .catch(function() {

      })


}