import React, { useEffect, useState } from "react";

const Slider = ({ sliderData, setSliderdata }) => {
  const [showSlider, setShowSlider] = useState({});

  useEffect(() => {
    sliderData.map((singleSlider) => {
      if (singleSlider.isVisible) {
        setShowSlider(singleSlider);
      }
    });
  }, [sliderData]);

  const handelSliderValueChange = (event) => {
    setSliderdata(
      sliderData.map((el) =>
        el.optionName === showSlider.optionName
          ? { ...el, sliderValue: event.target.value }
          : el
      )
    );
  };
  return (
    <>
      {showSlider?.isVisible && (
        <div className="flex w-full justify-center mt-6">
          <input
            type="range"
            min={0}
            max={1}
            step={0.02}
            value={showSlider?.sliderValue}
            style={{
              width: "30%",
              color: "#bdbdbd",
              backgroundColor: "#bdbdbd",
            }}
            onChange={handelSliderValueChange}
          />
        </div>
      )}
    </>
  );
};

export default Slider;
