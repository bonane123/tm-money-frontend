import { styled } from 'styled-components';

import SingleReview from '../SingleReview';
import { useReviews } from '../../features/reviews/useReviews';
import Spinner from '../../ui/Spinner';

const Main = styled.main`
  background-color: var(--color-grey-0);
  padding: 4rem 4.8rem 6.4rem;

  @media (max-width:1200px){
    padding: 4rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

`;

// const StyledContainer = styled.div`
//   overflow: hidden;
//   position: relative;
// `;

const ReviewContainer = styled.div`
  display: flex;
  gap: 3.2rem;
  position: relative;
  @media (max-width:1200px){
    gap: 1.5rem;
  }
  @media (max-width:768px){
    flex-direction: column;
    max-width: 100%;
  }
`;

function Review() {
  const {data, isLoading} = useReviews();

  return (
    <Main>
      <Container>

        <ReviewContainer>
          {isLoading ? <Spinner/> : 
          <>
          {data.map((review) => (
          <SingleReview comment={review} key={review._id} />
          ))}
          </>
}
        </ReviewContainer>
      </Container>
    </Main>
  );
}

export default Review;
