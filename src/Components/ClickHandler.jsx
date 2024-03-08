// Import Statements
import React, { useEffect, useContext } from "react";
import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"

import { mapContext } from "../Context/mapContext.js";

// This component handles mouse clicks when using the map
// It should need to pull in the map state variable as well as the clicked feature state variable and setter function


function ClickHandler (){

    const {map, clickedFeature, setClickedFeature} = useContext(mapContext); // Pull in the map and clickedFeature state variables

    useEffect(() => {

        console.log("Mouse click handler triggered...")

        if (map !== null){ // Only attempt to add the event listeners if the map is loaded

            console.log("Map is present, click handler activated.")
                
            map.on("click", (event) => {
                // If the user clicks on the map, query if there is a point feature there
                const features = map.queryRenderedFeatures(event.point, {
                layers: ["p-towns", "p-locations icons"], // Towns and Locations
                });

                console.log("Clicked on", features)
                
                // If nothing is found, do nothing
                if (!features.length) {
                    return;
                }                
            
                // Update the clickedFeature state variable 
                setClickedFeature(features[0]);
            });
        }

        if (map == null){
            console.log("Map is null, click handler not activated.")                
        }

    }, [map]); // Dependency: Trigger the useEffect if the map state variable changes


    // This is a seperate useEffect hook to log updates to the clickedFeature state variable. 
    // React state updates are asynchronous, meaning that clickedFeature might not reflect the updated value immediately after setClickedFeature(feature) is called. 
    // Therefore, logging clickedFeature immediately after calling setClickedFeature(feature) may not reflect the updated value. 
    // Log clickedFeature inside a separate useEffect hook to observe its updated value after the state has been updated.

    useEffect(() => {
        console.log("Updated clickedFeature state variable", clickedFeature);
      }, [clickedFeature]); // Trigger when clickedFeature changes


    return null; // This component doesn't render anything visible



}

export default ClickHandler;       
