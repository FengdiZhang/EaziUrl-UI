import styled from 'styled-components';

import { LoremIpsum } from 'lorem-ipsum';
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});
const HomePage = () => {
  return (
    <Wrapper>
      {/* <h1>This is my really homepage</h1> */}
      <Container1>
        <Title>✨ Get custom links and a complimentary domain.</Title>
      </Container1>
      <Container2>this is the second container</Container2>
      <Container3>
        <InnerContainer1>{lorem.generateParagraphs(2)}</InnerContainer1>
        <InnerContainer2>
          <Title2>Create your new Link</Title2>
          <p>Destination</p>
          <Input1 placeholder="http://example.com/my-desitination-url"></Input1>
          <p>
            Title <span>(optional)</span>
          </p>
          <Input1></Input1> <br />
          <Button>Submit</Button>
        </InnerContainer2>
      </Container3>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* border: 2px solid red; */
  /* background-color: #f4f6fa; */
  padding: 0 0 0 20px;
  margin: 0 0 0 140px;
  height: 100vh;
  font-family: 'Nunito';
`;
const Container1 = styled.div`
  margin: 10px 0;
  background-color: #ebfcff;
  padding: 20px;
  border-radius: 10px;
`;
const Title = styled.div`
  color: #357a8a;
  font-weight: bold;
`;
const Container2 = styled.div`
  border: 2px solid #e1e3e1;
  border-radius: 10px;
  padding: 20px;
`;
const Container3 = styled.div`
  border: 2px solid #e1e3e1;
  border-radius: 10px;
  margin-top: 10px;
  padding: 20px;
  display: flex;
  justify-content: space-around;
`;
const InnerContainer1 = styled.div`
  /* border: 2px solid red; */
  background-color: #f4f6fa;
  border-radius: 10px;
  padding: 20px;
  width: 40%;
`;
const InnerContainer2 = styled.div`
  /* border: 2px solid red; */
  background-color: #f4f6fa;
  border-radius: 10px;
  padding: 20px;
  width: 40%;
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
