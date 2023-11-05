import { styled } from 'styled-components';
import PostReview from '../Layout/review/PostReview';
import UserReview from '../Layout/review/UserReview';

const Main = styled.main`
  background-color: var(--color-grey-0);
  padding: 4rem 4.8rem 6.4rem;

  @media (max-width:1200px){
    padding: 1rem;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 30% 70%;
  gap: 3rem;

  @media (max-width: 1200px) {
    grid-template-columns: 35% 65%;
    gap: 1rem;

  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;



const HelpPage = () => {
  return (
    <Main>
      <Container>
              <PostReview />
              <UserReview/>
      </Container>
    </Main>
  );
};

export default HelpPage;
