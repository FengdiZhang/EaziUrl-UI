import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../context/UserContext';

const Dashboard = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('currentUser'));

    if (!user || !token) {
      navigate('/login');
    }
  }, [navigate]);

  const handleGoHome = () => {
    navigate('/');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    navigate('/login');
  };

  if (!currentUser) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <Content>
        <Title>{currentUser.username}</Title>
        <WelcomeText>Welcome to EaziUrl!</WelcomeText>
        <Button onClick={handleGoHome}>Try it now!</Button>
        <Button onClick={handleLogout}>Logout</Button>
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
  background-color: #a4d4da;
  color: #fff;
  cursor: pointer;
  margin: 10px;

  &:hover {
    background-color: #435541;
  }
`;

export default Dashboard;
