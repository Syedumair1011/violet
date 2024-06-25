"use client"
import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 25.0438, // Latitude of Damac Hills 2
  lng: 55.2647, // Longitude of Damac Hills 2
};

const mapStyles = [
  // Your custom map styles
];

function GoogleMapsComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "YOUR_API_KEY_HERE" // Replace with your Google Maps API key
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // Save the map instance to state
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    // Clean up the map instance when component unmounts
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        styles: mapStyles // Add your custom map styles here
      }}
    >
      {/* Marker for Damac Hills 2 location */}
      <Marker position={center} />

      {/* Additional child components, like InfoWindows, can be added here */}
    </GoogleMap>
  ) : <></>;
}

export default GoogleMapsComponent;

