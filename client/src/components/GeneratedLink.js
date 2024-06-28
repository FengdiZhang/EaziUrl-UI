import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaCopy } from 'react-icons/fa';

const GeneratedLink = () => {
  const location = useLocation();
  const { realUrl, title, longUrl } = location.state || {
    realUrl: '',
    title: '',
    longUrl: '',
  };

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleClickOutside = () => {
      setCopied(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleRedirect = (e) => {
    e.preventDefault();
    if (realUrl) {
      window.open(realUrl, '_blank');
    }
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Wrapper>
      <Container>
        <LeftContainer>
          <Avatar src="/photos/logo2.png" alt="Avatar" />
          <Text>
            <Title>{title}</Title>
            <ShortLink onClick={handleRedirect}>{realUrl}</ShortLink>
            <LongLink href={longUrl} target="_blank" rel="noopener noreferrer">
              {longUrl}
            </LongLink>
          </Text>
        </LeftContainer>
        <CopyToClipboard text={realUrl} onCopy={handleCopy}>
          <CopyButton onClick={(e) => e.stopPropagation()}>
            <FaCopy />
            <CopyText>{copied ? 'Copied' : 'Copy'}</CopyText>
          </CopyButton>
        </CopyToClipboard>
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
  justify-content: space-between;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
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
  font-size: 20px;
  color: #333;
  margin-bottom: 5px;
`;

const ShortLink = styled.button`
  background: none;
  border: none;
  color: #719484;
  cursor: pointer;
  text-decoration: underline;
  padding: 0;
  font-size: 18px;
  margin-bottom: 5px;
  text-align: left;

  &:hover {
    color: #435541;
    text-decoration: underline;
  }
`;

const LongLink = styled.a`
  text-decoration: none;
  font-size: 14px;
  color: #666;
  text-align: left;

  &:hover {
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

export default GeneratedLink;
