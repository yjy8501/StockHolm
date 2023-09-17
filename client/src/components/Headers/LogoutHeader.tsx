import React from "react";
import styled from "styled-components";
import StockHolmLogo from "../../asset/images/StockHolmLogo.png";
import { useNavigate } from "react-router-dom";
import StockSearchComponent from './stockSearchComponent';

const LogoutHeader: React.FC<LogoutHeaderProps> = ({ onLoginClick }) => {
  const navigate = useNavigate();

  const loginText = "로그인";  // 로그인 버튼 텍스트

  // 로고 클릭 핸들러
  const handleLogoClick = () => {
    navigate("/");  // 메인 페이지로 이동
  };

  // 컴포넌트 렌더링
  return (
    <HeaderContainer>
      <LogoButton onClick={handleLogoClick}>
        <LogoImage src={StockHolmLogo} />
      </LogoButton>
      <StockSearchComponent/>
      <LoginButton onClick={onLoginClick}>{loginText}</LoginButton>
    </HeaderContainer>
  );
};

export default LogoutHeader;

// 프롭스 타입 정의
interface LogoutHeaderProps {
  onLoginClick: () => void;
}

// 스타일드 컴포넌트 정의
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  border-bottom: 1px solid #2F4F4F; 
  width: 100%;
  height: 51px;
`;

const LogoButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  &:focus {
    outline: none;
  }
  &:hover img {
    filter: brightness(0.97);  // darken the logo image slightly on hover
  }
`;

const LogoImage = styled.img`
  height: 40px;
  width: auto;
`;

const LoginButton = styled.button`
  background-color: #fff;
  color: #2F4F4F; 
  border: 1px solid #2F4F4F; 
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #f2f2f2; 
  }
`;