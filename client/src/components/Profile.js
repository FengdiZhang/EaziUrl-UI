import React, { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    navigate('/login');
  };

  if (!currentUser) {
    return (
      <Wrapper2>
        <NotLoggedIn>
          <LargeLogo src="/photos/logo2.png" alt="EaziUrl Logo" />
          <Message>
            You are not logged in. Please log in to view your profile.
          </Message>
          <Button onClick={() => navigate('/login')}>Login</Button>
        </NotLoggedIn>
      </Wrapper2>
    );
  }

  return (
    <Wrapper>
      <Container>
        <Text>
          <Username>Hi, {currentUser.username}</Username>
          <SectionTitle>Welcome</SectionTitle>
          <Paragraph>
            Use the buttons below to create new links or view your existing
            links
          </Paragraph>
          <Buttons>
            <StyledButton onClick={() => navigate('/newlink')}>
              Create New Link
            </StyledButton>
            <StyledButton onClick={() => navigate('/links')}>
              View My Links
            </StyledButton>
            <StyledButton onClick={handleLogout}>Logout</StyledButton>
          </Buttons>
        </Text>
      </Container>
    </Wrapper>
  );
};

const NotLoggedIn = styled.div`
  display: flex;
  border: 2px solid #e1e3e1;
  border-radius: 10px;
  padding: 40px 60px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #f0f0f0, #d9d9d9);
`;

const Username = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 5px;
`;

const Wrapper2 = styled.div`
  padding: 20px;
  margin: 0 0 0 140px;
  height: 100vh;
  font-family: 'Nunito';
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 0 20px;
  margin: 60px 0 0 140px;
  height: 100vh;
  font-family: 'Nunito';
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #e1e3e1;
  border-radius: 10px;
  padding: 20px;
  background-color: #fff;
  width: 60%;
  margin: 0 auto;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const LargeLogo = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
`;

const Message = styled.p`
  font-size: 18px;
  color: #666;
  margin-top: 20px;
  text-align: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #435541;
  color: #fff;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #435587;
  }
`;

const StyledButton = styled(Button)`
  width: 80%;
  margin-bottom: 10px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  color: #333;
  margin: 20px 0 10px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #666;
  text-align: center;
  width: 80%;
  margin-bottom: 20px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export default Profile;
