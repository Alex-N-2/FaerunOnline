import { useState, useEffect } from "react";
import "./App.css";

import { MapProvider } from "./Context/mapContext";

//import TownDialog from "./TownDialog";
import MapOuter from "./Components/MapOuter";
import MousePointerHandler from "./Components/MousePointer";
import ClickHandler from "./Components/ClickHandler";
import CreatePopup from "./Components/Popup";
import PopupParser from "./Components/PopupParser";
import IntroModal from "./Components/IntroModal";

function App() {

  console.log("App started")

  return (
    <MapProvider>
      <div className="App">

        {/*<TownDialog town={featureSelected} setTown={setFeatureSelected} />
        {/* The TownDialog component uses the featureSelected state variable to display information about the selected feature. 
        It also uses the setFeatureSelected function to update the selected feature state when closing the dialog). */}
        <IntroModal/>
        <MousePointerHandler/>
        <ClickHandler/>
        <PopupParser/>
        <CreatePopup/>     
        <MapOuter/>

      </div>
    </MapProvider>
  );
}

export default App;
