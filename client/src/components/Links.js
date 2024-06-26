import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import axios from '../axiosConfig';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Links = () => {
  const { currentUser } = useContext(UserContext);
  const [links, setLinks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLinks = async () => {
      if (!currentUser) {
        return;
      }
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/links', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setLinks(response.data);
      } catch (error) {
        console.error('Error fetching links', error);
      }
    };

    fetchLinks();
  }, [currentUser]);

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  const handleCreateLinkRedirect = () => {
    navigate('/newlink');
  };

  return (
    <Wrapper>
      <Header>Links</Header>
      {!currentUser ? (
        <NotLoggedIn>
          <Message>
            You are not logged in. Please log in to create and view links.
          </Message>
          <Button onClick={handleLoginRedirect}>Login</Button>
        </NotLoggedIn>
      ) : (
        <>
          {links.map((link) => (
            <Container key={link.short_url}>
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
            </Container>
          ))}
          <Button onClick={handleCreateLinkRedirect}>Create New Link</Button>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 20px;
  margin: 0 0 0 140px;
  height: 100vh;
  font-family: 'Nunito';
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

  &:hover {
    transform: translateY(-5px);
  }
`;

const Text = styled.div`
  margin-left: 20px;
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
  font-size: 24px;
  color: #333;
  margin-bottom: 5px;
`;

const ShortLink = styled.a`
  text-decoration: none;
  font-size: 18px;
  color: #007bff;
  margin-bottom: 5px;

  &:hover {
    color: #0056b3;
    text-decoration: underline;
  }
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
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
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

export default Links;
