import React from "react";
import './css/modal.css'

const Modal = ({ handleClose, show }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
            <p>This asset is a giveaway to you from our side :)</p>
            <button type="button" onClick={handleClose}>
            Close
            </button>
        </section>
      </div>
    );
  }

  export default Modal;