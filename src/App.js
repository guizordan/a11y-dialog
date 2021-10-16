import React, { useRef, useState } from "react";
import Dialog from "./components/Dialog";

function App() {
  const [dialogOpened, setDialogOpened] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const registerUserButton = useRef(null);

  function openDialog() {
    setDialogOpened(true);
  }

  function closeDialog() {
    setDialogOpened(false);
    // registerUserButton.current?.focus();
  }

  function onUserCreated(newUser) {
    setCurrentUser(newUser);
  }

  function renderDialog() {
    if (dialogOpened) {
      return <Dialog onClose={closeDialog} onUserCreated={onUserCreated} />;
    }
  }

  function renderCurrentUser() {
    if (currentUser.length) {
      return (
        <p
        // role="note"
        // tabIndex="0"
        >
          Usuário cadastrado: <strong>{currentUser}</strong>
        </p>
      );
    }
  }

  return (
    <div className="App">
      <div className="App-content">
        <button
          ref={registerUserButton}
          className="open-dialog"
          onClick={openDialog}
        >
          Cadastrar usuário
        </button>
        {renderCurrentUser()}
      </div>
      {renderDialog()}
    </div>
  );
}

export default App;
