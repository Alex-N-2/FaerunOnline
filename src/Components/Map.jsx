// Import Statements
import React, { useRef, useEffect, useState, useContext } from "react";
import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"



import { mapContext } from "../Context/mapContext.js";

// Access Token  (look into moving to a .env file)
mapboxgl.accessToken = "pk.eyJ1IjoiYWxleC1uIiwiYSI6ImNsMGk4MjBidDAwNHcza3A2N2FreTBzcWMifQ.a9KuJy-gQL75eDLobB8xrQ";

const Map = () => {
    const {map, setMap} = useContext(mapContext);
    const mapContainer = useRef(null);

  
   // *** Initialise Map function. ***
   // This runs whenever useEffect is triggered  

    const initializeMap = ({ setMap, mapContainer }) => {               // Function takes the setMap setter function and the mapContainer constant as arguments
      const map = new mapboxgl.Map({                                    // Declare a local variable called map
        container: mapContainer.current,                                // Assign it to mapContainer
        style: "mapbox://styles/alex-n/cljvzq4lp01za01pqgihda7bn",      // Faerun style
        center: [-74, 47],                                              // Starting position long/lat, Waterdeep
        zoom: 5                                                         // Starting zoom
      });         

      map.on("load", () => {                                            // When the map is loaded
        setMap(map);                                                    // Set the map state variable using the setter function
        console.log("Map state variable updated")
        map.resize();
      });

      // Add zoom and rotation controls to the map.
      map.addControl(new mapboxgl.NavigationControl()); 

    };

    // *** Use effect ***
    // This will run whenever the component mounts or if map or setmap change, as they are dependencies of the useEffect hook. 
    // This shouldn't actually happen and it starts with a check if map is null so nothing would happen regardless
    // While removing them shouldn't affect the function, they are left as dependecies because the example had them - there may be a reason to have them later

    useEffect(() => {                                         
    if (!map) {
      console.log("Initialising map...")
      initializeMap({ setMap, mapContainer });
     } 
    }, [map, setMap]);


 // *** Return Statement ***
 // This component ultimately returns a div containing just the map container, which has its own CSS class "map-container"   

return (
    <>
      <div ref={mapContainer} className="map-container" />
    </>
  );
};

export default Map;
