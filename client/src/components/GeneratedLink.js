import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const GeneratedLink = () => {
  const location = useLocation();
  const { shortUrl } = location.state || { shortUrl: '' };

  return (
    <Wrapper>
      <Container>
        <Avatar src="/static/build/photos/logo2.png" alt="avatar" />
        <Text>
          <Title>Generated Short Link</Title>
          <ShortLink>this is your shortened url: {shortUrl}</ShortLink>
          <LongLink>Your original URL has been shortened.</LongLink>
        </Text>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 20px;
  margin: 0 0 0 140px;
  height: 100vh;
  font-family: 'Nunito';
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
  border: 2px solid #007bff;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 5px;
`;

const ShortLink = styled.p`
  font-size: 18px;
  color: #007bff;
  margin-bottom: 5px;
`;

const LongLink = styled.span`
  font-size: 14px;
  color: #666;
`;

export default GeneratedLink;
