import React, { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Loc from "./img/loc.svg";
import "./modale.css";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Modale(props) {

  const [isModalVisible, setIsModalVisible] = useState(props.open);

   

  const closeModale = () => {
    setIsModalVisible(false);
  };
 

  return (
    <>

    <Modal
      open={isModalVisible}
      onClose={closeModale}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Oups  géolocalisation indisponible..
        </Typography>
        <div  className='conteneur-location'>

        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Pas de panique , nous vous plaçons le centre de la carte sur paris.
        </Typography>
          <img  className ='imgCarte' src ={Loc} alt='imgGeoloc'/>
        </div>
        <Button style={{float:'right', marginTop:'20px'}} variant="contained" onClick={closeModale}>Fermer</Button>
      </Box>
    </Modal>
  </>
  );
}
