import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../../../Components/sass/signup.scss"


function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setNome("");
    setEmail("");
    setSenha("");
    setConfirmarSenha("");
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <div class="nome">
          <Form.Group controlId="nome">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </Form.Group>
        </div>
        <div className="email">
        <Form.Group controlId="email">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        </div>
        <div className="senha">
        <Form.Group controlId="senha">
          <Form.Label>Sua senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="**********"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </Form.Group>
        </div>
        <div className="senha">
        <Form.Group controlId="senha">
          <Form.Label>Confirme a senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="**********"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            required
          />
        </Form.Group>
        </div>
        <Button variant="primary" type="submit">
          Cadastrar-se
        </Button>
      </Form>
    </div>
  );
}

export default Cadastro;
