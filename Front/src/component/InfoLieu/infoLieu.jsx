import React, { useState, useEffect } from "react";
import CardTournage from "../CardTournage/cardTournage";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function InfoLieu(props) {
  let infoLieu = props.codeposteArray;
  const [recupInfoBack, setRecupInfoBack] = useState([]);
  const [page, setPage] = useState(null);

  useEffect(() => {
    async function fetchMyAPI() {
      await window.fetch(
        `/api/macaron?codePostale=${infoLieu.map((i) => Number(i))}`
      );
    }
    if (infoLieu.length) {
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

      setRecupInfoBack(json2);
    }
    if (page !== null) {
      fetchMyApiPagination();
    }
  }, [page, infoLieu]);
  const onChange = (event, page) => {
    setPage(page);
  };
  return (
    <Container>
      {recupInfoBack.length > 0 && (
        <h1 style={{ textAlign: "center", margin: "1em" }}>Liste Exclusive</h1>
      )}
      <Row>
        <Col>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              maxHeight: "100%",
              overflow: "auto",
              width: "100%",
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
                    type_tournage={data.properties.type_tournage}
                    annee_tournage={data.properties.annee_tournage }
                    date_fin={data.properties.date_fin}
                   
                  />
                );
              })}
          </div>
          {recupInfoBack.length > 0 && (
            <Stack spacing={2}>
              {" "}
              <Pagination
                style={{ marginTop: "1em" }}
                count={10}
                onChange={onChange}
                t
              />{" "}
            </Stack>
          )}
        </Col>
      </Row>
    </Container>
  );
}
