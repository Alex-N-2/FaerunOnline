// Import Statements
import React, { useEffect, useContext } from "react";
import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"

import { mapContext } from "../Context/mapContext.js";

// This component handles parsing clickedFeature to generate the popup content

function PopupParser (){

    const {clickedFeature, setPopupContent} = useContext(mapContext); // Pull in the clicked feature and popup state variables

    useEffect(() => {

        if (clickedFeature.length !== 0) {

            const name = clickedFeature.properties.Name

            // *** Town Popups ***
            if (clickedFeature.layer.id === 'p-towns'){  
                
                // *** Size & Ruined State Properties ***               
                let size = clickedFeature.properties.Size

                size = size !== undefined ? size : "No size information";

                const isRuined = clickedFeature.properties.Ruined;
                
                if (isRuined) {
                  size += " (Ruined)";
                }

                // *** URL Property ***
                const URL = clickedFeature.properties.URL
                console.log(URL)
                let URLText;
                if (URL === undefined) {
                  URLText = "No URL information";
                } else if (URL === "NOURL") {
                  URLText = "This town has no Wiki page";
                } else {
                  URLText = <a href={URL} target="_blank" rel="noopener noreferrer">Open Wiki page</a>;
                }

                setPopupContent(
                    <div style={{ textAlign: 'left' }}>
                        <h3>{name}</h3>
                        <p className="italic">{size}</p>
                        <p className="serifText">{URLText}</p>
                    </div>
                )
            }

            // *** Location Popups ***
            if (clickedFeature.layer.id === 'p-locations icons'){  

                // *** Type Property ***
                const type = clickedFeature.properties.Type

                // *** URL Property ***
                const URL = clickedFeature.properties.URL
                console.log(URL)
                let URLText;
                if (URL === undefined) {
                    URLText = "No URL information";
                } else if (URL === "NOURL") {
                    URLText = "This location has no Wiki page";
                } else {
                    URLText = <a href={URL} target="_blank" rel="noopener noreferrer">Open Wiki page</a>;
                }

                setPopupContent(
                    <div style={{ textAlign: 'left' }}>
                        <h3>{name}</h3>
                        <p className="italic">{type}</p>
                        <p className="serifText">{URLText}</p>
                    </div>

                )
            
            }

       }


    }, [clickedFeature]); // Dependency

    return null;

}

export default PopupParser;
