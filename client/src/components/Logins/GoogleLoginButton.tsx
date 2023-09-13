// GoogleLoginButton.tsx

import React from 'react';

interface Props {
  backendURL: string;
}

const GoogleLoginButton: React.FC<Props> = ({ backendURL }) => {
  const handleLoginClick = () => {
    window.location.href = `${backendURL}/oauth2/authorization/google`;
  };

  return (
    <button onClick={handleLoginClick}>
      Login with Google
    </button>
  );
}

export default GoogleLoginButton;


// 토큰 저장 로직

// const authToken = response.headers["authorization"];
// console.log(authToken);

// const refreshToken = response.headers["refresh"];

// // 로그인 상태로 만들기
// dispatch(setLoginState());

// // 토큰들을 로컬 스토리지에 저장
// if (authToken) localStorage.setItem("authToken", authToken);
// if (refreshToken) localStorage.setItem("refreshToken", refreshToken);