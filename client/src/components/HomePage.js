import styled from 'styled-components';
import { FaLink } from 'react-icons/fa';
import GlobalStyle from './GlobalStyles';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Container2>
          <SectionTitle>How to Use EaziUrl</SectionTitle>
          <Paragraph>
            <FaLink /> Enter your long URL in the input field.
          </Paragraph>
          <Paragraph>
            <FaLink /> Click the 'Submit' button.
          </Paragraph>
          <Paragraph>
            <FaLink /> Get your shortened URL instantly!
          </Paragraph>
        </Container2>
        <Container3>
          <InnerContainer1>
            <SectionTitle>About EaziUrl</SectionTitle>
            <Paragraph>
              EaziUrl is a powerful URL shortener and encoder/decoder tool
              designed to simplify the way you share and manage links. With
              EaziUrl, you can transform long, unwieldy URLs into short,
              easy-to-share links.
            </Paragraph>
            <SectionTitle>Why Use URL Shorteners?</SectionTitle>
            <Paragraph>
              URL shorteners are essential for creating clean, concise links
              that are easier to remember and share. They are particularly
              useful in social media posts, emails, and advertisements where
              space is limited. Shortened URLs can also help track link
              performance and engagement.
            </Paragraph>
          </InnerContainer1>
          <InnerContainer2>
            <IconWrapper>
              <FaLink size={60} color="#007bff" />
            </IconWrapper>
            <ContentWrapper>
              <Title2>Create Your New Link</Title2>
              <StyledParagraph>
                Click the button below to create your custom shortened link.
              </StyledParagraph>
              <NavigationLink to="/newlink">Get Started</NavigationLink>
            </ContentWrapper>
          </InnerContainer2>
        </Container3>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background-repeat: no-repeat;
  padding: 20px;
  margin: 0 0 0 145px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: 'Nunito';
`;

const Container2 = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 20px;
`;

const Container3 = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: space-around;
`;

const InnerContainer1 = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  width: 45%;
`;

const SectionTitle = styled.h2`
  margin-bottom: 10px;
  color: #333;
`;

const Paragraph = styled.p`
  margin-bottom: 20px;
  line-height: 1.6;
`;

const InnerContainer2 = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 30px;
  width: 45%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

const IconWrapper = styled.div`
  margin-bottom: 20px;
  background-color: white;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title2 = styled.h1`
  margin-bottom: 20px;
  color: #333;
`;

const StyledParagraph = styled.p`
  margin-bottom: 20px;
  color: #555;
`;

const NavigationLink = styled(NavLink)`
  padding: 10px 20px;
  background-color: #007bff;
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

export default HomePage;
