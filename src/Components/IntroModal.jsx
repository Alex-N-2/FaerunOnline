import React, { useRef, useEffect, useState, useContext } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

/* import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close'; */


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark} from '@fortawesome/free-solid-svg-icons'

import { mapContext } from "../Context/mapContext.js";

const introModalStyle = {
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)', // This shifts the anchor point of the box from its top left to its centre
    width: 500,
    height: 300,
    bgcolor: 'bisque',
    border: '4px solid sienna',
    borderRadius: '12px',
    boxShadow: 24,
    p: 4,
    outline: 'none',
    textAlign: 'center',
  };

export default function IntroModal() {

    const {introModalOpen, setIntroModalOpen} = useContext(mapContext);  

    const handleClose = () => setIntroModalOpen(false);
  
    return (
      <div>
        <Modal
          open={introModalOpen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={introModalStyle}>
            {/* Close button */}
            <Button onClick={handleClose} style={{ position: 'absolute', top: '5px', right: '5px', width: 25, height: 25, }}>
                <FontAwesomeIcon icon={faXmark} size="lg" style={{color: "sienna",}} />
            </Button>

            <Typography id="modal-modal-title" variant="h4" component="h2" style={{ fontFamily: 'Historical-FellTypeRomanSC, serif' }}>
              Welcome to <span style={{ color: '#e31c3d' }}>Faerûn Online</span>
            </Typography>

            <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ fontFamily: 'Merriweather, serif' }}>
              Explore the world of Faerûn with this interactive map!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ fontFamily: 'Merriweather, serif' }}>
              Click on towns and locations for more information!
            </Typography>

            <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ fontFamily: 'Merriweather, serif' }}>
              Currently featuring over 750 towns and over 300 locations!
            </Typography>

          </Box>
        </Modal>
      </div>
    );
  }

