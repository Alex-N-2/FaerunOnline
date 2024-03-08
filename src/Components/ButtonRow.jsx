import React, { useRef, useEffect, useState, useContext } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRuler, faFloppyDisk, faInfo, faMapPin } from '@fortawesome/free-solid-svg-icons'

import { mapContext } from "../Context/mapContext.js";



function ButtonRow() {

  const {setIntroModalOpen, setClickedFeature} = useContext(mapContext); // Pull in the map and clickedFeature state variables

    const handleClick = (buttonNumber) => {
        switch (buttonNumber) {
          case 1:
            console.log("Button 1 clicked");
            // Add logic for button 1
            break;
          case 2:
            console.log("Button 2 clicked");
            // Add logic for button 2
            break;
          case 3:
            console.log("Button 3 clicked");
            // Add logic for button 3
            break;
          case 4:
            // *** Show Intro Modal ***
            console.log("Button 4 clicked");
            setIntroModalOpen(true);
            setClickedFeature([]);

            break;


          default:
            console.log("Unknown button clicked");
        }

    };

  return (
    <div className="button-row">
      <button className="window circular-button" onClick={() => handleClick(1)}><FontAwesomeIcon icon={faFloppyDisk} size="xl" style={{color: "sienna",}} /></button>
      <button className="window circular-button" onClick={() => handleClick(2)}><FontAwesomeIcon icon={faMapPin} size="xl" style={{color: "sienna",}} /></button>
      <button className="window circular-button" onClick={() => handleClick(3)}><FontAwesomeIcon icon={faRuler} size="xl" style={{color: "sienna",}} /></button>
      <button className="window circular-button" onClick={() => handleClick(4)}><FontAwesomeIcon icon={faInfo} size="xl" style={{color: "sienna",}} /></button>
    </div>
  );
}

export default ButtonRow;
