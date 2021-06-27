import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { LeftPanel, Contacts, Body } from "./components";
import { socket } from "@helpers/sockets";
import { updateContactsLocally } from "@store/messages/MessagesActions";
import { setShowNewCallAlert } from "@store/modals/ModalsActions";

const Messenger = () => {
  const dispatch = useDispatch();
  const [otherUserData, setOtherUserData] = useState({});
  const { addNewContact } = useSelector(({ Foodbook }) => Foodbook.modals);

  useEffect(() => {
    if (
      addNewContact?.modalPayload?.otherUserData?.recieverId ||
      addNewContact?.modalPayload?.otherUserData?.contactId
    ) {
      setOtherUserData(addNewContact?.modalPayload?.otherUserData);
    }
  }, [addNewContact]);

  useEffect(() => {
    socket.on("new-contact", ({ _id, contactResult, senderId, message }) => {
      contactResult.lastMessage = {
        message,
        read: false,
        chatId: _id,
        senderId,
        createdAt: contactResult?.createdAt,
      };
      dispatch(updateContactsLocally(contactResult));
    });
    return () => {
      socket.off("new-contact");
    };
  }, [dispatch]);

  //below are streaming sockets

  useEffect(() => {
    socket.on("stream-inform-event", ({ hostId, hostName }) => {
      dispatch(
        setShowNewCallAlert({
          isVisible: true,
          modalPayload: { hostId, hostName },
        })
      );
    });
    return () => {
      socket.off("stream-inform-event");
    };
  }, [dispatch]);

  return (
    <div className="h-screen w-screen flex px-1 max-h-screen">
      <div className="w-1/6 ">
        <LeftPanel />
      </div>
      <div className="w-1/4 border-gray-100 border-solid border-l">
        <Contacts />
      </div>
      <div className="w-4/6 ">
        <Body otherUserData={otherUserData} />
      </div>
    </div>
  );
};

export default Messenger;
