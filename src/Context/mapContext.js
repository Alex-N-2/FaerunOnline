import React, { createContext, useState } from "react";


const mapContext = createContext(undefined); 
// A context is used to provide state variables and setter functions to any child components that need access to them


// A provider is used to encapsulate the components that need to access the states in the context

function MapProvider({ children }) {
    const [map, setMap] = useState(null); // Initialise with null value
    const [clickedFeature, setClickedFeature] = useState([]); // Initialise with empty array
    const [popupContent, setPopupContent] = useState([]); // Initialise with empty array
    const [introModalOpen, setIntroModalOpen] = useState(true); // Initialise as false
    const [measureModeEnabled, setMeasureMode] = useState(false); // Initialise as false
    
    // These are state variables and setter functions. 
  
  
    const Provider = mapContext.Provider;
  
    return (
      <Provider
        value={{         
          map,
          setMap,
          clickedFeature,
          setClickedFeature,
          popupContent,
          setPopupContent,
          introModalOpen,
          setIntroModalOpen
        }}
      >
        {children}
      </Provider>
    );
  }
  
  export { MapProvider, mapContext };
  

  