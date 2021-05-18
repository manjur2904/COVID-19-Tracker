import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./Map.css";
import { circleDataOnMap } from '../../util'

const Map = ({ countries, casesType, center, zoom }) => {
    return (
      <div className="map">
        <MapContainer   center={center} zoom={zoom}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {circleDataOnMap(countries, casesType)}
        </MapContainer>
      </div>
    );
  }

export default Map 

{/* <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer> */}