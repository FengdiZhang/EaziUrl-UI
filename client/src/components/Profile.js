import styled from 'styled-components';

const Links = () => {
  return (
    <Wrapper>
      <h1>Profile</h1>

      <Container>this is my container2</Container>
    </Wrapper>
  );
};
const Avatar = styled.img``;
const Wrapper = styled.div`
  padding: 0 0 0 20px;
  margin: 0 0 0 140px;
  height: 100vh;
  font-family: 'Nunito';
  & h1 {
    border-bottom: 2px solid #e1e3e1;
  }
`;
const Container = styled.div`
  border: 2px solid #e1e3e1;
  border-radius: 10px;
  margin-top: 10px;
  padding: 10px;
`;

export default Links;
