import React from "react";
import "./introText.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function IntroText() {
  return (
    <section id="introText">
      <Container>
        <Row>
          <Col sm={3}></Col>
          <Col sm={6}>
            <h1 style={{marginTop:'1em'}} className="h1Intro">Get Place Like a Boss</h1>
            <p className="m-t-20 text-justify test">
              24h. Temps moyen pour trouver un lieu ou tourner un film.
            La meme duréé que le film The Clock .
            </p>
            <p className="m-t-20 text-justify test">
              Trois equipes de court-metrage sur dix qui cherchent un lieu ou
              trouner, ces trois equipes en mettant trop de temps perde du temps
              sur la dead line et mettent en peril le projet .
            </p>
             
    
            <p className="text-justify test">
              Macaron Animation te permet de passer du temps sur les choses qui
              comptent (comme installer le plateau), tout en réduisant ton temps
              de recherche. Avec Macaron Animation trouve un lieu de tournage
              dans paris en 3 minutes chono.
            </p>
          </Col>
          <Col sm={3}></Col>
        </Row>
      </Container>
    </section>
  );
}
