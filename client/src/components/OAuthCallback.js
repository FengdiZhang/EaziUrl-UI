import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const OAuthCallback = () => {
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState(null);
  const [token, setToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  useEffect(() => {
    const handleOAuthCallback = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const usernameParam = urlParams.get('username');
      const tokenParam = urlParams.get('token');
      const refreshTokenParam = urlParams.get('refresh_token');

      if (usernameParam && tokenParam && refreshTokenParam) {
        setUsername(usernameParam);
        setToken(tokenParam);
        setRefreshToken(refreshTokenParam);
      } else {
        console.error('Missing username or token');
        navigate('/login');
      }
    };

    handleOAuthCallback();
  }, [navigate]);

  useEffect(() => {
    if (username && token && refreshToken) {
      const user = { username };
      localStorage.setItem('token', token);
      localStorage.setItem('refresh_token', refreshToken);
      localStorage.setItem('currentUser', JSON.stringify(user));
      setCurrentUser(user);
      navigate('/dashboard');
    }
  }, [username, token, refreshToken, navigate, setCurrentUser]);

  return <div>Loading...</div>;
};

export default OAuthCallback;
