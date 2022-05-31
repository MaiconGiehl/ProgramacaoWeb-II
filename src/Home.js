import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';

export function Home() {
  const [temp, setTemp] = useState('');
  const [weather, setWeather] = useState();

  useEffect(() => {
    axios.get('https://goweather.herokuapp.com/weather/Curitiba')
    .then((response) => {
      setTemp(response.data.temperature);
      setWeather(response.data);
    })
  }, []);

  return (
    <div>
      <p>Temperatura {temp}</p>
      <p className='weatherInfo'>Vento: {weather && weather.wind}</p>
      <p>Condição do clima: {weather && weather.description}</p>
    </div>
  );
}