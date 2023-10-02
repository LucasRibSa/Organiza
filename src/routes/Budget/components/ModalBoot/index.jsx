import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FormBoot } from './Form';

export const ModalBoot = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title >
          Adicionar Meta
        </Modal.Title>
        <p>Campos obrigatórios possuem o símbolo *</p>
      </Modal.Header>
      <Modal.Body>
       <FormBoot />
      </Modal.Body>
    </Modal>
  );
}