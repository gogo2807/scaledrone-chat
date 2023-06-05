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
import "./styles";

/*Ova komponenta predstavlja srce aplikacije i sadrži logiku
za komunikaciju s ScaleDrone servisom, upravljanje članovima
sobe i prikazivanje poruka.*/

const { Scaledrone } = window;
const whoami = setMemberWithNameAndColor();
const scaleDroneChannelId = process.env.REACT_APP_SCALEDRONE_CHANNEL_ID;
const scaleDroneRoom = process.env.REACT_APP_SCALEDRONE_ROOM;

function App() {
  const [drone, setDrone] = useState(null);
  const [members, setMembers] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    //console.log(scaleDroneChannelId);
    const initializeDrone = () => {
      const newDrone = new Scaledrone(scaleDroneChannelId, {
        data: whoami,
      });
      setDrone(newDrone);

      console.log("Successfully connected to Scaledrone");
      // need to put observable- before name of room for subscriptions to work
      const room = newDrone.subscribe(scaleDroneRoom);
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
      room: scaleDroneRoom,
      message: message,
    });
    console.log(drone, message);
  };
  const membersCount = members ? members.length : 0;

  return (
    <div>
      <div>
        <h1 className="chat-header">Soba za priču</h1>
      </div>
      <MemberCount count={membersCount} />
      <MemberList members={members} />
      <Messages
        whoami={whoami}
        messages={messages}
        getRandomName={getRandomName}
        getRandomColor={getRandomColor}
      />
      <MessageForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
