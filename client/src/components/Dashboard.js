import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Wrapper>
      <Content>
        <Title>Welcome</Title>
        <WelcomeText>Welcome to EaziUrl!</WelcomeText>
        <Button onClick={handleGoHome}>Try it now!</Button>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-left: 10px;
  /* background: linear-gradient(to right, #ffffff, #add8e6); */
`;

const Content = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

const WelcomeText = styled.p`
  margin-bottom: 20px;
  color: #666;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #6a11cb;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #2575fc;
  }
`;

export default Dashboard;
