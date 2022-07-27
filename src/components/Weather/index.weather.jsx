import './weather.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MapView } from '../MapView/index.mapView';
import { setWheater } from '../../redux/videoSlice';
import { getWhater } from '../../api/servecies';

export function Weather() {
  const wheater = useSelector((state) => state.video.value);
  const dispatch = useDispatch();
  console.log('datasooooooo: ', wheater, wheater?.coord.lon);
  useEffect(() => {
    console.log('useEffect');
    getWhater({ lat: 6.2443382, lon: -75.573553, place: 'Medellin' }).then((data) => {
      dispatch(setWheater(data));
    });
  }, []);

  return (
    <section className="weather">
      <article className="weather__data">
        <h4 className="weather__place weather__title">
          {wheater?.place.length > 10 ? wheater?.place.split(',').slice(0, 2).join(' ,') : wheater?.place}
        </h4>
        <p className="weather__info"><span className="weather__subtitle">Temperature:</span> {wheater?.main.temp} C</p>
        <p className="weather__p weather__subtitle">{wheater?.weather[0].description}</p>
      </article>
      <article className="weather__image1">
        <p className="weather__info">Wind speed: {wheater?.wind.speed}</p>
        <p className="weather__info">degree: {wheater?.wind.deg}</p>
      </article>
      <article className="weather__icon">
        <figure>
          <img className="weather__img" src={`https://openweathermap.org/img/wn/${wheater?.weather[0].icon}@2x.png`} alt="weather" />
          <span className="weather__temp">{wheater?.weather[0].description}</span>
          <span className="weather__temp space"> {wheater?.main.temp} C</span>
        </figure>
        <figure className="weather__country">
          <img className="weather__img" src={`https://openweathermap.org/images/flags/${wheater?.sys?.country.toLowerCase()}.png`} alt="weather" />
        </figure>
      </article>
      <article className="weather__image2">
        {!!wheater && <MapView />}
      </article>
    </section>
  );
}
