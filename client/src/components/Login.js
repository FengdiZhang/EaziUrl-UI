import React, { useState, useContext } from 'react';
import axios from '../axiosConfig';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        '/auth/token',
        new URLSearchParams({
          username,
          password,
        })
      );
      const user = { username };
      localStorage.setItem('token', response.data.access_token);
      localStorage.setItem('currentUser', JSON.stringify(user));
      setCurrentUser(user);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error logging in', error);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = 'http://127.0.0.1:8000/auth/login';
  };

  return (
    <Wrapper>
      <FormContainer>
        <Title>Login</Title>
        <Subtitle>
          Don't have an account?{' '}
          <StyledNavLink to="/register">Sign up</StyledNavLink>
        </Subtitle>
        <Form onSubmit={handleLogin}>
          <FormGroup>
            <Label>Username:</Label>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Password:</Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <ButtonContainer>
            <Button type="submit">Login</Button>
          </ButtonContainer>
        </Form>
        <Separator>
          <span>or</span>
        </Separator>
        <ButtonContainer>
          <OAuthButton onClick={handleGoogleLogin}>
            <FcGoogle size={20} style={{ marginRight: '10px' }} />
            Login with Google
          </OAuthButton>
        </ButtonContainer>
      </FormContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: 'Nunito';
`;

const FormContainer = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 320px;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 10px;
  color: #a4d4da;
`;

const Subtitle = styled.p`
  margin-bottom: 20px;
  color: #666;
`;

const StyledNavLink = styled(NavLink)`
  color: #a4d4da;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
  text-align: left;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #a4d4da;
  color: #fff;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #435541;
  }
`;

const Separator = styled.div`
  margin: 20px 0;
  text-align: center;
  border-bottom: 1px solid #ccc;
  line-height: 0.1em;
  margin: 20px 0;
  &::before {
    content: '';
    display: block;
    height: 1px;
    background-color: #ccc;
  }
  span {
    background: #fff;
    padding: 0 10px;
    color: #666;
  }
`;

const OAuthButton = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #4285f4;
  color: #fff;
  cursor: pointer;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #357ae8;
  }
`;

export default Login;
