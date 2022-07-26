import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setWheater } from '../../redux/videoSlice';
import { getWhater } from '../../api/servecies';

export function Video() {
  const wheater = useSelector((state) => state.video.value);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('useEffect');
    getWhater({ lat: 6.2443382, lon: -75.573553, place: 'Medellin' }).then((data) => {
      dispatch(setWheater(data));
    });
  }, []);

  return (
    <>
      <p>
        <span>{wheater?.place}</span>
      </p>
      <p>Temperature: {wheater?.main.temp} C</p>
      <h4>{wheater?.weather[0].description}</h4>
    </>
  );
}
