// Import Statements
import React, { useEffect, useContext } from "react";
import ReactDOMServer from 'react-dom/server';
import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"

import { mapContext } from "../Context/mapContext.js";

// This component handles creating a mapbox popup
// Eventually the content of the popup will be parsed in another component

function CreatePopup (){

    const {map, clickedFeature, setClickedFeature, popupContent} = useContext(mapContext); // Pull in the map and clickedFeature state variables

    useEffect(() => {

        console.log("Popup creator triggered...")

        if (map !== null){

            const popup = new mapboxgl.Popup({ offset: [0, -15], className: "" })
            .setLngLat(clickedFeature.geometry.coordinates)            

            popup.setHTML(
                ReactDOMServer.renderToString(popupContent)
              );     

            popup.addTo(map);

            map.flyTo({
                center: clickedFeature.geometry.coordinates
            });

        }

    }, [popupContent]); // Dependency: Trigger the useEffect if the state variable changes

    return null;

}

export default CreatePopup;
