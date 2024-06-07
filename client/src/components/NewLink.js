import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const NewLink = () => {
  const [longUrl, setLongUrl] = useState('');
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/encode', {
        url: longUrl,
        title: title,
      });
      navigate('/generatedlink', {
        state: {
          shortUrl: response.data.display_url,
          realUrl: response.data.real_url,
          title: title,
          longUrl: longUrl,
        },
      });
    } catch (error) {
      console.error('There was an error encoding the URL!', error);
    }
  };

  return (
    <Wrapper>
      <InnerContainer>
        <Title2>Create your new Link</Title2>
        <form onSubmit={handleSubmit}>
          <p>Destination</p>
          <Input1
            placeholder="http://example.com/my-destination-url"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
          />
          <p>
            Title <span>(optional)</span>
          </p>
          <Input1 value={title} onChange={(e) => setTitle(e.target.value)} />
          <br />
          <NavigationLink as="button" type="submit">
            Submit
          </NavigationLink>
        </form>
      </InnerContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  margin: 0;
  height: 100vh;
  font-family: 'Nunito';
`;

const InnerContainer = styled.div`
  background-color: #f4f6fa;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & p {
    font-weight: bold;
    width: 100%;
    & span {
      color: grey;
    }
  }
`;

const Title2 = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
  width: 100%;
`;

const Input1 = styled.input`
  width: 500px;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const NavigationLink = styled(NavLink)`
  padding: 10px 20px;
  background-color: #688ca1;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default NewLink;
