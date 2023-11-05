import { styled } from 'styled-components';
import StarRating from '../StarRating';

const StyledReview = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: 250px;
  border-radius: 5px;
  padding: 1rem 2rem;
  white-space: normal;

  @media (max-width:768px){
    padding: 0rem;
  }
`;

const StyledMessage = styled.p`
  margin-bottom: 1.5rem;
  white-space: normal;
`;

const StyledRating = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;
function PostedReview() {
  return (
    <StyledReview>
      <StyledMessage>
        I recently purchased a new laptop from this store and I was thoroughly
        impressed with the quality of service and the product itself. The staff
        was friendly and helpful and the laptop exceeded my expectations.
      </StyledMessage>
      <StyledRating>
        <p>John Deo</p>
        <StarRating maxRating={5} size={24} />
      </StyledRating>
      <p>2022-12-15</p>
    </StyledReview>
  );
}

export default PostedReview;
