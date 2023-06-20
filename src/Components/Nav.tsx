import React from 'react';
import { styled } from 'styled-components';
import logo from '../henesys-logo.png';

const Nav = () => {
  return (
    <div>
      <TopNavContainer>
        <LogoContainer>
          <Logo src={logo}></Logo>
        </LogoContainer>

        <LogInBtn>로그인</LogInBtn>
      </TopNavContainer>

      <SideNavContainer>
        <NavigateContainer>
          <HomeBtn>홈</HomeBtn>
          <SearchBtn>프로젝트/스터디찾기</SearchBtn>
          <LoungeBtn>라운지</LoungeBtn>
          <MyPageBtn>마이페이지</MyPageBtn>
        </NavigateContainer>

        <InfoContainer>
          <Info1>헤네시스 소개</Info1>
          <Info2>이용약관 · 개인정보처리방침</Info2>
          <Info3>© 2023 Team-AlwaysAwake</Info3>
        </InfoContainer>
      </SideNavContainer>
    </div>
  );
};

const TopNavContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0 20px;
  border-bottom: 1px solid#ced3d7;
`;

const LogoContainer = styled.div`
  cursor: pointer;
  display: flex;
  height: 65px;
`;

const Logo = styled.img``;

const LogInBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 50px;
  background-color: #ffde59;
  color: #004aad;
  font-weight: 900;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    transition: 0.5s;
    background-color: #f9bc28;
  }
`;

const SideNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid#ced3d7;
  padding: 16px;
  width: 200px;
  height: calc(100vh - 80px);
`;
const NavigateContainer = styled.div``;
const HomeBtn = styled.div`
  padding: 10px 12px 10px 12px;
  border-radius: 10px;
  background-color: #fafabe;
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 17px;
  cursor: pointer;
  &:hover {
    background-color: #fafad2;
  }
`;

const SearchBtn = styled.div`
  padding: 10px 12px 10px 12px;
  border-radius: 10px;
  color: #586672;
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 17px;
  cursor: pointer;
  &:hover {
    background-color: #fafad2;
  }
`;

const LoungeBtn = styled.div`
  padding: 10px 12px 10px 12px;
  border-radius: 10px;
  color: #586672;
  margin-bottom: 30px;
  font-weight: 700;
  font-size: 17px;
  cursor: pointer;
  &:hover {
    background-color: #fafad2;
  }
`;

const MyPageBtn = styled.div`
  padding: 10px 12px 10px 12px;
  border-radius: 10px;
  color: #586672;
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 17px;
  cursor: pointer;
  &:hover {
    background-color: #fafad2;
  }
`;

const InfoContainer = styled.div`
  font-size: 14px;
  color: #586672;
`;

const Info1 = styled.div`
  margin-bottom: 5px;
  cursor: pointer;
`;
const Info2 = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
`;
const Info3 = styled.div`
  font-size: 12px;
`;

export default Nav;
