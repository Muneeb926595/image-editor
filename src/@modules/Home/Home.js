import React from "react";

import { Icon, Clickable } from "@components";

const Home = () => {
  return (
    <div className="w-screen h-screen flex-col px-16 py-12">
      <div className="flex w-full ">
        <Clickable>
          <Icon type="cross" size="24px" />
        </Clickable>
      </div>
      <div className="flex w-full h-3/4 justify-center items-center">
        <img src="https://images.unsplash.com/photo-1624779942936-02e331404c01?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
      </div>
      <div className="h-1/4 flex-col items-center justify-center w-full ">
        <div className="flex w-full justify-center ">
          <p className="text-white font-sans mr-2 ">Filter</p>
          <p className="text-white font-sans ml-2">Edit</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
