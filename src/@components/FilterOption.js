import React from "react";

const EditorOption = ({ singleFilter, handleClick }) => {
  return (
    <div className="flex flex-col justify-center items-center mr-4">
      <div className="flex justify-center items-center cursor-pointer h-24 w-30">
        <img
          className="w-full h-full"
          alt="filterPic"
          src="https://images.unsplash.com/photo-1624779942936-02e331404c01?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
      </div>
      <p className="text-gray-400 mt-2 font-serif text-sm ">
        {singleFilter.optionName}
      </p>
    </div>
  );
};

export default EditorOption;
