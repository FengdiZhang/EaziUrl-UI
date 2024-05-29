import styled from 'styled-components';
import { FaLink, FaUsers, FaRegSmile } from 'react-icons/fa';
import GlobalStyle from './GlobalStyles';

const HomePage = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        {/* <Container1>
        <Title>✨ Get custom links and a complimentary domain.</Title>
      </Container1> */}
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
            <Title2>Create your new Link</Title2>
            <p>Destination</p>
            <Input1 placeholder="http://example.com/my-destination-url"></Input1>
            <p>
              Title <span>(optional)</span>
            </p>
            <Input1></Input1> <br />
            <Button>Submit</Button>
          </InnerContainer2>
        </Container3>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background-repeat: no-repeat; /* 防止背景图片重复 */
  padding: 20px;
  margin: 0 0 0 145px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: 'Nunito';
`;

// const Container1 = styled.div`
//   background-color: rgba(255, 255, 255, 0.8);
//   border-radius: 10px;
//   padding: 20px;
// `;

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
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  width: 45%;
  & p {
    font-weight: bold;
    & span {
      color: grey;
    }
  }
`;

const Title2 = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const Input1 = styled.input`
  width: 90%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 95%;
  padding: 10px;
  margin-top: 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default HomePage;
