// Import Statements
import React, { useEffect, useContext } from "react";
import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"

import { mapContext } from "../Context/mapContext.js";

// This component is only to handle the mouse pointer changes when using the map
// It should only need to pull in the map state variable


function MousePointerHandler (){

    const {map} = useContext(mapContext); // Pull in the map state variable

    useEffect(() => {

        console.log("Mouse pointer handler triggered...")

        if (map !== null){ // Only attempt to add the event listeners if the map is loaded

            console.log("Map is present, pointer listeners activated.")

            // map.on adds an event listener to the Mapbox GL JS map instance. In this case, it's listening for a 'mouseenter' event on the specified layers.
            // When the mouse enters any feature belonging to these layers, the provided callback function will be executed. 
            // Once added, the event listener will continue to work until explicitly removed using map.off or until the map instance is destroyed.   

            map.on('mouseenter', ['p-towns', 'p-locations icons'], (e) => {
                //if (!measureModeEnabled) {
                    map.getCanvas().style.cursor = 'pointer';
                    //console.log('Mouse entered point layer');
                //}
            });
            
            map.on('mouseleave', ['p-towns', 'p-locations icons'], () => {
                //if (!measureModeEnabled) {
                    map.getCanvas().style.cursor = '';
                    //console.log('Mouse left point layer');
                //}
            });
        }

        if (map == null){
            console.log("Map is null, pointer listeners not activated.")                
        }


      }, [map]); // Dependency: Trigger the useEffect if the map state variable changes

    return null; // This component doesn't render anything visible
}

export default MousePointerHandler;
