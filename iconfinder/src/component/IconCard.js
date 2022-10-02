import Modal from "react-modal";
import React, { useState } from "react";

function IconCard(props) {
  const customStyles = {
    content: {
      top: "50%",
      left: "45%",
      right: "auto",
      bottom: "auto",
      paddingleft: "150px",
      paddingright: "150px",
      transform: "translate(50%,-50%)",
      background: "#252424",
      color: "#fff",
    },
  };
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(false);
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      ></Modal>
      {props.premium ? (
        <div>
          <h3>This is Premium</h3>
          <ul>
            <li>1 Credit Needed</li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default IconCard;
