import React from "react";
import './introText.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function IntroText() {
    return (
        <section id='introText'>
            <Container>
                <Row>
                    <Col sm={3}></Col>
                    <Col sm={6}  >
                    <h1 className="h1Intro">
                    Park Like a Boss
                    </h1>
                    <p class="m-t-20 text-justify test">
                    20 min. Temps moyen pour trouver une place dans les rues de Courbevoie.
                    La moitié d’un épisode de Stranger Things.
                    <br></br>
                     <br></br>
                    Trois véhicules en circulation sur dix qui cherchent une place, ces trois véhicules en trop brûlant
                    inutilement de l’essence et envoyant inutilement du CO2 dans l’atmosphère.
                    <br></br>
                    <br></br>
                    Macaron te permet de passer du temps sur les choses qui comptent (comme mater Stranger Things) tout
                    en réduisant ton empreinte carbone.
                    Avec Macaron trouve une place dans les rues de Courbevoie en 3 minutes.
                </p>
                    </Col>
                    <Col sm={3}></Col>
                </Row>
            </Container>
            
        </section>
    )
}
