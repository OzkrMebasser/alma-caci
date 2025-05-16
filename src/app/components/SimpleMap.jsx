"use client";
import { MapContainer, TileLayer, Circle } from "react-leaflet";
import { useTranslation } from "react-i18next";

const SimpleMap = () => {
  const { t } = useTranslation();
  const position = [20.655, -87.0989]; // Playa del Carmen

  return (
    <div className="w-full h-[500px] shadow-md overflow-hidden z-10">
      <h3 className=" text-[#2727d9] text-2xl font-bold lg:text-4xl pb-6 text-center">
       {t("home.servicesOn")}
      </h3>

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
