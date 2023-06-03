import React, { useState } from "react";
import "../styles/MessageForm.css";

function MessageForm({ onSubmit }) {
  const [message, setMessage] = useState("");
  const onChange = (event) => setMessage(event.target.value);
  const handleSubmit = () => {
    onSubmit(message);
    setMessage("");
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <>
      <input
        className="message-form__input"
        placeholder="Unesi poruku..."
        type="text"
        value={message}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      <button className="message-form__button" onClick={handleSubmit}>
        POŠALJI PORUKU
      </button>
    </>
  );
}

export default MessageForm;
