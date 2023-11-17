/*function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value;

    if (cityName === '') {
        alert('Por favor, ingrese el nombre de la ciudad.');
        return;
    }

    const apiKey = '421a647acf49ea53ecce47f78ac7e8b6'; // Clave API proporcionada
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            const temperature = data.main.temp;
            const description = data.weather[0].description;

            weatherInfo.innerHTML = `Clima en ${cityName}: ${temperature}°C, ${description}`;
        })
        .catch(error => {
            console.error('Error al obtener datos meteorológicos:', error);
            alert('Error al obtener datos meteorológicos. Por favor, verifica el nombre de la ciudad.');
        });
}

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error de red: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        const temperature = data.main.temp;
        const description = data.weather[0].description;

        weatherInfo.innerHTML = `Clima en ${cityName}: ${temperature}°C, ${description}`;
    })
    .catch(error => {
        console.error('Error al obtener datos meteorológicos:', error);
        alert(`Error al obtener datos meteorológicos. ${error.message}`);
    });
    */
   
//DATOS SIMULADOS
    function getWeather() {
        const cityInput = document.getElementById('cityInput');
        const cityName = cityInput.value;
    
        if (cityName === '') {
            alert('Por favor, ingrese el nombre de la ciudad.');
            return;
        }
    
        // Simulación de datos del clima (puedes personalizar estos valores)
        const simulatedData = {
            main: {
                temp: Math.floor(Math.random() * 30) + 1, // Temperatura aleatoria entre 1 y 30 °C
            },
            weather: [
                {
                    description: 'Cielo despejado', // Descripción aleatoria
                },
            ],
        };
    
        const weatherInfo = document.getElementById('weatherInfo');
        const temperature = simulatedData.main.temp;
        const description = simulatedData.weather[0].description;
    
        weatherInfo.innerHTML = `Clima en ${cityName}: ${temperature}°C, ${description}`;
    }