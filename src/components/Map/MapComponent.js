import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './MapComponent.css';

// ВСТАВЬ СВОЙ ТОКЕН MAPBOX!
const MAPBOX_TOKEN = 'pk.eyJ1IjoiYWxleGtvZiIsImEiOiJjbWJ1Y2N3eGMwYmx4MmlzM3UzZzZjcDhqIn0.u9-tNoGFKoTucJ2hRPrtGQ';

const MapComponent = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // карта уже инициализирована

    // Устанавливаем токен
    mapboxgl.accessToken = MAPBOX_TOKEN;

    // Инициализируем карту
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [37.6173, 55.7558], // Москва
      zoom: 10
    });

    // Добавляем навигацию
    map.current.addControl(new mapboxgl.NavigationControl());

    // Добавляем маркеры после загрузки карты
    map.current.on('load', () => {
      // Маркер 1 - Москва
      new mapboxgl.Marker()
        .setLngLat([37.6173, 55.7558])
        .setPopup(new mapboxgl.Popup().setHTML(`
          <div style="padding: 10px;">
            <h3>Москва</h3>
            <p>Главный магазин</p>
            <p>📍 ул. Тверская, 1</p>
          </div>
        `))
        .addTo(map.current);

      // Маркер 2 - СПб
      new mapboxgl.Marker()
        .setLngLat([30.3159, 59.9391])
        .setPopup(new mapboxgl.Popup().setHTML(`
          <div style="padding: 10px;">
            <h3>Санкт-Петербург</h3>
            <p>Филиал</p>
            <p>📍 Невский проспект, 100</p>
          </div>
        `))
        .addTo(map.current);
    });

  }, []);

  return (
    <div className="map-section">
      <h2>Наши магазины</h2>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};

export default MapComponent;