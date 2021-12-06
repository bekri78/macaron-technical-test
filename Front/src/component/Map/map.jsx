/* eslint-disable no-sequences */
import React, { useEffect, useState } from "react";
import { arrondissementData } from "../../arrondissements";
import { lieuDeTournage } from "../../lieux-de-tournage-a-paris";
import Arrondissement from "../SelectArrondissement/selectArrondissement";
import { MapContainer, TileLayer, Polygon, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import Location from "../Location/location";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./map.css";
import markerIcon2 from "../../Marker/marker-icon-2x.png";
import markerIcon from "../../Marker/marker-icon.png";
import markerShadow from "../../Marker/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function Map(props) {
  const [location, setLocation] = useState([]);
  const [dataRating, setDataRating] = useState([]);
  const [centerMap, setCenterMap] = useState();
  useEffect(() => {
    lieuDeTournage.features.map((data) => {
      return (
        setLocation((location) => [...location, data.properties]),
        setDataRating((location) => [...location, data.properties])
      );
    });
  }, []);

  useEffect(() => {}, [centerMap]);

  const rating =  (newValue) => {
    props.postaleCode(newValue);
    let arrayRating = [];
    location
      .filter(
        (el) =>
          el.ardt_lieu >= newValue[0] && el.ardt_lieu <= newValue.slice(-1)[0]
      )
      .map((filterRating) => {
        return arrayRating.push(filterRating), setDataRating(arrayRating);
      });

  };
  return (
    <Container className="jumbotron">
      <h1 className='titlemap'>Map</h1>
      <Row>
        <Col sm={12}>
          <Arrondissement
            valueArrondissement={(newValue) => {
              rating(newValue);
            }}
          />
          {centerMap && (
            <MapContainer
              center={centerMap}
              zoom={14}
              style={{ width: "100%", height: "100vh" }}
              className='mapContainer'
            >
              <TileLayer
                url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=z6XfQf2YId8cjbY3LhER"
                attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
              />

              <MarkerClusterGroup>
                {location &&
                  dataRating.map((data, index) => {
                    return (
                      <Marker key={index} position={data.geo_point_2d}>
                        <Popup>{data.nom_tournage}</Popup>
                      </Marker>
                    );
                  })}
              </MarkerClusterGroup>

              {arrondissementData.features.map((state, index) => {
                const coordinates = state.geometry.coordinates[0].map(
                  (item) => [item[1], item[0]]
                );
                return (
                  <Polygon
                    key={index}
                    pathOptions={{
                      fillColor: "#FD8D3C",
                      fillOpacity: 0.7,
                      weight: 2,
                      opacity: 1,
                      dashArray: 3,
                      color: "white",
                    }}
                    positions={coordinates}
                    eventHandlers={{
                      mouseover: (e) => {
                        const layer = e.target;
                        layer.setStyle({
                          fillOpacity: 0.6,
                          weight: 5,
                          dashArray: "",
                          color: "#666",
                          fillColor: "#D45962",
                        });
                      },
                      mouseout: (e) => {
                        const layer = e.target;
                        layer.setStyle({
                          fillOpacity: 0.6,
                          weight: 2,
                          dashArray: "3",
                          color: "white",
                          fillColor: "#FD803C",
                        });
                      },
                    }}
                  />
                );
              })}
            </MapContainer>
          )}
          <Location
            centerlocation={(center) => {
              setCenterMap(center);
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}
