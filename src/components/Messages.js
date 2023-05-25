import React from "react";

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
