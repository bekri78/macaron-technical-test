import React, { useState } from "react";
import { Modal, Typography  } from "antd";
import Loc from "./img/loc.svg";
import "./modale.css";

export default function Modale(props) {
    const { Title } = Typography;
  const [isModalVisible, setIsModalVisible] = useState(props.open);

   

  const closeModale = () => {
    setIsModalVisible(false);
  };
 

  return (
    <>
     
      <Modal
        title="Oups vous  avez désactivé la geolocalisation"
        visible={isModalVisible}
        onOk={closeModale}
        onCancel={closeModale}
      >
        <div className="conteneur-location">
          <img className="imgCarte" src={Loc} alt="img-loc" />
          <Title level={5}>Pas de panique , nous vous  plaçons le centre de la carte sur  paris. <br></br>Bonne recherche sur Macaron.  </Title>
          
        </div>
      </Modal>
    </>
  );
}
