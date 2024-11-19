import React, { useState } from "react";
import axios from "axios";
import "./WeatherSearch.css";  // Certifique-se de que o caminho para o CSS está correto

const WeatherSearch = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "d3d3d3b02449b35f6fb8357dd7cc373b";  // Sua chave da API
  const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

  const handleSearch = async () => {
    if (!city) return;

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(API_URL, {
        params: {
          q: city,
          appid: API_KEY,
          units: "metric",
          lang: "pt",
        },
      });

      setWeatherData(response.data);
    } catch (err) {
      setError("Não foi possível obter os dados. Verifique o nome da cidade.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div>
        <h1>Busca de Clima</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Digite o nome da cidade"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="input"
          />
          <button onClick={handleSearch} className="button">
            Buscar
          </button>
        </div>

        {loading && <p>Carregando...</p>}
        {error && <p className="error">{error}</p>}

        {weatherData && (
          <div className="result">
            <h2>{weatherData.name}</h2>
            <p><i className="fa fa-thermometer-half"></i> 🌡️ Temperatura: {weatherData.main.temp}°C</p>
            <p><i className="fa fa-cloud"></i> 🌥️ Condição: {weatherData.weather[0].description}</p>
            <p><i className="fa fa-tint"></i> 💧 Umidade: {weatherData.main.humidity}%</p>
            <p><i className="fa fa-wind"></i> 🌬️ Vento: {weatherData.wind.speed} m/s</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherSearch;
