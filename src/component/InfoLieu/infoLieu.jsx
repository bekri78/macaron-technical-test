import React, { useState, useEffect } from "react";
import CardTournage from "../CardTournage/cardTournage";
import { Pagination } from "antd";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function InfoLieu(props) {
  let infoLieu = props.codeposteArray;
  const [recupInfoBack, setRecupInfoBack] = useState([]);
  const [page, setPage] = useState(null);

  console.log(infoLieu);
  useEffect(() => {
    async function fetchMyAPI() {
      await window.fetch(
        `/api/macaron?codePostale=${infoLieu.map((i) => Number(i))}`
      );
    }
    if (infoLieu.length) {
      console.log("api");
      fetchMyAPI();
      setPage(1);
      
    }
  }, [infoLieu]);

  useEffect(() => {
    async function fetchMyApiPagination() {
      const pagination = await window.fetch(
        `/api/macaron/pagination?page=${page}&limit=8`
      );
      const json2 = await pagination.json();
      console.log(json2);
      setRecupInfoBack(json2);
    }
    if (page !== null) {
      fetchMyApiPagination();
    }
  }, [page]);
  const onChange = (page) => {
    console.log(page);

    setPage(page);
  };
  return (
    <Container>
      <Row>
        <Col>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              maxHeight: "100%",
              overflow: "auto",
            }}
          >
            {recupInfoBack &&
              recupInfoBack.map((data, index) => {
                return (
                  <CardTournage
                    key={index}
                    nom_realisateur={data.properties.nom_realisateur}
                    lieu={data.properties.adresse_lieu}
                    date_debut={data.properties.date_debut}
                    nom_tournage={data.properties.nom_tournage}
                    lat={data.properties.coord_y}
                    lng={data.properties.coord_x}
                  />
                );
              })}
          </div>
          <Pagination  style={{marginTop:'1em'}} defaultCurrent={1} onChange={onChange} total={50} />
        </Col>
      </Row>
    </Container>
  );
}
