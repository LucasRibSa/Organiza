import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom'
import * as S from './styled'

export const App = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <Navbar.Brand href="#home">
        <img
              src="/logo_transparent-rd.png"
              width="65"
              height="40"
              className="d-inline-block align-top"
              alt="Organiza logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <S.NavLink className="nav-link" to={`/organiza/dashboard`}>Painel</S.NavLink>
            <S.NavLink className="nav-link" to={`/organiza/income-and-expense`}>Receita</S.NavLink>
            <S.NavLink className="nav-link" to={`/organiza/investment`}>Investimento</S.NavLink>
            <S.NavLink className="nav-link" to={`/organiza/budget`}>Orçamento</S.NavLink>
            <S.NavLink className="nav-link" to={`/organiza/notification`}>Notificações</S.NavLink>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  )
}
