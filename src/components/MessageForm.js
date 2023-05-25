import React, { useState } from "react";

function MessageForm({ onSubmit }) {
  const [message, setMessage] = useState("");
  const onChange = (event) => setMessage(event.target.value);
  return (
    <>
      <input
        className="message-form__input"
        placeholder="Type a message..."
        type="text"
        onChange={onChange}
      />
      <button
        className="message-form__button"
        onClick={() => onSubmit(message)}
      >
        SEND MESSAGE
      </button>
    </>
  );
}

export default MessageForm;
