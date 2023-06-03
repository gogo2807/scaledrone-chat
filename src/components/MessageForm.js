import React, { useState, useRef, useEffect } from "react";
import "../styles/MessageForm.css";

function MessageForm({ onSubmit }) {
  const [message, setMessage] = useState("");
  const inputRef = useRef(null);
  const onChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit(message);
    setMessage("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  useEffect(() => {
    const input = inputRef.current;
    if (input) {
      input.style.height = "auto";
      input.style.height = `${input.scrollHeight}px`;
    }
  }, [message]);

  return (
    <>
      <textarea
        ref={inputRef}
        className="message-form__input"
        placeholder="Unesi poruku..."
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
