import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function MeuComponente() {
  const [showModal, setShowModal] = useState(false);

  const abrirModal = () => {
    setShowModal(true);
  };

  const fecharModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const tipo = formData.get("tipo");
    const valor = formData.get("valor");
    const instituicao = formData.get("instituicao");
    const vencimento = formData.get("vencimento");

    console.log("Tipo:", tipo);
    console.log("Valor:", valor);
    console.log("Instituição:", instituicao);
    console.log("Vencimento:", vencimento);
  };

  return (
    <div className="button">
      <Button
        variant="primary"
        onClick={abrirModal}
        className="button-green"
        type="button"
      >
        ADICIONAR INVESTIMENTO
      </Button>

      <Modal show={showModal} onHide={fecharModal} className="background-color">
        <Modal.Header closeButton>
          <Modal.Title className="cor-fonte">
            Adicionar Investimento
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="centro cor-fonte">
          <Form onSubmit={handleSubmit} >
            <Form.Group controlId="tipo">
              <Form.Label>Tipo</Form.Label>
              <Form.Control type="text" name="tipo" placeholder="SELECIONE O INVESTIMENTO" required />
            </Form.Group>
            <Form.Group controlId="valor">
              <Form.Label className="labels-block">Valor</Form.Label>
              <Form.Control type="number" name="valor" placeholder="INVESTIMENTO EM R$" required />
            </Form.Group>
            <Form.Group controlId="instituicao">
              <Form.Label>Instituição</Form.Label>
              <Form.Control type="text" name="instituicao" placeholder="NOME DA INSTITUIÇÃO" required />
            </Form.Group>
            <Form.Group controlId="vencimento">
              <Form.Label >Vencimento</Form.Label>
              <Form.Control className="form-label" type="date" name="vencimento" placeholder="DIA/ANO/MES" required />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="centro">
          <Button
            variant="secondary"
            onClick={fecharModal}
            className="button-green"
            type="button"
          >
            Fechar
          </Button>
          <Button variant="primary" type="submit" className="button-green">
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MeuComponente;
