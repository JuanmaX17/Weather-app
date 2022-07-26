import './search.css';
import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setWheater } from '../../redux/videoSlice';
import { getWhater, getSearches } from '../../api/servecies';

export function Search() {
  const dispatch = useDispatch();
  const [places, setPlaces] = useState({});
  const inputRef = useRef();

  async function searchCity(coordinates) {
    const data = await getWhater(coordinates);
    dispatch(setWheater(data));
    setPlaces({});
    inputRef.current.value = '';
  }

  async function handlerSearches() {
    const input = inputRef.current.value;
    if (input.length === 0) {
      setPlaces({});
      return;
    }
    const data = await getSearches(input);
    setPlaces(data);
  }

  return (
    <div className="weather">
      <input className="weather__input weather__seraches" placeholder="search some..." onChange={() => handlerSearches()} ref={inputRef} />
      <div className="weather__results weather__seraches">
        {
          places.features?.map((item) => (
            <p className="weather__item" key={item.id}>
              <button className="weather__cta" type="button" onClick={() => searchCity({ lon: item.center[0], lat: item.center[1], place: item.place_name })}>
                {item.place_name}
              </button>
            </p>
          ))
        }
        {
          (!places.features?.length && inputRef.current?.value.length > 0) && <p>Not Found</p>
        }
      </div>
    </div>
  );
}
