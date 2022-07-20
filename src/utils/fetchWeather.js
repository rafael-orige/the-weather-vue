export default async function fetchWeather(location) {
  return fetch(`http://api.weatherapi.com/v1/current.json?key=19e66a9ddfc542c593a130311222007&q=${location}`)
    .then((data) => data.json())
    .then((data) => data);
}
