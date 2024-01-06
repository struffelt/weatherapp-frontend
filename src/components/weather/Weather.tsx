import React, { useState } from 'react';
import styles from './Weather.module.css';

import WeatherCard, { WeatherCardProps } from './WeatherCard';
import NewCard from './newcard/NewCard';

const Weather: React.FC = () => {
  const [citys, setCitys] = useState<WeatherCardProps[]>([{city: "Aachen"}]);

  const addCity = (city: string) => {
    setCitys([...citys, {city: city}]);
  };

  return (
    <div className={styles.container}>
      {citys.map((data, index) => (
        <WeatherCard city={data.city} key={index} />
      ))}
      <NewCard addCity={addCity}/>
    </div>
  );
};

export default Weather;