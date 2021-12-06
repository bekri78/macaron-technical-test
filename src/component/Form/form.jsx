import React, { useState, useCallback } from "react";
 
import emailjs from "emailjs-com";
import {  Button  } from "antd"; 
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import Lettre from "./image/lettre.svg";
import Swal from "sweetalert2";
 import "./form.css";

const H2 = styled.h2`
  vertical-align: inherit;
  font-size: 38px;
  font-weight: 700;
  color: ${(props) => (props.theme.mode === "dark" ? "#0db3c7" : "#040c2c")};
  text-transform: capitalize;
  letter-spacing: -2px;
  margin-bottom: 50px;
  text-align: center;
`;
const H6 = styled.h6`
  font-size: 14px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${(props) => (props.theme.mode === "dark" ? "#e23e61" : "#0db3c7")};
  font-weight: 600;
  margin-bottom: 15px;
  vertical-align: inherit;
`;

const P = styled.p`
  color: ${(props) => (props.theme.mode === "dark" ? "#b9b9b9" : "#677294")};
  margin-top: 0;
  margin-bottom: 0;
  height: 40px;
  width: auto;
`;
//const MySwal = withReactContent(Swal)
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

    export default function ContactUs() {
   
  const [value, setValue] = useState();
 
  const [name, setName] = useState("");
  const [sujet, setSujet] = useState("");
  const [email, setEmail] = useState("");

  const handleValueChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  const isEmail = () => {
    let mail = document.getElementById("not-mail");
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.match(regex)) {
      mail.style.display = "none";
      return true;
    } else {
      mail.style.display = "block";
      mail.style.animation = "dongle 1s";
      setTimeout(() => {
        mail.style.animation = "none";
      }, 1000);
      return false;
    }
  };
  const failMessage = () => {
    let formMess = document.querySelector(".form-message");
    formMess.innerHTML = "Merci de remplir correctement les champs requis *";
    formMess.style.opacity = "1";
    formMess.style.background = "rgb(253,87,87)";
    formMess.style.color = "white";

    document.getElementById("name").classList.add("error");
    document.getElementById("email").classList.add("error");
    document.getElementById("message").classList.add("error");
  };
  const succesMessage = () => {
    Toast.fire({
      icon: "success",
      title: "Envoyer avec succès !",
    });

    document.getElementById("name").classList.remove("error");
    document.getElementById("email").classList.remove("error");
    document.getElementById("message").classList.remove("error");
    document.querySelector(".form-message").style.opacity = "0";
  };

  const handeSubmit = (e) => {
    console.log(name, email, value, sujet);
    e.preventDefault();
    if (name && isEmail() && value && sujet) {
      sendEmail({
        name,
        email,
        sujet,
        value,
      });
    } else {
      failMessage("Merci de remplir correctement les champs requis *");
    }
  };

  const sendEmail = (variable) => {
    console.log(variable);
    emailjs
      .send(
        "service_ar8ie92",
        "template_sh3yw75",
        variable,
        "user_CeUZSbU8Tow2n0Uj8WHhH"
      )
      .then(
        (result) => {
          console.log(result.status);
          succesMessage();
          setName("");
          setEmail("");
          setSujet("");
          setValue("");

        },
        (error) => {
          console.log(error.text);
          Toast.fire({
            icon: "error",
            title: "Erreur veuillez réessayer",
          });
        }
      );
  };
   
   
   
  return (
    <section className="form" id=" contact">
      <Container>
       
        <H2> Contact </H2>
        <Row className="align-items-center">
        <Col xs="12" sm="12" md="12" lg="7" className="imgConteneur">
            <img className="lettre" src={Lettre} alt="" />
          </Col>
          <Col xs="12" sm="12" md="12" lg="5">
            <H6>Vous souhaitez nous contacter ?</H6>
            <P>
              Remplissez ce formulaire, nous reviendrons vers vous au plus vite{" "}
            </P>

            <Form className="contact-form" onSubmit={handeSubmit}>
              <Row>
                <Form.Group md="4">
                  <Form.Control
                    type="text"
                    name="user_name"
                    id="name"
                    placeholder="Nom*"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col}>
                   <Form.Label  id="not-mail">Email non valide</Form.Label>
                  <Form.Control
                    type="email"
                    name="user_email"
                    id="email"
                    placeholder="Email*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col}>
                  <Form.Control
                    type="text"
                    name="user_sujet"
                    id="sujet"
                    placeholder="Sujet*"
                    value={sujet}
                    onChange={(e) => setSujet(e.target.value)}
                  />
                </Form.Group>
              </Row>

              <Form.Group>
                
                <Form.Control
                  as="textarea"
                  name="message"
                  id="message"
                  rows={4}
                  value={value}
                  onChange={handleValueChange}
                  placeholder="Votre message*"
                />
              </Form.Group>
              <Button type="primary submit" value="Send" onClick={handeSubmit}>
                Envoyer
              </Button>
            </Form>
            <div className="form-message"></div>
          </Col>

          
        </Row>
      </Container>
    </section>
  );
}
emailjs.init("user_CeUZSbU8Tow2n0Uj8WHhH");