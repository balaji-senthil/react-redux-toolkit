import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeFontColor } from "../features/fontColor";

function FontColorChanger() {
  const [color, setColor] = useState("black");
  const dispatch = useDispatch();

  return (
    <div>
      <select value= {color} onChange={(e) => {setColor(e.target.value)}}>
              <option value = "black">Black(default)</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </select>
      <button
        onClick={() => {
          dispatch(changeFontColor(color));
        }}
      >
        CHANGE FONT COLOR
      </button>
    </div>
  );
}

export default FontColorChanger;