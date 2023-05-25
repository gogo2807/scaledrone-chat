import React, { useState, useEffect } from "react";
import MemberCount from "./components/MemberCount";
import MemberList from "./components/MemberList";
import Messages from "./components/Messages";
import MessageForm from "./components/MessageForm";
import {
  getRandomName,
  getRandomColor,
  setMemberWithNameAndColor,
} from "./utils/utils";
import "./App.css";
const { Scaledrone } = window;

const whoami = setMemberWithNameAndColor();
function App() {
  const [drone, setDrone] = useState(null);
  const [members, setMembers] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const initializeDrone = () => {
      const newDrone = new Scaledrone("cnWm9nv2npbI9inM", {
        data: whoami,
      });
      setDrone(newDrone);

      console.log("Successfully connected to Scaledrone");
      // need to put observable- before name of room for subscriptions to work
      const room = newDrone.subscribe("observable-soba");
      room.on("message", (message) => {
        // missing 000 at the end of timestamp thus multiply with 1000
        const date = new Date(message.timestamp * 1000);
        setMessages((messages) => [
          ...messages,
          {
            message: message.data,
            timestamp:
              date.toLocaleDateString() + " " + date.toLocaleTimeString(),
            user: message.member.clientData.name,
            color: message.member.clientData.color,
          },
        ]);
        // Received a message sent to the room
      });

      // on client connect
      room.on("members", (members) => {
        // Check the received members
        console.log("Received members in App:", members);

        setMembers(members);
      });

      // this is used when new member connects
      room.on("member_join", (member) => {
        setMembers((prevMembers) => [...prevMembers, member]);
      });
      // used when member leaves
      room.on("member_leave", (member) => {
        setMembers((prevMembers) =>
          prevMembers.filter((prevMember) => prevMember.id !== member.id)
        );
      });

      newDrone.on("close", () => {
        console.log("Connection was closed");
      });
    };

    initializeDrone();
  }, []);
  const handleSubmit = (message) => {
    drone.publish({
      room: "observable-soba",
      message: message,
    });
    console.log(drone, message);
  };
  const membersCount = members ? members.length : 0;
  return (
    <div>
      <MemberCount count={membersCount} />
      <MemberList members={members} />
      <Messages
        whoami={whoami}
        messages={messages}
        getRandomName={getRandomName}
      />
      <MessageForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
