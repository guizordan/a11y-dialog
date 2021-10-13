import React, { useEffect, useRef, useState } from "react";
import Input from "./Input";

export default function Dialog({
  onClose = () => {},
  onUserCreated = () => {},
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const closeButtonRef = useRef(null);

  function changeFirstName(event) {
    setFirstName(event.target.value);
  }

  function changeLastName(event) {
    setLastName(event.target.value);
  }

  function createUser() {
    const newUser = firstName + " " + lastName;
    onUserCreated(newUser);
    onClose();
  }

  function onKeyDown(event) {
    if (event.key === "Escape") {
      onClose();
    }
  }

  function onRegisterButtonKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      closeButtonRef.current?.focus();
    }
  }

  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  return (
    <div onKeyDown={onKeyDown} className="dialog-container">
      <div className="dialog" role="dialog">
        <div className="dialog-header">
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Fechar"
            className="close-dialog"
          >
            <div className="ico-times" role="img"></div>
          </button>
        </div>
        <div className="dialog-content">
          <Input
            value={firstName}
            id="first-name"
            onChange={changeFirstName}
            label="Nome"
            name="firstName"
          />
          <Input
            id="first-name"
            value={lastName}
            onChange={changeLastName}
            label="Sobrenome"
            name="lastName"
          />
        </div>
        <div className="dialog-footer">
          <button
            type="submit"
            disabled={!firstName && !lastName}
            className="confirm"
            onClick={createUser}
            onKeyDown={onRegisterButtonKeyDown}
          >
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
}
