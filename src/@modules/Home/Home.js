import React, { useState } from "react";

import {
  Icon,
  EditorOption,
  Clickable,
  FilterOption,
  Slider,
} from "@components";

const Home = () => {
  const [sliderData, setSliderdata] = useState([
    { isVisible: false, optionName: "Adjust", sliderValue: 0.0 },
    { isVisible: false, optionName: "Brightness", sliderValue: 0.5 },
    { isVisible: false, optionName: "Contrast", sliderValue: 0.5 },
    { isVisible: false, optionName: "Structure", sliderValue: 0.0 },
    { isVisible: false, optionName: "Warmth", sliderValue: 0.0 },
    { isVisible: false, optionName: "Saturation", sliderValue: 0.5 },
    { isVisible: false, optionName: "Hue", sliderValue: 0.0 },
    { isVisible: false, optionName: "Color", sliderValue: 0.0 },
    { isVisible: false, optionName: "Invert", sliderValue: 0.0 },
  ]);

  const [openedOptions, setOpenedOptions] = useState("edit");

  const editOptions = [
    {
      optionName: "Adjust",
      optionIcon: "adjust",
    },
    {
      optionName: "Brightness",
      optionIcon: "brightness",
    },
    {
      optionName: "Contrast",
      optionIcon: "contrast",
    },
    {
      optionName: "Structure",
      optionIcon: "structure",
    },
    {
      optionName: "Warmth",
      optionIcon: "warmth",
    },
    {
      optionName: "Saturation",
      optionIcon: "saturation",
    },
    {
      optionName: "Hue",
      optionIcon: "hue",
    },
    {
      optionName: "Color",
      optionIcon: "color",
    },
    {
      optionName: "Invert",
      optionIcon: "invert",
    },
  ];

  const filterOptions = [
    {
      optionName: "1977",
      contrast: 110,
      brightness: 110,
      saturate: 130,
      sepia: 0,
      grayscale: 0,
      invert: 0,
      hueRotate: 0,
    },
    {
      optionName: "Aden",
      contrast: 90,
      brightness: 120,
      saturate: 85,
      sepia: 0,
      grayscale: 0,
      invert: 0,
      hueRotate: 20,
    },
    {
      optionName: "Amaro",
      contrast: 90,
      brightness: 110,
      saturate: 150,
      sepia: 0,
      grayscale: 0,
      invert: 0,
      hueRotate: -10,
    },
    {
      optionName: "Brannan",
      contrast: 140,
      brightness: 100,
      saturate: 100,
      sepia: 50,
      grayscale: 0,
      invert: 0,
      hueRotate: 0,
    },
    {
      optionName: "Brooklyn",
      contrast: 90,
      brightness: 110,
      saturate: 100,
      sepia: 0,
      grayscale: 0,
      invert: 0,
      hueRotate: 0,
    },
    {
      optionName: "Clarendon",
      contrast: 110,
      brightness: 110,
      saturate: 130,
      sepia: 0,
      grayscale: 0,
      invert: 0,
      hueRotate: 0,
    },
    {
      optionName: "Earlybird",
      contrast: 90,
      brightness: 100,
      saturate: 100,
      sepia: 20,
      grayscale: 0,
      invert: 0,
      hueRotate: 0,
    },
    {
      optionName: "Gingham",
      contrast: 105,
      brightness: 100,
      saturate: 100,
      sepia: 0,
      grayscale: 0,
      invert: 0,
      hueRotate: 350,
    },
    {
      optionName: "Hudson",
      contrast: 90,
      brightness: 120,
      saturate: 110,
      sepia: 0,
      grayscale: 0,
      invert: 0,
      hueRotate: 0,
    },
    {
      optionName: "Inkwell",
      contrast: 110,
      brightness: 110,
      saturate: 100,
      sepia: 30,
      grayscale: 100,
      invert: 0,
      hueRotate: 0,
    },
    {
      optionName: "Lofi",
      contrast: 95,
      brightness: 95,
      saturate: 150,
      sepia: 25,
      grayscale: 0,
      invert: 0,
      hueRotate: 0,
    },
    {
      optionName: "Maven",
      contrast: 95,
      brightness: 95,
      saturate: 150,
      sepia: 25,
      grayscale: 0,
      invert: 0,
      hueRotate: 0,
    },
    {
      optionName: "Perpetua",
      contrast: 100,
      brightness: 100,
      saturate: 100,
      sepia: 0,
      grayscale: 0,
      invert: 0,
      hueRotate: 0,
    },
    {
      optionName: "Reyes",
      contrast: 85,
      brightness: 110,
      saturate: 75,
      sepia: 22,
      grayscale: 0,
      invert: 0,
      hueRotate: 0,
    },
    {
      optionName: "Stinson",
      contrast: 75,
      brightness: 115,
      saturate: 85,
      sepia: 0,
      grayscale: 0,
      invert: 0,
      hueRotate: 0,
    },
    {
      optionName: "Xpro2",
      contrast: 100,
      brightness: 100,
      saturate: 100,
      sepia: 30,
      grayscale: 0,
      invert: 0,
      hueRotate: 0,
    },
  ];

  const handleEditoroptionClicked = (event) => {
    setSliderdata(
      sliderData.map((el) =>
        el.optionName === event
          ? { ...el, isVisible: true }
          : { ...el, isVisible: false }
      )
    );

    //below commented code is older version which is 100x bad than the above one

    // const newArr = [];
    // switch (event) {
    //   case "Adjust":
    //     sliderData.map((singleSlider) => {
    //       if (singleSlider.optionName === event) {
    //         newArr.push({
    //           isVisible: true,
    //           optionName: singleSlider.optionName,
    //           sliderValue: singleSlider.sliderValue,
    //         });
    //       } else {
    //         newArr.push({
    //           isVisible: false,
    //           optionName: singleSlider.optionName,
    //           sliderValue: singleSlider.sliderValue,
    //         });
    //       }
    //     });
    //     setSliderdata(newArr);
    //     break;
    //   case "Brightness":
    //     sliderData.map((singleSlider) => {
    //       if (singleSlider.optionName === event) {
    //         newArr.push({
    //           isVisible: true,
    //           optionName: singleSlider.optionName,
    //           sliderValue: singleSlider.sliderValue,
    //         });
    //       } else {
    //         newArr.push({
    //           isVisible: false,
    //           optionName: singleSlider.optionName,
    //           sliderValue: singleSlider.sliderValue,
    //         });
    //       }
    //     });
    //     setSliderdata(newArr);
    //     break;
    //   case "Contrast":
    //     sliderData.map((singleSlider) => {
    //       if (singleSlider.optionName === event) {
    //         newArr.push({
    //           isVisible: true,
    //           optionName: singleSlider.optionName,
    //           sliderValue: singleSlider.sliderValue,
    //         });
    //       } else {
    //         newArr.push({
    //           isVisible: false,
    //           optionName: singleSlider.optionName,
    //           sliderValue: singleSlider.sliderValue,
    //         });
    //       }
    //     });
    //     setSliderdata(newArr);
    //     break;
    //   case "Structure":
    //     sliderData.map((singleSlider) => {
    //       if (singleSlider.optionName === event) {
    //         newArr.push({
    //           isVisible: true,
    //           optionName: singleSlider.optionName,
    //           sliderValue: singleSlider.sliderValue,
    //         });
    //       } else {
    //         newArr.push({
    //           isVisible: false,
    //           optionName: singleSlider.optionName,
    //           sliderValue: singleSlider.sliderValue,
    //         });
    //       }
    //     });
    //     setSliderdata(newArr);
    //     break;
    //   case "Warmth":
    //     sliderData.map((singleSlider) => {
    //       if (singleSlider.optionName === event) {
    //         newArr.push({
    //           isVisible: true,
    //           optionName: singleSlider.optionName,
    //           sliderValue: singleSlider.sliderValue,
    //         });
    //       } else {
    //         newArr.push({
    //           isVisible: false,
    //           optionName: singleSlider.optionName,
    //           sliderValue: singleSlider.sliderValue,
    //         });
    //       }
    //     });
    //     setSliderdata(newArr);
    //     break;
    //   case "Saturation":
    //     sliderData.map((singleSlider) => {
    //       if (singleSlider.optionName === event) {
    //         newArr.push({
    //           isVisible: true,
    //           optionName: singleSlider.optionName,
    //           sliderValue: singleSlider.sliderValue,
    //         });
    //       } else {
    //         newArr.push({
    //           isVisible: false,
    //           optionName: singleSlider.optionName,
    //           sliderValue: singleSlider.sliderValue,
    //         });
    //       }
    //     });
    //     setSliderdata(newArr);
    //     break;
    //   case "Color":
    //     sliderData.map((singleSlider) => {
    //       if (singleSlider.optionName === event) {
    //         newArr.push({
    //           isVisible: true,
    //           optionName: singleSlider.optionName,
    //           sliderValue: singleSlider.sliderValue,
    //         });
    //       } else {
    //         newArr.push({
    //           isVisible: false,
    //           optionName: singleSlider.optionName,
    //           sliderValue: singleSlider.sliderValue,
    //         });
    //       }
    //     });
    //     setSliderdata(newArr);
    //     break;
    //   default:
    //     break;
    // }
  };

  const handleApplyFilter = (event) => {
    setSliderdata([
      { isVisible: false, optionName: "Adjust", sliderValue: 0.0 },
      {
        isVisible: false,
        optionName: "Brightness",
        sliderValue: event.brightness / 200,
      },
      {
        isVisible: false,
        optionName: "Contrast",
        sliderValue: event.contrast / 200,
      },
      { isVisible: false, optionName: "Structure", sliderValue: 0.0 },
      {
        isVisible: false,
        optionName: "Warmth",
        sliderValue: event.sepia / 200,
      },
      {
        isVisible: false,
        optionName: "Saturation",
        sliderValue: event.saturate / 200,
      },
      {
        isVisible: false,
        optionName: "Hue",
        sliderValue: event.hueRotate / 360,
      },
      {
        isVisible: false,
        optionName: "Color",
        sliderValue: event.grayscale / 100,
      },
      {
        isVisible: false,
        optionName: "Invert",
        sliderValue: event.invert / 100,
      },
    ]);
  };

  return (
    <div className="w-screen h-screen flex-col  px-16 py-12">
      <div className="flex w-full ">
        <Clickable>
          <Icon type="cross" size="24px" />
        </Clickable>
      </div>
      <div
        className="flex w-full h-3/4 justify-center items-center"
        style={{
          filter: `brightness(${sliderData[1].sliderValue * 200}%)`,
        }}
      >
        <div
          className="flex justify-center items-center w-full h-full"
          style={{
            filter: `contrast(${sliderData[2].sliderValue * 200}%)`,
          }}
        >
          <div
            className="flex justify-center items-center w-full h-full"
            style={{
              filter: `sepia(${sliderData[4].sliderValue * 200}%)`,
            }}
          >
            <div
              className="flex justify-center items-center w-full h-full"
              style={{
                filter: `saturate(${sliderData[5].sliderValue * 200}%)`,
              }}
            >
              <div
                className="flex justify-center items-center w-full h-full"
                style={{
                  filter: `hue-rotate(${sliderData[6].sliderValue * 360}deg)`,
                }}
              >
                <div
                  className="flex justify-center items-center w-full h-full"
                  style={{
                    filter: `invert(${sliderData[8].sliderValue * 100}%)`,
                  }}
                >
                  <img
                    className="w-2/4 h-4/4"
                    alt="mainPic"
                    style={{
                      transform: ` rotate(${
                        sliderData[0].sliderValue * 360
                      }deg)`,
                      filter: `grayscale(${sliderData[7].sliderValue * 100}%)`,
                    }}
                    src="https://images.unsplash.com/photo-1624779942936-02e331404c01?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-1/4 flex-col items-center justify-center w-full ">
        <div className="flex w-full justify-center ">
          <p
            className="text-white font-sans mr-2 cursor-pointer"
            onClick={() => setOpenedOptions("edit")}
          >
            Edit
          </p>
          <p
            className="text-white font-sans ml-2 cursor-pointer "
            onClick={() => setOpenedOptions("filter")}
          >
            Filter
          </p>
        </div>

        <Slider sliderData={sliderData} setSliderdata={setSliderdata} />

        <div className="flex w-full justify-center">
          {openedOptions === "edit" ? (
            <div className="flex w-3/4 justify-center mt-6 ">
              {editOptions.map((singleOption) => (
                <EditorOption
                  optionName={singleOption.optionName}
                  optionIcon={singleOption.optionIcon}
                  sliderData={sliderData}
                  handleClick={handleEditoroptionClicked}
                />
              ))}
            </div>
          ) : (
            <div className="flex w-3/4 mt-6 pb-4 overflow-scroll overflow-y-hidden ">
              {filterOptions.map((singleOption) => (
                <FilterOption
                  singleFilter={singleOption}
                  handleClick={handleApplyFilter}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
