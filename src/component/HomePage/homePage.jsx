import React from "react";
 
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './homePage.css'
import AppStore from "./img/appStore.svg";
import GooglePlay from "./img/googlePlay.svg";
import Insta from './img/Instagram.png'
import Facebook from './img/facebook.png'
import ImageTournage from './img/imgTournage.jpeg'

export default function HomePage() {
  return (
    <section id="Home" style={{ backgroundImage:` url(${ImageTournage})`}}>
      <Container>
        <Row>
          <Col md={7}>
            <h1 className="semi-bold text-white">Macaron Animation</h1>
            <h4 className="text-white">
              Trouvez les lieux de tournages dans les rues de paris.<br></br>
              Près de chez vous.
            </h4>
            <div>
              <a href="https://apple.co/3CeVGTy">
                <img  className ='imgHome' src={AppStore}   alt="apple"  />
              </a>{" "}
              <a
                href="https://play.google.com/store/apps/details?id=ai.macaron.client"
                alt="android"
              >
                <img className ='imgHome' src={GooglePlay}  alt="apple" />
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/macaron_ai"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Insta}
                  width="36"
                  height="36"
                  alt="insta"
                />
              </a>{" "}
              <a
                href="https://www.instagram.com/macaron_ai"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Facebook}
                  width="36"
                  height="36"
                  alt="insta"
                />
              </a>
            </div>
          </Col>
        </Row>
        
      </Container>
    
    </section>
  );
}
