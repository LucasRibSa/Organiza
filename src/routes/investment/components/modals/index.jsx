import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MeuComponente() {
  const [showModal, setShowModal] = useState(false);

  const abrirModal = () => {
    setShowModal(true);
  };

  const fecharModal = () => {
    setShowModal(false);
  };

  return (
    <div className="button">
      <Button variant="primary" onClick={abrirModal} className="button-email" type='button' >
        ADICIONAR INVESTIMENTO
      </Button>

      <Modal show={showModal} onHide={fecharModal}>
        <Modal.Header closeButton>
          <Modal.Title>Meu Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Conteúdo do meu modal aqui.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={fecharModal} className="button-email" type='button' >
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MeuComponente;
