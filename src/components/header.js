import React from "react";
import styled from "styled-components";
import logo from "../Assets/logo.jpg";
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Logo = styled.img`
  width: 130px;
  height: auto;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  margin-left: 15px;
  padding: 12px 1px;

  &:hover {
    border-bottom: 3px solid;
  }
  &:focus {
    border-bottom: 3px solid;
  }

  @media (max-width:450px) {
font-size:15px;
    }
`;

const Header = () => {
  const navigate = useNavigate();

  return (
    <Navbar fixed="top" expand="lg" style={{width:'100%', background:'#161513', display:'flex',alignItems:'center', justifyContent:'space-between', padding: '9px 20px'}}>
      <div id="left_nav">
      <Navbar.Brand href="#" style={{position:'fixed', top:'2px'}}><Logo src={logo} alt="Logo" /></Navbar.Brand>

      </div>
        <div id="right_nav">
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{background:'white'}} />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">

            <NavButton onClick={() => navigate('/home')}>Home</NavButton>
            <NavButton onClick={() => navigate('/projects')}>Projects</NavButton>
            <NavButton onClick={() => navigate('/resume')}>Resume</NavButton>
            <NavButton onClick={() => navigate('/contact-us')}>Contact Us</NavButton>

          </Nav>
          </Navbar.Collapse>

        </div>
    </Navbar>
  );
};

export default Header;
