import { toast } from "react-toastify";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Avatar, Icon, Clickable } from "@components";
import { updateProfileImage } from "@store/auth/AuthActions";
import { isImage } from "@helpers/utils";

const LeftPanel = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [userImage, setUserImage] = useState("");
  const [file, setFile] = useState("");

  const [selectedOption, setSelectedOption] = useState({
    chat: true,
    newGroup: false,
    settings: false,
  });

  const userData = useSelector(({ Foodbook }) => Foodbook.auth.user);

  useEffect(() => {
    setUserImage(userData?.image);
  }, [userData]);

  useEffect(() => {
    setUserImage(file);
  }, [file]);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("access_token");
    history.push("/");
  };

  const handleChangeSelectedTab = (newSelection) => {
    switch (newSelection) {
      case "chat":
        setSelectedOption({
          chat: true,
          newGroup: false,
          settings: false,
        });
        break;
      case "newGroup":
        setSelectedOption({
          chat: false,
          newGroup: true,
          settings: false,
        });
        break;
      case "settings":
        setSelectedOption({
          chat: false,
          newGroup: false,
          settings: true,
        });
        break;
      default:
        setSelectedOption({
          chat: true,
          newGroup: false,
          settings: false,
        });
        break;
    }
  };

  const uploadFile = (event) => {
    let file1 = event.target.files[0];
    if (file1.type.split("/")[0] === "image") {
      if (!isImage(file1.type)) {
        toast.error("Choosen image file formate is not supported.");
        return;
      }
    } else {
      toast.error("Choosen file formate is not supported.");
      return;
    }
    if (Math.floor(file1.size / 1048576) > 10) {
      toast.error("File size is too big please upload file less then 10MB");
    } else {
      setFile(URL.createObjectURL(file1));
      dispatch(updateProfileImage({ imageFile: file1 }));
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center w-full h-full my-8 bg-white">
        <div style={{ position: "relative" }}>
          <Avatar uri={userImage} size="80" />
          <div style={{ position: "absolute", right: "0", bottom: "-8%" }}>
            <Clickable>
              <input
                type="file"
                id="uploadMedia"
                accept="image/*,video/mp4,video/x-m4v,video/*"
                style={{ display: "none" }}
                value={""}
                multiple={false}
                onChange={uploadFile}
              />
              <label htmlFor="uploadMedia">
                <Icon type="plus" size="24px" />
              </label>
            </Clickable>
          </div>
        </div>
        <p className="text-l mt-2 mb-6 font-medium text-gray-500 font-sans">
          {userData?.userName}
        </p>
      </div>
      <div className="flex flex-col w-full">
        <div
          className="flex items-center px-3 mb-6 cursor-pointer"
          onClick={() => handleChangeSelectedTab("chat")}
        >
          <Icon
            type={selectedOption.chat ? "chat-green" : "chat-gray"}
            size="22px"
          />
          <p
            className={`text-l ml-3 font-medium ${
              selectedOption.chat ? "text-green-500" : "text-gray-500"
            } font-sans`}
          >
            Chat
          </p>
        </div>
        <div
          className="flex items-center px-3 mb-6 cursor-pointer"
          onClick={() => handleChangeSelectedTab("newGroup")}
        >
          <Icon
            type={
              selectedOption.newGroup ? "new-group-green" : "new-group-gray"
            }
            size="22px"
          />
          <p
            className={`text-l ml-3 font-medium ${
              selectedOption.newGroup ? "text-green-500" : "text-gray-500"
            } font-sans`}
          >
            New Group
          </p>
        </div>
        <div
          className="flex items-center px-3 mb-6 cursor-pointer"
          onClick={() => handleChangeSelectedTab("settings")}
        >
          <Icon
            type={selectedOption.settings ? "settings-green" : "settings-gray"}
            size="22px"
          />
          <p
            className={`text-l ml-3 font-medium ${
              selectedOption.settings ? "text-green-500" : "text-gray-500"
            } font-sans`}
          >
            Settings
          </p>
        </div>
        <div
          className="flex items-center px-3 mb-6 cursor-pointer"
          onClick={handleLogout}
        >
          <Icon type="logout-gray" size="22px" />
          <p className={`text-l ml-3 font-medium text-gray-500 font-sans`}>
            Logout
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
