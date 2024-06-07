import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <Text>
        EaziUrl : <span>Your connections platforms</span>
      </Text>
      <Container1>
        <Title>✨ Get custom links and a complimentary domain.</Title>
      </Container1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* border-bottom: 2px solid #e1e3e1; */
  /* background-color: #f4f6fa; */
  margin: 0 0 0 145px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Text = styled.p`
  margin: 20px;
  padding: 0 0 0 10px;
  font-family: 'Pacifico', sans-serif;
  font-size: 37px;

  & span {
    font-family: 'Anton';
  }
`;

const Container1 = styled.div`
  margin: 10px 0;
  /* background-color: #ebfcff; */
  background-color: rgba(255, 255, 255, 0.8);
  padding: 16px;
  border-radius: 10px;
`;

const Title = styled.div`
  /* color: #357a8a; */
  color: #3d808f;
  font-weight: bold;
`;

export default Header;
