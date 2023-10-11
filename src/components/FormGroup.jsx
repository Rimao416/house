import { useState } from "react";
import Select from "./Select";
import MultiRangeSlider from "multi-range-slider-react";
import MultiRange from "./MultiRange";
function FormGroup({ type = "select", label, MIN = 0, MAX = 0, children }) {
  return (
    <div className="form-group">
      <label htmlFor="type" className="form-group__label">
        {label}
      </label>
      {type == "select" && children}
      {type == "range" && <MultiRange MIN={MIN} MAX={MAX} />}
      {type=="checkbox" && children}
    </div>
  );
}

export default FormGroup;
