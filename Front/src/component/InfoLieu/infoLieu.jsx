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
  const onChange = (page) => {
    

    setPage(page);
  };
  return (
    <Container>
      {recupInfoBack.length > 0  && <h1 style={{textAlign:'center', margin:'1em'}}>Liste Exclusive</h1>}
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
                    avatar={` https://i.pravatar.cc/150?img=${index} `}
                  />
                );
              })}
          </div>
          {recupInfoBack.length > 0  && <Pagination  style={{marginTop:'1em'}} defaultCurrent={1} onChange={onChange} total={50} />}
        </Col>
      </Row>
    </Container>
  );
}
