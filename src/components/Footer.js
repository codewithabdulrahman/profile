import React from "react";
import styled from "styled-components";
import logo from "../Assets/logo1.PNG"
import { useNavigate } from 'react-router-dom';

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
  border-bottom: 3px solid #161513;
  font-size:14px;

  &:hover {
    border-bottom: 3px solid;
  }
  &:focus {
    border-bottom: 3px solid;
  }

  @media (max-width: 450px) {
    font-size: 15px;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 3px;
  background: #161513;
`;

const FooterNav = styled.div`
  width: 100%;
  background: #161513;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 20px;
  position: relative;
  bottom: 0;
`;

const FooterText = styled.div`
  color: white;
  font-size: 14px;
  text-align: center;
  margin-top: 5px;
  font-size:12px;
`;

const BottomFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0px 10px;
    background: #413F39;
    `;

const LeftNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RightNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      <Line />
      <FooterNav>
        <LeftNav>
          <Logo src={logo} alt="Logo" />
        </LeftNav>
        <RightNav>
          <NavButtons>
            <NavButton onClick={() => navigate('/projects')}>Projects</NavButton>
            <NavButton onClick={() => navigate('/resume')}>Resume</NavButton>
            <NavButton onClick={() => navigate('/contact-us')}>Contact Us</NavButton>
          </NavButtons>
        </RightNav>
      </FooterNav>
      <BottomFooter>
        <FooterText>&copy 2023 barkack All rights reserved</FooterText>
        <FooterText>Terms and Conditions</FooterText>
      </BottomFooter>
      <Line />
    </>
  );
};

export default Footer;
