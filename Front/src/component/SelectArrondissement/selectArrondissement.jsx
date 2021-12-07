/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Slider from "@mui/material/Slider";

const Arrondissements = (props) => {
  const [selection, setSelection] = useState([1, 2]);
  const [selectionDisplay, setSelectionDisplay] = useState([]);

  const relache = () => {
    props.valueArrondissement(selectionDisplay);
  };
  const onChange = async (event, value) => {
    setSelection(value);
    let list = [];
    for (var i = value[0]; i <= value[1]; i++) {
      i > 9 ? list.push(("750" + i).slice()) : list.push(("7500" + i).slice());
    }

    setSelectionDisplay(list);
  };
  const valuetext = (value) => {
    return `${value}°C`;
  };
  return (
    <div className="slider">
      <p style={{ marginBottom: "4em" }}>
        {" "}
        Votre selection :{" "}
        {selectionDisplay.length
          ? selectionDisplay.toString()
          : " Faite defiler le slider pour filtrer les arrondissements"}{" "}
      </p>

      <Slider
        onMouseUp={relache}
        value={selection}
        step={1}
        min={1}
        max={20}
        onChange={onChange}
        valueLabelDisplay="on"
        getAriaValueText={valuetext}
        marks
      />
    </div>
  );
};

export default Arrondissements;
