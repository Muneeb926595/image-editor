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
  ];

  const filterOptions = [
    {
      optionName: "1977",
      Contrast: 110,
      Brightness: 110,
      Saturate: 130,
      Sepia: 0,
      Grayscale: 0,
      Invert: 0,
      HueRotate: 0,
      Blur: 0,
    },
    {
      optionName: "Aden",
      Contrast: 90,
      Brightness: 120,
      Saturate: 85,
      Sepia: 0,
      Grayscale: 0,
      Invert: 0,
      HueRotate: 20,
      Blur: 0,
    },
    {
      optionName: "Amaro",
      Contrast: 90,
      Brightness: 110,
      Saturate: 150,
      Sepia: 0,
      Grayscale: 0,
      Invert: 0,
      HueRotate: -10,
      Blur: 0,
    },
    {
      optionName: "Brannan",
      Contrast: 140,
      Brightness: 100,
      Saturate: 100,
      Sepia: 50,
      Grayscale: 0,
      Invert: 0,
      HueRotate: 0,
      Blur: 0,
    },
    {
      optionName: "Brooklyn",
      Contrast: 90,
      Brightness: 110,
      Saturate: 100,
      Sepia: 0,
      Grayscale: 0,
      Invert: 0,
      HueRotate: 0,
      Blur: 0,
    },
    {
      optionName: "Clarendon",
      Contrast: 110,
      Brightness: 110,
      Saturate: 130,
      Sepia: 0,
      Grayscale: 0,
      Invert: 0,
      HueRotate: 0,
      Blur: 0,
    },
    {
      optionName: "Earlybird",
      Contrast: 90,
      Brightness: 100,
      Saturate: 100,
      Sepia: 20,
      Grayscale: 0,
      Invert: 0,
      HueRotate: 0,
      Blur: 0,
    },
    {
      optionName: "Gingham",
      Contrast: 105,
      Brightness: 100,
      Saturate: 100,
      Sepia: 0,
      Grayscale: 0,
      Invert: 0,
      HueRotate: 350,
      Blur: 0,
    },
    {
      optionName: "Hudson",
      Contrast: 90,
      Brightness: 120,
      Saturate: 110,
      Sepia: 0,
      Grayscale: 0,
      Invert: 0,
      HueRotate: 0,
      Blur: 0,
    },
    {
      optionName: "Inkwell",
      Contrast: 110,
      Brightness: 110,
      Saturate: 100,
      Sepia: 30,
      Grayscale: 100,
      Invert: 0,
      HueRotate: 0,
      Blur: 0,
    },
    {
      optionName: "Lofi",
      Contrast: 95,
      Brightness: 95,
      Saturate: 150,
      Sepia: 25,
      Grayscale: 0,
      Invert: 0,
      HueRotate: 0,
      Blur: 0,
    },
    {
      optionName: "Maven",
      Contrast: 95,
      Brightness: 95,
      Saturate: 150,
      Sepia: 25,
      Grayscale: 0,
      Invert: 0,
      HueRotate: 0,
      Blur: 0,
    },
    {
      optionName: "Perpetua",
      Contrast: 100,
      Brightness: 100,
      Saturate: 100,
      Sepia: 0,
      Grayscale: 0,
      Invert: 0,
      HueRotate: 0,
      Blur: 0,
    },
    {
      optionName: "Reyes",
      Contrast: 85,
      Brightness: 110,
      Saturate: 75,
      Sepia: 22,
      Grayscale: 0,
      Invert: 0,
      HueRotate: 0,
      Blur: 0,
    },
    {
      optionName: "Stinson",
      Contrast: 75,
      Brightness: 115,
      Saturate: 85,
      Sepia: 0,
      Grayscale: 0,
      Invert: 0,
      HueRotate: 0,
      Blur: 0,
    },
    {
      optionName: "Xpro2",
      Contrast: 100,
      Brightness: 100,
      Saturate: 100,
      Sepia: 30,
      Grayscale: 0,
      Invert: 0,
      HueRotate: 0,
      Blur: 0,
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
                <img
                  className="w-2/4 h-4/4"
                  alt="mainPic"
                  style={{
                    transform: ` rotate(${sliderData[0].sliderValue * 360}deg)`,
                    filter: `grayscale(${sliderData[7].sliderValue * 100}%)`,
                  }}
                  src="https://images.unsplash.com/photo-1624779942936-02e331404c01?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                />
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
            <div className="flex w-3/4 justify-center mt-6 ">
              {filterOptions.map((singleOption) => (
                <FilterOption singleFilter={singleOption} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
