import "./Places.css";
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Beach from "../../components/beach/Beach";
import "leaflet/dist/leaflet.css";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import LOCATIONS from "../../services/locations";


function Places() {

  return (
    <>
      <Header />
        <div className="motivation"><p >Explora el mapa, elige tu proximo destino</p></div>
        <MapContainer className="locations-map-container" center={[27.9563, -15.5833]} zoom={10} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {LOCATIONS.map((p, index) =>
            <Marker key={index} position={[p.latitude, p.longitude]}>
              <Popup>
                {p.firstLine}. <br /> {p.secondLine}.
              </Popup>
            </Marker>
          )}
        </MapContainer>
       

        <Beach />
        <Footer />
    </>
  )
}
export default Places