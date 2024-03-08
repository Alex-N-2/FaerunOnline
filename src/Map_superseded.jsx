import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import "./index.css";

export default ({ clickedFeature }) => {
  //mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;      **** Can't get this to work ***
  mapboxgl.accessToken = "pk.eyJ1IjoiYWxleC1uIiwiYSI6ImNsMGk4MjBidDAwNHcza3A2N2FreTBzcWMifQ.a9KuJy-gQL75eDLobB8xrQ";

  const mapContainer = useRef(null);    // Constant to hold the mapContainer 
  const map = useRef(null);             // Constant to hold the map itself   
  const [lat, setLat] = useState(47);
  const [lng, setLng] = useState(-74);
  const [zoom, setZoom] = useState(5);

  useEffect(() => {

    // Initialising the map
    if (map.current) return; // If the map is already initialised, do nothing
    map.current = new mapboxgl.Map({ // Otherwise, initialise a map in mapContainer with the specified style and parameters
      container: mapContainer.current, 
      style: "mapbox://styles/alex-n/cljvzq4lp01za01pqgihda7bn",
      center: [lng, lat],
      zoom: zoom,
    });

    // Handling feature clicks
    map.current.on("click", (event) => {
      // If the user clicks on a point feature, get its information.
      const features = map.current.queryRenderedFeatures(event.point, {
        layers: ["p-towns", "p-locations icons"], // Towns and Locations
      });
      if (!features.length) {
        return;
      }
      const feature = features[0];
      // console.log(feature); (This is now logged when the useState hook is updated)
      clickedFeature(feature);
    });

    // MOUSE POINTER CODE
    // Code to change cursor to move type while mouse button is down and back when it is released
    const handleMouseDown = () => {
      mapContainer.current.style.cursor = "grabbing";
    };

    const handleMouseUp = () => {
      mapContainer.current.style.cursor = "";
    };

    // Event listeners to run change cursor code   
    mapContainer.current.addEventListener("mousedown", handleMouseDown);
    mapContainer.current.addEventListener("mouseup", handleMouseUp);
    
    // Change cursor to pointer type when entering clickable layers
    map.current.on("mouseenter", ["p-towns","p-locations icons"], () => {
      mapContainer.current.style.cursor = "pointer";
    });

    // Change cursor back to default when leaving clickable layers
    map.current.on("mouseleave", ["p-towns","p-locations icons"], () => {
      mapContainer.current.style.cursor = "";
    });

  }, []);

  

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};
