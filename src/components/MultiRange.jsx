import { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
function MultiRange({ MIN, MAX,step=5 }) {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  return (
    <div className="form-group__range">
      <div className="form-group__range--indicator">
        <MultiRangeSlider
          // disabled={true}
          max={MAX}
          min={MIN}
          label={false}
          ruler={false}
          style={{ border: "none", boxShadow: "none" }}
          value={[minValue, maxValue]}
          onInput={(e) => {
            setMinValue(e.minValue);
            setMaxValue(e.maxValue);
          }}
          step={step}
          //   barLeftColor="pink"
          //   barInnerColor="#fff"
          //   barRightColor="green"
          //   thumbLeftColor="#fff"
          //   thumbRightColor="#fff"
        ></MultiRangeSlider>
      </div>
      <div className="form-group__range--label">
        <span>{minValue}</span>
        <span>{maxValue}</span>
      </div>
    </div>
  );
}

export default MultiRange;
