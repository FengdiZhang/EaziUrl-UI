import styled from 'styled-components';
const Header = () => {
  return (
    <Wrapper>
      <h1>Your connections platforms</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-bottom: 2px solid #e1e3e1;
  /* background-color: #f4f6fa; */
  margin: 0 0 0 140px;
  & h1 {
    margin: 20px;
    padding: 0 0 0 10px;
    font-family: 'Pacifico', sans-serif;
  }
`;
export default Header;
