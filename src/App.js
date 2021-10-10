import React, { useState } from "react";
import Dialog from "./Dialog";

import "./App.css";

function App() {
  const [dialogOpened, setDialogOpened] = useState(false);

  function openDialog() {
    setDialogOpened(true);
  }

  function closeDialog() {
    setDialogOpened(false);
  }

  function renderDialog() {
    if (dialogOpened) {
      return <Dialog onClose={closeDialog} />;
    }
  }

  return (
    <div className="App">
      <div className="App-content">
        <button className="open-dialog" onClick={openDialog}>
          Abrir Modal
        </button>
      </div>
      {renderDialog()}
    </div>
  );
}

export default App;
