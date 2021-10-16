import React, { useEffect, useRef, useState } from "react";
import Input from "./Input";

export default function Dialog({
  onClose = () => {},
  onUserCreated = () => {},
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const closeButtonRef = useRef(null);
  const registerButtonRef = useRef(null);

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
    if (event.key === "Tab" && !event.shiftKey) {
      event.preventDefault();
      closeButtonRef.current?.focus();
    }
  }

  function onCloseButtonKeyDown(event) {
    if (event.key === "Tab" && event.shiftKey) {
      event.preventDefault();
      registerButtonRef.current?.focus();
    }
  }

  return (
    <div
      // onKeyDown={onKeyDown}
      className="dialog-container"
    >
      <div
        // autoFocus
        // tabIndex="0"
        // role="dialog"
        // aria-modal="true"
        // aria-labelledby="register-user-label"
        className="dialog"
      >
        <div className="dialog-header">
          <h1 id="register-user-label">Cadastrar Usuário</h1>
          <button
            // onKeyDown={onCloseButtonKeyDown}
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
            value={lastName}
            id="last-name"
            onChange={changeLastName}
            label="Sobrenome"
            name="lastName"
          />
        </div>
        <div className="dialog-footer">
          <button
            ref={registerButtonRef}
            className="confirm"
            onClick={createUser}
            // onKeyDown={onRegisterButtonKeyDown}
          >
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
}
