"use client";
import { MapContainer, TileLayer, Circle } from "react-leaflet";

const SimpleMap = () => {
  const position = [20.6550, -87.0989]; // Playa del Carmen

  return (
    <div className="w-full h-[400px] shadow-md overflow-hidden z-10">
      <MapContainer
        center={position}
        zoom={11}
        className="h-full w-full shadow-md overflow-hidden z-10"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <Circle
          center={position}
          radius={7000}
          pathOptions={{
            
            fillColor: "blue",
            fillOpacity: 0.3,
            color: "blue",
            opacity: 0.8,
            weight: 2,
          }}
        />
      </MapContainer>
    </div>
  );
};

export default SimpleMap;
