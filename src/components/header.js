import React from "react";
import styled from "styled-components";
import logo from "../Assets/logo.jpg";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 10px 80px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
`;

const Logo = styled.img`
  width: 130px;
  height: auto;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  margin-left: 15px;
  padding: 15px 1px;

  &:hover {
    border-bottom: 3px solid;
  }
  &:focus {
    border-bottom: 3px solid;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo" />
      <RightSection>
        <NavButton>Home</NavButton>
        <NavButton>Projects</NavButton>
        <NavButton>Resume</NavButton>
        <NavButton>Contact</NavButton>
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;
