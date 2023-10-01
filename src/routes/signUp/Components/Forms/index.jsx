import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Logo from "../Logo";

export const Forms = () => {
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
      <Logo/> 
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
        <div className="e-mail">
        <Form.Group className="mb-2" controlId="email">
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
        <div className="password">
        <Form.Group className="mb-2" controlId="senha">
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
        <Form.Group className="mb-2" controlId="senha">
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