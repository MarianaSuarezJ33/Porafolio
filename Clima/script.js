const apiKey = "ed97861cc148dbdea4b59e5313b1b87f"; // Clave API de OpenWeatherMap

document
  .getElementById("weatherForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que el formulario recargue la página

    const city = document.getElementById("cityInput").value;

    getWeather(city);
  });

async function getWeather(city) {
  const apiKey = "ed97861cc148dbdea4b59e5313b1b87f"; //  Clave de OpenWeatherMap
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const weatherInfoDiv = document.getElementById("weatherInfo");

    if (data.weather && data.weather.length > 0) {
      const country = data.sys.country;
      const temperature = data.main.temp;

      // Ejemplo de cambio de imagen basada en la temperatura
      const imageSrc = temperature > 20
        ? 'https://clarksvillenow.sagacom.com/files/2020/11/shutterstock_286242953-1200x768.jpg'
        : 'https://images.unsplash.com/photo-1500740516770-92bd004b996e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fCUyMGNsb3VkeXxlbnwwfHwwfHx8MA%3D%3D';

      weatherInfoDiv.style.backgroundImage = `url('images/${city}.jpg')`;
      weatherInfoDiv.innerHTML = `
        <h2>Clima en ${city} (${country})</h2>
        <p><strong>Descripción:</strong> ${data.weather[0].description}</p>
        <p><strong>Temperatura:</strong> ${temperature}°C</p>
        <img class="${temperature > 20 ? 'sunny-image' : 'cloudy-image'}" src="${imageSrc}" alt="Weather Image">
      `;
    } else {
      weatherInfoDiv.innerHTML =
        "<p>No se encontraron datos de clima para esta ciudad.</p>";
    }
  } catch (error) {
    console.log("Hubo un error al obtener el clima:", error);
    const weatherInfoDiv = document.getElementById("weatherInfo");
    weatherInfoDiv.innerHTML =
      "<p>Hubo un error al obtener el clima. Inténtalo de nuevo más tarde.</p>";
  }
}