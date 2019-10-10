function ctoF(tempx)
{
  var mytemp = Number(tempx);
  var fahren = cTemp * 9 / 5 +32;
  document.getElementById("myConvertedTemp").innerHTML = "The Fahrenheit value is " + fahren.toString();
}

function ftoc(tempx){
  var mytemp = Number(tempx);
  var celsius = (tempx - 32) * 5/9;
  document.getElementById("myConvertedTemp").innerHTML = "The Celsius value is " + celsius.toString();

}


let temp_display = document.querySelector("div.temperature")

let load_weather_data = async function(){
  let response = await fetch(`/weather/42.3601,-71.0589`)
  let weather_data = await response.json()
  console.log(weather_data)
  let temp_display = window.document.body.querySelector('[class="monday"] [class="temperature"]')
  temp_display.innerText = weather_data.temperature + "°F"

  let temp_display = window.document.body.querySelector('[class="tuesday"] [class="temperature"]')
  temp_display.innerText = weather_data.temperature + "°F"

  let temp_display = window.document.body.querySelector('[class="wednesday"] [class="temperature"]')
  temp_display.innerText = weather_data.temperature + "°F"

  let temp_display = window.document.body.querySelector('[class="thursday"] [class="temperature"]')
  temp_display.innerText = weather_data.temperature + "°F"

  let temp_display = window.document.body.querySelector('[class="friday"] [class="temperature"]')
  temp_display.innerText = weather_data.temperature + "°F"

  let temp_display = window.document.body.querySelector('[class="saturday"] [class="temperature"]')
  temp_display.innerText = weather_data.temperature + "°F"

  let temp_display = window.document.body.querySelector('[class="sunday"] [class="temperature"]')
  temp_display.innerText = weather_data.temperature + "°F"
  // weather_data.forEach((daily_weather_data) =>{
  //   let date = new Date(daily_weather_data.date)
  //
  //   let day_view = document.createElement("div")
  //   day_view.className = "day"
  //
  // })


}

load_weather_data()
