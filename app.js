const input = document.getElementById("inputTxt");
const btn = document.getElementById("btn");
const showData = document.getElementById("showData");

const API_KEY = "d18c13a5c48125a4ee4238275725120b";

btn.addEventListener("click", async () => {
  const cityInput = input.value;

  const data = await fetch(`
  https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${API_KEY}`).then(
    (res) => res.json()
  );

  showData.innerHTML = `
    <ul>${data.name}</ul>
    <ul>${data.weather[0].description}</ul>
    <ul>${parseInt(data.main.temp)}°C</ul>
`;
});
