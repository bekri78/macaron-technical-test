import React, { useState, useEffect } from "react";
import CardTournage from "../CardTournage/cardTournage";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function InfoLieu(props) {
  let infoLieu = props.codeposteArray;
  const [recupInfoBack, setRecupInfoBack] = useState([]);

  console.log(infoLieu);
  useEffect(() => {
    async function fetchMyAPI() {
      const data = await window.fetch(
        ` /api/macaron?codePostale=${infoLieu.map((i) => Number(i))} `
      );
      const json = await data.json();
      console.log(json["msg"][0]);
      setRecupInfoBack(json["msg"][0]);
    }
    if (infoLieu) {
      console.log("api");
      fetchMyAPI();
    }
  }, [infoLieu]);
  return (
    <Container>
      <Row>
        <Col>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent:'center' }}>
            {recupInfoBack &&
              recupInfoBack.map((data, index) => {
                return (
                  <CardTournage
                    key={index}
                    nom_realisateur={data.nom_realisateur}
                  />
                );
              })}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
