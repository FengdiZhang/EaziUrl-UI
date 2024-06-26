import React, { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../context/UserContext';

const Profile = () => {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    return (
      <Wrapper>
        <Message>
          You are not logged in. Please log in to view your profile.
        </Message>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Header>Profile</Header>
      <Container>
        <Text>
          <Username>Hi, {currentUser.username}</Username>
        </Text>
      </Container>
    </Wrapper>
  );
};

const Username = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 5px;
`;

const Wrapper = styled.div`
  padding: 20px;
  margin: 0 0 0 140px;
  height: 100vh;
  font-family: 'Nunito';
  & h1 {
    border-bottom: 2px solid #e1e3e1;
  }
`;

const Header = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  color: #333;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #e1e3e1;
  border-radius: 10px;
  padding: 20px;
  background-color: #f4f6fa;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

const Message = styled.p`
  font-size: 18px;
  color: #666;
  margin-top: 20px;
`;

export default Profile;
