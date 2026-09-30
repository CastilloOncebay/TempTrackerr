const claveApi = 'b4e2831fe98c43d7955211325263009'; // Reemplaza esto con tu API Key de WeatherAPI
const idioma = 'es';
const inpCiudad = document.getElementById('input-ciudad');

async function obtenerClima() {
  const ciudad = inpCiudad.value;
  if (!ciudad) {
    alert('Por favor, ingresa una ciudad');
    return;
  }

  const apiClimaActual = `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;
  
  try {
    const response = await fetch(apiClimaActual);
    const data = await response.json();
    
    if (response.ok) {
      mostrarClima(data);
    } else {
      alert('Ciudad no encontrada');
    }
  } catch (error) {
    console.error('Error al obtener el clima:', error);
  }
}

function mostrarClima(data) {
  document.querySelector('.clima-icono').src = data.current.condition.icon;
  document.querySelector('.clima-texto').innerHTML = data.current.condition.text;
  document.querySelector('.temp').innerHTML = data.current.temp_c + '°c';
  document.querySelector('.ciudad').innerHTML = data.location.name;
  document.querySelector('.humedad').innerHTML = data.current.humidity + '%';
  document.querySelector('.viento').innerHTML = data.current.wind_kph + ' km/h';

  document.getElementById('clima-contenedor').style.display = 'block';
}