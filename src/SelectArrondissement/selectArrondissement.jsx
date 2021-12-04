/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Slider } from "antd";

export default function selectArrondissement(props) {
  const onChange = (value) => {
    let list = [];
    for (var i = value[0]; i <= value[1]; i++) {
      i > 9 ? list.push(("750" + i).slice()) : list.push(("7500" + i).slice());
    }

    props.valueArrondissement(list);
  };

  return (
    <div className="slider">
      <Slider
        range
        step={1}
        defaultValue={[1, 2]}
        onChange={onChange}
        max={20}
      />
    </div>
  );
}
