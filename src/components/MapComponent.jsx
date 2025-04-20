import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

const blueDotIcon = new L.Icon({
  iconUrl: "https://maps.gstatic.com/mapfiles/ms2/micons/blue-dot.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const MapComponent = ({ location }) => {
  useEffect(() => {
    setTimeout(() => window.dispatchEvent(new Event("resize")), 100);
  }, []);

  return (
    <div className="w-full lg:w-4/9 md:w-full  rounded-xl mt-3  overflow-hidden ">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-semibold font-['Cinzel'] text-gray-800 mb-8">
          Nearby locations
        </h2>
        <span className="text-blue-500 mr-1 text-lg font-light whitespace-nowrap mb-8">
          View Map &gt;
        </span>
      </div>
      <MapContainer
        center={[location.lat, location.lng]}
        zoom={13}
        scrollWheelZoom={true}
        className="w-full h-[500px] z-0 rounded-2xl"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
        />
        <Marker position={[location.lat, location.lng]} icon={blueDotIcon}>
          <Popup>{location.name}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
