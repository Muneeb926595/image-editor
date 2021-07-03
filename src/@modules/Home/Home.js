import React, { useState } from "react";

import { Icon, EditorOption, Clickable, FilterOption } from "@components";

const Home = () => {
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
      optionName: "Color",
      optionIcon: "color",
    },
  ];
  const filterOptions = [
    {
      optionName: "Adjust",
    },
    {
      optionName: "Brightness",
    },
    {
      optionName: "Contrast",
    },
    {
      optionName: "Structure",
    },
    {
      optionName: "Warmth",
    },
    {
      optionName: "Saturation",
    },
    {
      optionName: "Color",
    },
  ];

  return (
    <div className="w-screen h-screen flex-col  px-16 py-12">
      <div className="flex w-full ">
        <Clickable>
          <Icon type="cross" size="24px" />
        </Clickable>
      </div>
      <div className="flex w-full h-3/4 justify-center items-center">
        <img
          className="w-2/4 h-4/4"
          alt="mainPic"
          src="https://images.unsplash.com/photo-1624779942936-02e331404c01?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
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
        <div className="flex w-full justify-center">
          {openedOptions === "edit" ? (
            <div className="flex w-3/4 justify-center mt-6 ">
              {editOptions.map((singleOption) => (
                <EditorOption
                  optionName={singleOption.optionName}
                  optionIcon={singleOption.optionIcon}
                />
              ))}
            </div>
          ) : (
            <div className="flex w-3/4 justify-center mt-6 ">
              {filterOptions.map((singleOption) => (
                <FilterOption optionName={singleOption.optionName} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
