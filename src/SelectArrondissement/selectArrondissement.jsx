/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { Slider } from "antd";

export default function selectArrondissement(props) {
  const [selection, setSelection] = useState([]);

  const onChange = (value) => {
    let list = [];
    for (var i = value[0]; i <= value[1]; i++) {
      i > 9 ? list.push(("750" + i).slice()) : list.push(("7500" + i).slice());
    }

    props.valueArrondissement(list);
    setSelection(list);
  };

  return (
    <div className="slider">
      <p style={{ marginBottom: "4em" }}>
        {" "}
        Votre selection :{" "}
        {selection.length
          ? selection.toString()
          : " Faite defiler le slider pour filtrer les arrondissements"}{" "}
      </p>
      <Slider
        range
        step={1}
        defaultValue={[1, 2]}
        onChange={onChange}
        max={20}
        tooltipVisible
      />
    </div>
  );
}
