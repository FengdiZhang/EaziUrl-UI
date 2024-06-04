import React from 'react';
import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { GoHome } from 'react-icons/go';
import { GoLink } from 'react-icons/go';
import { GoPerson } from 'react-icons/go';
import { GoGraph } from 'react-icons/go';
const Sidebar = () => {
  return (
    <Wrapper>
      <Logo src="/photos/logo2.png" alt="Logo" />
      <Container>
        <NavigationLink to="/">
          <Icon>
            <GoHome />
          </Icon>
          <p>Home</p>
        </NavigationLink>

        <NavigationLink to="/links">
          <Icon>
            <GoLink />
          </Icon>
          <p>Link</p>
        </NavigationLink>
        <NavigationLink to="/analytics">
          <Icon>
            <GoGraph />
          </Icon>
          <p>Analytics</p>
        </NavigationLink>
        <NavigationLink to="/profile">
          <Icon>
            <GoPerson />
          </Icon>
          <p>Profile</p>
        </NavigationLink>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* border-right: 2px solid #e1e3e1; */
  background-color: #f4f6fa;
  margin: 0 25px 0 5px;
  width: 140px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;
const Loading = keyframes`
  from {
    transform:rotate(0deg)
  }
  to {
    transform:rotate(360deg)
  }
`;
const Logo = styled.img`
  animation: ${Loading} 2s linear infinite;
  padding: 15px 5px;
  margin: 0 0 0 10px;
  width: 60px;
  height: 60px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Icon = styled.div`
  padding: 3px 0;
  transition: color 0.3s;
`;
const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  margin: 10px 10px 10px 0;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  width: 80%;
  transition:
    background-color 0.3s,
    color 0.3s;

  &.active {
    background-color: #688ca1;
    color: white;
    /* border-left: 2px solid #2a4547; */

    & > ${Icon} {
      color: white;
    }

    & > p {
      color: white;
    }
  }

  &:hover {
    background-color: #e6f7ff;
    color: #007bff;

    & > ${Icon} {
      color: #007bff;
    }

    & > p {
      color: #007bff;
    }
  }

  & p {
    font-weight: 400;
    font-size: 18px;
    font-family: 'Gruppo', sans-serif;
    margin: 0 0 0 15px;
    padding: 0 0 5px 0;
  }
`;

export default Sidebar;
