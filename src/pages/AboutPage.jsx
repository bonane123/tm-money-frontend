import { styled } from 'styled-components';
import OurStory from '../Layout/about/OurStory';
import OurTeam from '../Layout/about/OurTeam';

const Main = styled.main`
  background-color: var(--color-grey-0);
  padding: 4rem 4.8rem 6.4rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
const AboutPage = () => {
  return (
    <Main>
      <Container>
        <OurStory />
        <OurTeam />
      </Container>
    </Main>
  );
};

export default AboutPage;
