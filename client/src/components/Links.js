import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../axiosConfig';

const Links = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await axios.get('/api/links');
        setLinks(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error('Error fetching links', error);
      }
    };
    fetchLinks();
  }, []);

  return (
    <Wrapper>
      <Header>Links</Header>
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
              {`eaziurl.fz/${link.short_url}`}
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
  /* border: 2px solid #007bff; */
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

export default Links;
