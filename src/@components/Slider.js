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
    const newArr = [];
    switch (showSlider.optionName) {
      case "Adjust":
        sliderData.map((singleSlider) => {
          if (singleSlider.optionName === showSlider.optionName) {
            newArr.push({
              isVisible: singleSlider.isVisible,
              optionName: singleSlider.optionName,
              sliderValue: event.target.value,
            });
          } else {
            newArr.push(singleSlider);
          }
        });
        setSliderdata(newArr);
        break;
      case "Brightness":
        sliderData.map((singleSlider) => {
          if (singleSlider.optionName === showSlider.optionName) {
            newArr.push({
              isVisible: singleSlider.isVisible,
              optionName: singleSlider.optionName,
              sliderValue: event.target.value,
            });
          } else {
            newArr.push(singleSlider);
          }
        });
        setSliderdata(newArr);
        break;
      case "Contrast":
        sliderData.map((singleSlider) => {
          if (singleSlider.optionName === showSlider.optionName) {
            newArr.push({
              isVisible: singleSlider.isVisible,
              optionName: singleSlider.optionName,
              sliderValue: event.target.value,
            });
          } else {
            newArr.push(singleSlider);
          }
        });
        setSliderdata(newArr);
        break;
      case "Structure":
        sliderData.map((singleSlider) => {
          if (singleSlider.optionName === showSlider.optionName) {
            newArr.push({
              isVisible: singleSlider.isVisible,
              optionName: singleSlider.optionName,
              sliderValue: event.target.value,
            });
          } else {
            newArr.push(singleSlider);
          }
        });
        setSliderdata(newArr);
        break;
      case "Warmth":
        sliderData.map((singleSlider) => {
          if (singleSlider.optionName === showSlider.optionName) {
            newArr.push({
              isVisible: singleSlider.isVisible,
              optionName: singleSlider.optionName,
              sliderValue: event.target.value,
            });
          } else {
            newArr.push(singleSlider);
          }
        });
        setSliderdata(newArr);
        break;
      case "Saturation":
        sliderData.map((singleSlider) => {
          if (singleSlider.optionName === showSlider.optionName) {
            newArr.push({
              isVisible: singleSlider.isVisible,
              optionName: singleSlider.optionName,
              sliderValue: event.target.value,
            });
          } else {
            newArr.push(singleSlider);
          }
        });
        setSliderdata(newArr);
        break;
      case "Color":
        sliderData.map((singleSlider) => {
          if (singleSlider.optionName === showSlider.optionName) {
            newArr.push({
              isVisible: singleSlider.isVisible,
              optionName: singleSlider.optionName,
              sliderValue: event.target.value,
            });
          } else {
            newArr.push(singleSlider);
          }
        });
        setSliderdata(newArr);
        break;
      default:
        break;
    }
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
