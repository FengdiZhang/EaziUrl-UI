import React, { useState } from 'react';
import axios from '../axiosConfig';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const validateUsername = (username) => {
    if (username.length < 3 || username.length > 20) {
      return 'Username must be between 3 and 20 characters';
    }
    return '';
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return 'Invalid email address';
    }
    return '';
  };

  const validatePassword = (password) => {
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordPattern.test(password)) {
      return 'Password must be at least 8 characters long and contain both letters and numbers';
    }
    return '';
  };

  const handleUsernameChange = (e) => {
    const newUsername = e.target.value;
    setUsername(newUsername);
    setUsernameError(validateUsername(newUsername));
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailError(validateEmail(newEmail));
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordError(validatePassword(newPassword));
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    const usernameValidationError = validateUsername(username);
    const emailValidationError = validateEmail(email);
    const passwordValidationError = validatePassword(password);

    if (
      usernameValidationError ||
      emailValidationError ||
      passwordValidationError
    ) {
      setUsernameError(usernameValidationError);
      setEmailError(emailValidationError);
      setPasswordError(passwordValidationError);
      return;
    }

    try {
      await axios.post('/auth/register', {
        username,
        email,
        password,
      });
      navigate('/login');
    } catch (error) {
      if (error.response && error.response.data.detail) {
        setError(error.response.data.detail);
      } else {
        setError('Registration failed. Please try again.');
      }
    }
  };

  return (
    <Wrapper>
      <FormContainer>
        <Title>Register</Title>
        <Subtitle>
          Already have an account?{' '}
          <StyledNavLink to="/login">Log in</StyledNavLink>
        </Subtitle>
        {error && <Error>{error}</Error>}
        <Form onSubmit={handleRegister}>
          <FormGroup>
            <Label>Username:</Label>
            <Input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              required
            />
            {usernameError && <Error>{usernameError}</Error>}
          </FormGroup>
          <FormGroup>
            <Label>Email:</Label>
            <Input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {emailError && <Error>{emailError}</Error>}
          </FormGroup>
          <FormGroup>
            <Label>Password:</Label>
            <Input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            {passwordError && <Error>{passwordError}</Error>}
          </FormGroup>
          <Button type="submit">Register</Button>
        </Form>
      </FormContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
const StyledNavLink = styled(NavLink)`
  color: #a4d4da;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;
const Subtitle = styled.p`
  margin-bottom: 20px;
  color: #666;
`;
const Title = styled.h2`
  margin-bottom: 10px;
  color: #a4d4da;
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

  &:focus {
    color: black;
    border-color: #a4d4da;
    outline: none;
    box-shadow: 0 0 5px #a4d4da;
  }
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #a4d4da;
  color: #fff;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #a4d4da;
  }
`;

const Error = styled.p`
  color: red;
  margin-bottom: 15px;
`;

export default Register;
