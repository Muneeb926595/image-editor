import React from "react";

const EditorOption = ({ singleFilter, handleClick }) => {
  return (
    <div
      className="flex flex-col justify-center items-center mr-4 flex-shrink-0 "
      onClick={() => handleClick(singleFilter)}
    >
      <div
        className=" cursor-pointer h-24 w-28"
        style={{
          filter: `brightness(${singleFilter.brightness}%)`,
        }}
      >
        <div
          className="w-full h-full"
          style={{
            filter: `contrast(${singleFilter.contrast}%)`,
          }}
        >
          <div
            className="w-full h-full"
            style={{
              filter: `sepia(${singleFilter.sepia}%)`,
            }}
          >
            <div
              className="w-full h-full"
              style={{
                filter: `saturate(${singleFilter.saturate}%)`,
              }}
            >
              <div
                className="w-full h-full"
                style={{
                  filter: `hue-rotate(${singleFilter.hueRotate}deg)`,
                }}
              >
                <div
                  className="w-full h-full"
                  style={{
                    filter: `invert(${singleFilter.invert}%)`,
                  }}
                >
                  <img
                    className="w-full h-full"
                    alt="mainPic"
                    style={{
                      filter: `grayscale(${singleFilter.grayscale}%)`,
                    }}
                    src="https://images.unsplash.com/photo-1624779942936-02e331404c01?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-gray-400 mt-2 font-serif text-sm ">
        {singleFilter.optionName}
      </p>
    </div>
  );
};

export default EditorOption;
