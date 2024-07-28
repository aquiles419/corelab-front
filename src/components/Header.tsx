import React from "react";
import styled from "styled-components";
import logo from "../assets/icon-header.png";
import { FaSearch } from "react-icons/fa";

const HeaderContainer = styled.header`
  width: 100%;
  max-width: 1417.11px;
  height: 57px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  opacity: 1;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
  }
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  background-size: cover;
`;

const Name = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-color: red;
  line-height: 19px;
  margin: 0;
  color: #455a64;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
`;

const SearchInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 530.17px;
  height: 28px;
  border-radius: 3px 0px 0px 0px;
  border: 1px solid #ccc;
  box-sizing: border-box;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 4px 8px;
  border: none;
  outline: none;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  font-size: 13px;
  line-height: 15.73px;
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 8px;
  color: #aaa;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo" />
      <Name>CoreNotes</Name>
      <SearchContainer>
        <SearchInputWrapper>
          <SearchInput type="text" placeholder="Pesquisar notas" />
          <SearchIcon />
        </SearchInputWrapper>
      </SearchContainer>
    </HeaderContainer>
  );
};

export default Header;
