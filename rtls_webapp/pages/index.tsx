import Head from 'next/head';
import { useCallback, useEffect, useRef, useState } from 'react';

export default function Home() {
  const mapElement = useRef<any>(null);
  const [centers, setCenters] = useState({
    home: { lat: 6.85934, lng: 7.40699 },
    etf: { lat: 6.86707, lng: 7.40844 },
    lion: { lat: 6.86519, lng: 7.40881 },
    eni: { lat: 6.86875, lng: 7.40189 },
    edu: { lat: 6.8603, lng: 7.4079 },
  });

  const renderMap = useCallback(() => {
    if (!mapElement.current || !window.google) return;

    const map = new window.google.maps.Map(mapElement.current, {
      zoom: 18,
      center: centers.edu,
    });

    new window.google.maps.Marker({
      position: centers.edu,
      map,
    });
  }, [centers]);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.google) {
      renderMap();
    } else {
      window.initMap = renderMap;
    }
  }, [renderMap]);

  return (
    <div className="container">
      <div className="controls">
        <h1>RTLS</h1>
        <div>
          <p>Lat: {centers.etf.lat}</p>
          <p>Lng: {centers.etf.lng}</p>
        </div>
      </div>
      <div className="map" ref={mapElement} style={{ width: '100%', height: '500px' }} />
      <Head>
        <script
          src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCpnO2idxXhiPxrG7pCboaNgJ0Nn1hpM0w&callback=initMap`}
          async
          defer
        />
      </Head>
    </div>
  );
}
