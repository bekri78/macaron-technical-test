/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Modale from "../Modale/modale";

export default function Location(props) {
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const DEFAULT_LOCATION =[48.86007841437039, 2.342733755137733];

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(location, errorLocation);
    }
  }, []);
  const location = (position) => {
    props.centerlocation([position.coords.latitude, position.coords.longitude]);
  };

  const errorLocation = (error) => {
    props.centerlocation(DEFAULT_LOCATION);

    setOpen(!open);
    switch (error.code) {
      case error.PERMISSION_DENIED:
        return setError("Géolocalisation refusée");
      case error.POSITION_UNAVAILABLE:
        return setError("Position inconnue");
      case error.TIMEOUT:
        return setError("Chargement de la positon expiré");
      case error.UNKNOWN_ERROR:
        return setError("Erreur inconnue");
      default:
        return setError("Erreur inconnue");
    }
  };
  return <div>{error && <Modale error={error} open={open} />}</div>;
}
