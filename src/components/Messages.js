import React from "react";
import "../styles/Messages.css";

/*Ova komponenta prikazuje popis poruka koje se predaju kao parametar messages.
Svaka poruka se prikazuje unutar <div> elemenata s odgovarajućim klasama ovisno
o tome tko je korisnik poruke. */

function Messages({ whoami, messages }) {
  console.log(messages, whoami);
  return (
    <div className="messages">
      {messages.map((message, index) => (
        <div
          key={index + message}
          className={
            message.user === whoami.name
              ? "current-user message"
              : "other-user message"
          }
        >
          <div className={"message-sender"} style={{ color: message.color }}>
            {message.user} [{message.timestamp}]
          </div>
          <div className="message-text">{message.message}</div>
        </div>
      ))}
    </div>
  );
}

export default Messages;
