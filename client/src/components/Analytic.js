import styled from 'styled-components';
import { FaLink, FaUsers, FaRegSmile } from 'react-icons/fa';

const Analytics = () => {
  return (
    <Wrapper>
      <Container>
        <SectionTitle>Statistics</SectionTitle>
        <Stats>
          <StatItem>
            <StatIcon>
              <FaLink />
            </StatIcon>
            <StatNumber>10,000+</StatNumber>
            <StatLabel>URLs Shortened</StatLabel>
          </StatItem>
          <StatItem>
            <StatIcon>
              <FaUsers />
            </StatIcon>
            <StatNumber>5,000+</StatNumber>
            <StatLabel>Active Users</StatLabel>
          </StatItem>
          <StatItem>
            <StatIcon>
              <FaRegSmile />
            </StatIcon>
            <StatNumber>4.8/5</StatNumber>
            <StatLabel>User Satisfaction</StatLabel>
          </StatItem>
        </Stats>
      </Container>
      <ChartContainer>
        <ChartSection>
          <ChartImage src="/photos/chart1.jpg" alt="Daily Activity Chart" />
        </ChartSection>
        <ChartSection>
          <ChartImage src="/photos/chart2.jpg" alt="User Growth Chart" />
        </ChartSection>
      </ChartContainer>
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
  padding: 20px;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  margin-bottom: 10px;
  color: #333;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatIcon = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
  color: #357a8a;
`;

const StatNumber = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #357a8a;
`;

const StatLabel = styled.div`
  color: #666;
`;

const ChartContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #f4f6fa;
`;

const ChartSection = styled.div`
  border-radius: 10px;
  padding: 20px;
  width: 45%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const ChartImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export default Analytics;
