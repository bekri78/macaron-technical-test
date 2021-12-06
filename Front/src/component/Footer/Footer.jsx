import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from './img/logo_white.png'
import './Footer.css'

export default function Footer() {
    return (
        <section id='Footer'>
            <Container>
                <Row>
                    <Col sm={4} xs={12}>
                        <img src ={Logo} alt='macaron'/>
                    </Col>
                    <p class="text">Copyright © Macaron 2021. </p>
                    <p class="text">
                This site is protected by reCAPTCHA and the Google
                <a href="https://policies.google.com/privacy">Privacy Policy</a> and
                <a href="https://policies.google.com/terms">Terms of Service</a> apply.
            </p>
                </Row>
            </Container>
            
        </section>
    )
}
