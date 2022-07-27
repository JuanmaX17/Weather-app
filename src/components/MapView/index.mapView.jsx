import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import maplibregl from 'maplibre-gl';
import './mapView.css';
import 'maplibre-gl/dist/maplibre-gl.css';

export function MapView() {
  const weather = useSelector((state) => state.video.value);
  console.log('weather voord', weather.coord);
  const mapContainer = useRef(null);
  const map = useRef(null);
  const { lon } = weather.coord;
  const { lat } = weather.coord;
  const zoom = 10;
  const API_KEY = 'TorepQVmDimKBzIvkffi';

  useEffect(() => {
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets/style.json?key=${API_KEY}`,/* eslint-disable-line */
      center: [lon, lat],
      zoom,
    });
    map.current?.addControl(new maplibregl.NavigationControl(), 'top-right');
    new maplibregl.Marker({ color: '#FF0000' })
      .setLngLat([lon, lat])
      .addTo(map.current);
  }, [weather]);
  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}
