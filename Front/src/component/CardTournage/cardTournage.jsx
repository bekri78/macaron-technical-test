import React from "react";
import { Card, Avatar } from "antd";

import {
  TwitterOutlined,
  InstagramOutlined,
  GooglePlusOutlined,
} from "@ant-design/icons";
import "./cardTournage.css";
export default function CardTournage(props) {
  const { Meta } = Card;

  return (
    <div>
      <Card
        className="card"
        hoverable
        style={{
          width: 240,
          margin: "10px",
          minHeight: "500px",
          maxHeight: "500px",
          
        }}
        cover={
          <img
            alt="example"
            src={`https://maps.googleapis.com/maps/api/streetview?size=600x600&location=${props.lat},${props.lng}&heading=360&pitch=-0.76&key=AIzaSyATaVEl_K2D9IcWPICwcog27_C1TsOQGr0`}
          />
        }
        actions={[
          <GooglePlusOutlined />,
          <TwitterOutlined />,
          <InstagramOutlined />,
        ]}
      >
        <Meta
          avatar={<Avatar src= {props.avatar} />}
          title={props.nom_realisateur ? props.nom_realisateur : "Indisponible"}
          description={
            <div className="description">
              <p>Date: {props.date_debut}</p>
              <p>{props.nom_tournage}</p>
              <p>{props.lieu}</p>
            </div>
          }
        />
      </Card>
    </div>
  );
}
