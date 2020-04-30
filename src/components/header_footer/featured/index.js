import React from "react";
import Carrousel from "./Carrousel";
import TimeUntil from "./TimeUntil";
import Box from '@material-ui/core/Box';

const Featured = () => {
  return (


    
    <div style={{ position: "relative" }}>

      <Carrousel />
      <div className="artist_name">
        <div className="wrapper">Burning Man </div>
      </div>

      <TimeUntil />
    </div>
  );
};

export default Featured;
