import React from 'react';
import Map from "./Map"; 
import ButtonRow from './ButtonRow';


function MapOuter() {
  return (
    <div className='mapOuter'>
        <Map/>
        <ButtonRow/>
    </div>
  );
}

export default MapOuter;

