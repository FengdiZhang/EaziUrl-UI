import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import axios from '../axiosConfig';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaCopy } from 'react-icons/fa';

const Links = () => {
  const { currentUser } = useContext(UserContext);
  const [links, setLinks] = useState([]);
  const [copiedLink, setCopiedLink] = useState(null);
  const navigate = useNavigate();

  const refreshAccessToken = async () => {
    try {
      const refreshToken = localStorage.getItem('refresh_token');
      const response = await axios.post('/refresh', {
        refresh_token: refreshToken,
      });
      localStorage.setItem('token', response.data.access_token);
    } catch (error) {
      console.error('Error refreshing access token', error);
      navigate('/login');
    }
  };

  useEffect(() => {
    const fetchLinks = async () => {
      if (!currentUser) {
        return;
      }
      try {
        const token = localStorage.getItem('token');
        const tokenExpiry = JSON.parse(atob(token.split('.')[1])).exp * 1000;
        if (Date.now() > tokenExpiry - 5 * 60 * 1000) {
          // Refresh token 5 minutes before expiry
          await refreshAccessToken();
        }
        const newToken = localStorage.getItem('token');
        const response = await axios.get('/api/links', {
          headers: {
            Authorization: `Bearer ${newToken}`,
          },
        });
        setLinks(response.data);
      } catch (error) {
        console.error('Error fetching links', error);
        if (error.response && error.response.status === 401) {
          navigate('/login');
        }
      }
    };

    fetchLinks();
  }, [currentUser, navigate]);

  useEffect(() => {
    const handleClickOutside = () => {
      setCopiedLink(null);
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleCreateLinkRedirect = () => {
    navigate('/newlink');
  };

  if (!currentUser) {
    return (
      <Wrapper>
        <NotLoggedIn>
          <LargeLogo src="/photos/logo2.png" alt="EaziUrl Logo" />
          <Message>
            You are not logged in. Please log in to view your links.
          </Message>
          <Button onClick={() => navigate('/login')}>Login</Button>
        </NotLoggedIn>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Header>Links</Header>
      {links.map((link) => (
        <Container key={link.short_url} onClick={(e) => e.stopPropagation()}>
          <LeftContainer>
            <Avatar src="/photos/logo2.png" alt="avatar" />
            <Text>
              <Title>{link.title || 'No Title'}</Title>
              <ShortLink
                href={link.long_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {`127.0.0.1:8000/api/${link.short_url}`}
              </ShortLink>
              <LongLink
                href={link.long_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.long_url}
              </LongLink>
            </Text>
          </LeftContainer>
          <CopyToClipboard
            text={`127.0.0.1:8000/api/${link.short_url}`}
            onCopy={() => setCopiedLink(link.short_url)}
          >
            <CopyButton onClick={(e) => e.stopPropagation()}>
              <FaCopy />
              <CopyText>
                {copiedLink === link.short_url ? 'Copied' : 'Copy'}
              </CopyText>
            </CopyButton>
          </CopyToClipboard>
        </Container>
      ))}
      <Button onClick={handleCreateLinkRedirect}>Create New Link</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 20px;
  margin: 0 0 0 140px;
  height: 100vh;
  font-family: 'Nunito';
`;

const LargeLogo = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
`;

const Header = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  color: #333;
  border-bottom: 2px solid #e1e3e1;
`;

const Container = styled.div`
  background-color: #f4f6fa;
  border-radius: 10px;
  margin-top: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  justify-content: space-between;

  &:hover {
    transform: translateY(-5px);
  }
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const Title = styled.h1`
  font-size: 20px;
  color: #333;
  margin-bottom: 5px;
`;

const ShortLink = styled.a`
  text-decoration: none;
  font-size: 18px;
  color: #719484;
  margin-bottom: 5px;

  &:hover {
    color: #435541;
    text-decoration: underline;
  }
`;

const CopyButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #666;
  font-size: 14px;
  background-color: #e1e3e1;
  padding: 5px 10px;
  border-radius: 4px;

  &:hover {
    color: #333;
    background-color: #d0d4d4;
  }
`;

const CopyText = styled.span`
  margin-left: 5px;
`;

const LongLink = styled.a`
  text-decoration: none;
  font-size: 14px;
  color: #666;

  &:hover {
    text-decoration: underline;
  }
`;

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

const Message = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  color: #666;
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
    background-color: #333;
  }
`;

export default Links;
