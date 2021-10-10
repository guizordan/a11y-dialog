import React from "react";
import "./App.css";

export default function Dialog({ onClose = () => {} }) {
  return (
    <div className="dialog-container">
      <div className="dialog" role="dialog">
        <div className="dialog-header">
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="close-dialog"
          >
            <div className="ico-times" role="img"></div>
          </button>
        </div>
        <div className="dialog-content">
          <p>Ei! Voce que esta lendo. Tenha um otimo dia!</p>
        </div>
        <div className="dialog-footer">
          <button className="cancel" onClick={onClose}>
            Cancelar
          </button>
          <button className="confirm" onClick={onClose}>
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}
