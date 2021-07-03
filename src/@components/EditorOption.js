import React from "react";

import { Icon } from "@components";

const EditorOption = ({ optionName, optionIcon, handleClick }) => {
  return (
    <div className="flex flex-col justify-center items-center mr-4">
      <div className="flex justify-center items-center border border-gray-400 rounded-full p-4 cursor-pointer">
        <Icon type={optionIcon} size="24px" marg="0" />
      </div>
      <p className="text-gray-400 mt-2 font-serif text-sm ">{optionName}</p>
    </div>
  );
};

export default EditorOption;
