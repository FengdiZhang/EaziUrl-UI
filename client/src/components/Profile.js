import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Profile = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  return (
    <Wrapper>
      <h1>Profile</h1>

      <Container>
        hi
        <Username>{currentUser.username}</Username>
      </Container>
    </Wrapper>
  );
};
const Avatar = styled.img``;
const Username = styled.span`
  margin-left: 8px;
  font-weight: bold;
  color: #333;
`;
const Wrapper = styled.div`
  padding: 0 0 0 20px;
  margin: 0 0 0 140px;
  height: 100vh;
  font-family: 'Nunito';
  & h1 {
    border-bottom: 2px solid #e1e3e1;
  }
`;
const Container = styled.div`
  border: 2px solid #e1e3e1;
  border-radius: 10px;
  margin-top: 10px;
  padding: 10px;
`;

export default Profile;
