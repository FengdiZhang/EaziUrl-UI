import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    setDropdownOpen(false);
  };

  return (
    <Wrapper>
      <Text>
        EaziUrl : <span>Get custom links and a complimentary domain.</span>
      </Text>
      <Container1>
        {currentUser ? (
          <UserContainer onClick={() => setDropdownOpen(!dropdownOpen)}>
            <FaUserCircle size={24} />
            <Username>{currentUser.username}</Username>
            {dropdownOpen && (
              <DropdownMenu>
                <DropdownItem to="/links">My Links</DropdownItem>
                <DropdownItem to="/profile">Profile</DropdownItem>
                <DropdownItem as="div" onClick={handleLogout}>
                  Logout
                </DropdownItem>
              </DropdownMenu>
            )}
          </UserContainer>
        ) : (
          <NavigationLink to="/login">✨ Login</NavigationLink>
        )}
      </Container1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 0 0 145px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Text = styled.p`
  margin: 20px;
  padding: 0 0 0 10px;
  font-family: 'Pacifico', sans-serif;
  font-size: 30px;

  & span {
    font-family: 'Anton';
  }
`;

const Container1 = styled.div`
  margin: 10px 0;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 16px;
  border-radius: 10px;
`;

const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: #3d808f;
  font-weight: bold;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

const Username = styled.span`
  margin-left: 8px;
  font-weight: bold;
  color: #333;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  overflow: hidden;
  z-index: 1;
  width: 160px;
`;

const DropdownItem = styled(NavLink)`
  display: block;
  padding: 10px 15px;
  text-decoration: none;
  color: #333;
  cursor: pointer;
  font-family: 'Nunito', sans-serif;

  &:hover {
    background-color: #f0f4f8;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #ddd;
  }
`;

export default Header;
